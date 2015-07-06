<?php
/*
    Test Harness:: mod_tests_bridge.php
    get tests results from js
    via POST

    write results to flatfile for testing

    ------> THIS IS PHP <------
*/

require('../lib/debug.php');

//$majorArray = array[];
//$arrayFromPost = filter_input(INPUT_POST, 'postArray', FILTER_SANITIZE_STRING);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  printDebug("request method post...");
  $majorArray = json_decode($_POST["postArray"]);
  printDebug("parsePostage: call...");
  parsePostage($majorArray);  
}

if (storeArray($majorArray)) {
  printDebug("storeArray: true");
  
}

function parsePostage($arrayParse) {
  //console.log('MTB: parsePostage called.');
  if (isset($arrayparse)) {
    $length = $arrayParse.count();
    for ($i = 0; $i < $length; $i++) {
      //echo $arrayParse[$i];
      printDebug($arrayparse[$i]);
    }
  }
  else {
    printDebug("parse: ERROR - arrayParse false");
  }
}

//$majorArray = [];
/*
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  console.log('MTB: server request...');
  $majorArray = $_POST['majorArray']);
  console.log('MTB: post majorArray.');
  if ($majorArray.count() >= 1) {
    console.log('MTB: count >= 1');
    parsePostage();    
  }
  else {
    // no array found in post
  }
}

function parsePostage() {
  console.log('MTB: parsePostage called.');
  int length = $majorArray.count();
  for (int i = 0; i < length; i++) {
    echo $majorLength[i];
  }  
}
*/

?>