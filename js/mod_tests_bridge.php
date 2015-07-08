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
  printDebug("MTB: json_decode post...");   
  $dataMaj = json_decode(stripslashes($_POST["jsonArrayMaj"]));
  $dataMin = json_decode(stripslashes($_POST["jsonArrayMin"]));
  $useragent = json_decode(stripslashes($_POST["useragent"]));
  // keeping these values as 0 or 1 allows for ease in collating of stats
  $i = 0;
  foreach($dataMaj as $dMaj) {
    if ($dMaj) 
      $majorArray[$i] = intval(true);
    else 
      $majorArray[$i] = intval(false);
    $i++;
  }  
  $j = 0;
  foreach($dataMin as $dMin) {
    if ($dMin) 
      $minorArray[$j] = intval(true);
    else 
      $minorArray[$j] = intval(false);
    $j++;
  }
  printDebug("MTB: json_decode post: OK");    
  checkResultValues($useragent, $majorArray, $minorArray);  
}

function checkResultValues($useragent, $majorArray, $minorArray) {
  if (empty($majorArray)) {
    printDebug("MTB: majorArray empty");
  }
  if (empty($minorArray)) {
    printDebug("MTB: minorArray empty");
  }    
  popArrayLists();
  if (getListStatus()) {
    /*
    $majorNames = Array();
    $majorNames = getMajorList();
    $length = count($majorNames);
    for ($i = 0; $i < $length; $i++) {
      printDebug("MTB: " . $majorNames[$i] . ": " . $majorArray[$i]);
    }
    */
    writeListsToFile($useragent, $majorArray, $minorArray);
  }
  else {
    printDebug("MTB: listStatus: ERROR");
  }
}

if(isset($_POST['parseCookie'])) {  
  printDebug("MTB: parse cookie called.");
  $cookie_name = "MT-test";
  
  if(!isset($_COOKIE[$cookie_name])) {
    printDebug("Cookie named '" . $cookie_name . "' is not set.");
  } else {
    printDebug("Cookie '" . $cookie_name . "' is set.");
    $cookiedArray = array();
    $cookiedArray = json_decode(stripslashes($_COOKIE[$cookie_name]));
    //debugCookie($cookiedArray);
    
    // NOW, do something wiht it.
  }
}

function debugCookie($cookiedArray) {
  // gets blank for 0/false and 1 for 1/true
  printDebug("MTB: debug cookie called.");
  foreach($cookiedArray as $line) {
    printDebug("Value is: " . $line);
  }
}

?>