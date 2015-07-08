<?php
/*
    Test Harness:: listManager.php
    manage lists, parsing
    .make safe.

    ------> THIS IS PHP <------
*/
$majorNamesArray = array();
$minorNamesArray = array();

function popArrayLists() {
  global $majorNamesArray;
  array_push($majorNamesArray,
      "scriptasync",
      "scriptdefer",
      "unicode",
      "applicationcache",
      "history",
      "sessionstorage", 
      "localstorage",
      "canvas",
      "ie8compat",
      "touch",
      "json",
      "cookies",
      "webgl",
      "video",
      "videoOgg",
      "videoH264",
      "videoWebm",
      "audio",
      "audioOgg",
      "audioMp3",
      "audioWav",
      "audioM4a"
  );
  global $minorNamesArray;
  array_push($minorNamesArray,
      "fontface",
      "backgroundsize",
      "borderradius", 
      "boxshadow",
      "opacity",
      "rgba",
      "mqAll",
      "generatedContent",
      "cssGradients",
      "dragDrop",
      "formValidation",
      "inputAutofocus",
      "inputPlaceholder",
      "inputRequired",
      "deviceOrientation",
      "ruby",
      "lastChild",
      "cors",
      "aDownload",
      "webWorkers",
      "supports",
      "iframeSrcdoc",
      "lowBandwidth",
      "performance",
      "xhr2"
  );
}

function getListStatus() {
  global $majorNamesArray;
  global $minorNamesArray;
  
  if (isset($majorNamesArray)) {
    if (isset($minorNamesArray)) {
      printDebug("LM: listStatus: OK");
      return true;
    }
  }
  printDebug("LM: listStatus: ERROR");
  return false;
}

function getMajorList() {
  global $majorNamesArray;
  return $majorNamesArray;
}
function getMinorList() {
  global $minorNamesArray;
  return $minorNamesArray;
}

function writeListsToFile($useragent, $majorArray, $minorArray) {
  //$answer_data = serialize($majorArray);
  //$name_data = serialize($majorNamesArray);
  printDebug("LM: useragent: " . $useragent);
  printDebug("LM: major lines:" . count($majorArray));
  printDebug("LM: minor lines:" . count($minorArray));
  
  /*
  // test debug printout
  // use the global, match answers to names
  global $majorNamesArray;
  global $minorNamesArray;
    
  $lines = array();
  for ($i = 0; $i < count($majorArray); $i++) {
    $lines[$i] = $majorNamesArray[$i] . ": " . $majorArray[$i];
    printDebug("LM: " . $lines[$i]);
  }
  $j = count($majorArray);
  for ($i = 0; $i < count($minorArray); $i++) {
    $lines[$j] = $minorNamesArray[$i] . ": " . $minorArray[$i];
    printDebug("LM: " . $lines[$j]);
    $j++;
  }
  */
  //file_put_contents("your-file.txt", $lines);
}

?>