<?php
/*
    Test Harness:: debug.php
    console debug testing
    via /js/mod_tests_bridge.php
    
    c:\\Apache24\\htdocs\\php-errors.log

    ------> THIS IS PHP <------
*/
$filename = "c:\\Apache24\\htdocs\\php-errors.log";


function printDebug($stringData) {
  if ($stringData != null) {
    echo "document.getElementById(\"php_debug\").innerHTML = " . $stringData . "\n\r";
    error_log($stringData, 0);
  }
}

if(isset($_POST['action']) && !empty($_POST['action'])) {
  printDebug("DEBUG: action posted"); 
  $action = $_POST['action'];
  switch($action) {
    case 'result' : 
      result();
      break;
    case 'clearLog' :
      clearLog();
      break;
  }
}

function result() {
  printDebug("DEBUG: posted result");
}

function storeArray($array) {
  // TODO
  return false;
}

/****************************

Git the err log nag dang it

****************************/

function displayContents() {
	$lines = readLastLines(20, true);
	if ( $lines === null ) {
		echo '<p>The log file is null.</p>';
	} 
  else if ( empty($lines) ) {
		echo '<p>The log file is empty.</p>';
	} 
  else {
		echo '<table class="widefat"><tbody>';
		$isOddRow = false;
		foreach ($lines as $line) {
			$isOddRow = !$isOddRow;
			printf(
				'<tr%s><td style="white-space:nowrap;">%s</td><td>%s</td></tr>',
				$isOddRow ? ' class="alternate"' : '',
				!empty($line['timestamp']) ? formatTimestamp($line['timestamp']) : '',
				htmlspecialchars($line[43])
			);
		}
		echo '</tbody></table>';
		echo '<p>';
		printf(
			'Log file: %s (%s) ',
			htmlspecialchars(getFilename()),
			formatByteCount(getFileSize(), 2)
		);
		echo '</p>';
	}
}


function readLastLines($lineCount, $skipEmptyLines = false) {
	$lines = readLastLinesFromFile(getFilename(), $lineCount, $skipEmptyLines);
	if ( $lines === null ) {
		sprintf(
			'Could not open the log file "%s".',
			htmlspecialchars(getFilename())
		);
	}
	return $lines;
}

/*
utilities
*/
function getFilename() {
	return "c:\\Apache24\\htdocs\\php-errors.log";
}
function getFileSize() {
	return filesize(getFilename());
}
function formatTimestamp($timestamp) {
	return gmdate('M d, H:i:s', $timestamp);
}
function loadLog() {
  
}
function clearLog() {
	$handle = fopen(getFilename(), 'w');
  if ($handle === false) {
    printDebug("DEBUG: ERROR: could not open file.");
    return 0;
  }
	fclose($handle);
}
/****************
internal functions
****************/

function formatByteCount($bytes, $precision = 2) {
	$units = array('bytes', 'KiB', 'MiB', 'GiB', 'TiB'); //SI units.

	$bytes = max($bytes, 0);
	$pow = floor(($bytes ? log($bytes) : 0) / log(1024));
	$pow = min($pow, count($units) - 1);

	$size = $bytes / pow(1024, $pow);

	return round($size, $precision) . ' ' . $units[$pow];
}

function parseLogLine($line) {
	$line = rtrim($line);
	$timestamp = null;
	$message = $line;
	//expect log entries: "[date-and-time] message".
	if ( (substr($line, 0, 1) === '[') &&  (strpos($line, ']') !== false) ) {
		list($parsedTimestamp, $remainder) = explode(']', $line, 2);
		$parsedTimestamp = strtotime(trim($parsedTimestamp, '[]'));
		if ( !empty($parsedTimestamp) ) {
			$timestamp = $parsedTimestamp;
			$message = $remainder;
		}
	}
	return compact('timestamp', 'message');
}

function readLastLinesFromFile($filename, $lineCount = 20, $skipEmptyLines = false, $bufferSizeInBytes = 5120) {
  $handle = fopen($filename, 'rb');
	if ( $handle === false ) {
		return null;
	}

	$lines = array();
	$remainder = '';

	//Start reading from the end of the file. Then move back towards the start
	//of the file, reading it in $bufferSizeInBytes blocks.
	fseek($handle, 0, SEEK_END);
	$position = ftell($handle);

	while ( (count($lines) < $lineCount) && ($position != 0) ) {
		//Since $position is an offset from the start of the file,
		//it's also equal to the total amount of remaining data.
		$bytesToRead = ($position > $bufferSizeInBytes) ? $bufferSizeInBytes : $position;
		$position = $position - $bytesToRead;
		fseek($handle, $position, SEEK_SET);
		$buffer = fread($handle, $bytesToRead);

		//We may have a partial line left over from the previous iteration.
		$buffer .= $remainder;

		$newLines = preg_split('@\n@', $buffer, -1, $skipEmptyLines ? PREG_SPLIT_NO_EMPTY : 0);

		//It's likely that we'll start reading in the middle of a line (unless we're at
		//the start of the file), so lets leave the first line for later.
		if ( $position != 0 ) {
			$remainder = array_shift($newLines);
		}

		//Add the new lines to the start of the list.
		$lines = array_merge($newLines, $lines);
	}

	fclose($handle);
	return array_slice($lines, -$lineCount);
}

?>