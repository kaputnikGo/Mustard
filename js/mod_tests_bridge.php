<?php
/*
    Test Harness:: mod_tests_bridge.php
    get tests results from js
    via POST
    in js folder
    write results to flatfile for testing
    .make safe.

    ------> THIS IS PHP <------
*/
$root = $_SERVER['DOCUMENT_ROOT'];
$library = $root.'/test/mustard/lib/';

require_once($library.'debug.php');
require_once($library.'listManager.php');

$majorArray = array();
$minorArray = array();
$arrayData = array();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  printDebug("MTB: json_decode post array data..."); 
  
  $dataMaj = json_decode(stripslashes($_POST["jsonArrayMaj"]));
  $dataMin = json_decode(stripslashes($_POST["jsonArrayMin"]));
  
  // keeping these values as 0 or 1 allows for ease in collating of stats
  $i = 0;
  foreach($dataMaj as $dMaj) {
    if ($dMaj) 
      $majorArray[$i] = intval(true);
    else 
      $majorArray[$i] = intval(false);
    $i++;
  }
  
  printDebug("MTB: json_decode post minor..."); 
  $j = 0;
  foreach($dataMin as $dMin) {
    if ($dMin) 
      $minorArray[$j] = intval(true);
    else 
      $minorArray[$j] = intval(false);
    $j++;
  }
  printDebug("MTB: end json_decode post: OK");
    
  parseNameValues($majorArray, $minorArray);  
}

function parseNameValues($majorArray, $minorArray) {
  if ($majorArray) {
    printDebug("MTB: major count: " . count($majorArray));
  }
  else 
    printDebug("MTB: major parse - ERROR");
  
  if ($minorArray) { 
    printDebug("MTB: minor count: " . count($minorArray));
  }
  else 
    printDebug("MTB: minor parse - ERROR");
  
  parseNameArrays($majorArray, $minorArray);
}

function parseNameArrays($majorArray, $minorArray) {
  popArrayLists();
  if (getListStatus()) {
    printDebug("MTB: listStatus: OK");
    $majorNames = Array();
    $majorNames = getMajorList();
    $length = count($majorNames);
    for ($i = 0; $i < $length; $i++) {
      printDebug("MTB: " . $majorNames[$i] . ": " . $majorArray[$i]);
    }
    writeListsToFile($majorArray, $minorArray);
  }
  else {
    printDebug("MTB: listStatus: ERROR");
  }
}

?>