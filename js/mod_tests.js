/*
    Test Harness:: mod_tests.js
    Modernizr function calls
    
    probably should get a unique function prefix...
    and a generic function loop...
    
    write results to index.html

*/
// vars for use with multiple functions on this page
function initState() {
  var x = navigator.userAgent;
  document.getElementById("usera").innerHTML = x;
  //
  var v = Modernizr._version;
  document.getElementById("modver").innerHTML = v; 
  //boomerCheck();
  initTests();
  loadTests();
}
function initTests() {
  console.log('MT: popMajor...');
  document.getElementById('modernizr_status').innerHTML = "pop major";
  var resultMaj = popMajor();
  if (resultMaj === "OK") {
    console.log("MT: popMajor: OK");
  }
  else {
    console.log('MT: popMajor: ERROR');
  }
  //
  console.log('MT: popMinor...');
  document.getElementById('modernizr_status').innerHTML = "pop minor";
  var result = popMinor();
  if (result === "OK") {
    console.log("MT: popMinor: OK");
  }
  else {
    console.log('MT: popMinor: ERROR');
  }
}
function loadTests() {
  console.log("MT: loadTests called.");  
  document.getElementById('modernizr_status').innerHTML = "major running";
  runModTestsMajor();
  document.getElementById('modernizr_status').innerHTML = "major complete";
  //
  document.getElementById('modernizr_status').innerHTML = "minor running";
  runModTestsMinor();
  document.getElementById('modernizr_status').innerHTML = "minor complete";
}
/***************************

DEBUGGER TO SCREEN FUNCTIONS

***************************/
function clearDebugOutput() {
  document.getElementById("php_parse").innerHTML = "debug log: clearing...";
  
  $.ajax({
    url: "/test/mustard/lib/debug.php",
    data: {action: 'clearLog'},
    type: 'post',
    success: function(data){
      $("#php_parse").text("debug log cleared: OK");
      $("#php_debug").text("log cleared: OK");
    }
  });
} 
function getDebugOutput() {
  getRequest(
      '/php-errors.log', // URL for the PHP file
       drawDebugOutput,  // handle successful request
       drawDebugError    // handle error
  );
  return false;
}  
// handles drawing an error message
function drawDebugError() {
    var container = document.getElementById('php_debug');
    container.innerHTML = 'mod_tests: ERROR - get request fail.';
}
// handles the response, adds the html
function drawDebugOutput(responseText) {
    var container = document.getElementById('php_debug');  
    // render \n as line break
    var formatText = responseText.replace(/\n/g, "<br />");
    // check state of log
    if (formatText.length === 0) {
      container.innerHTML = ("Log is empty.");
    }
    else if (typeof formatText != 'undefined') {
      container.innerHTML = (formatText);
    }
    else container.innerHTML = ("Log is null.");
}
// helper function for cross-browser request object
function getRequest(url, success, error) {
    var req = false;
    try{
        // most browsers
        req = new XMLHttpRequest();
    } catch (e){
        // IE
        try{
            req = new ActiveXObject("Msxml2.XMLHTTP");
        } catch(e) {
            // try an older version
            try{
                req = new ActiveXObject("Microsoft.XMLHTTP");
            } catch(e) {
                return false;
            }
        }
    }
    if (!req) return false;
    if (typeof success != 'function') success = function () {};
    if (typeof error!= 'function') error = function () {};
    req.onreadystatechange = function(){
        if(req.readyState == 4) {
            return req.status === 200 ? 
                success(req.responseText) : error(req.status);
        }
    }
    req.open("GET", url, true);
    req.send(null);
    return req;
}
/***************************

MODERNIZR TEST CALL FUNCTIONS

***************************/
function runModTestsMajor() {
  document.getElementById("scriptasync").innerHTML = "(uncertain) scriptasync: " + scriptasync();
  document.getElementById("scriptdefer").innerHTML = "(uncertain) scriptdefer: " + scriptdefer();
  document.getElementById("unicode").innerHTML = "(uncertain) unicode: " + unicode();
  document.getElementById("applicationcache").innerHTML = "applicationcache: " + applicationcache();
  document.getElementById("history").innerHTML = "history: " + history();
  document.getElementById("sessionstorage").innerHTML = "sessionstorage: " + sessionstorage(); 
  document.getElementById("localstorage").innerHTML = "localstorage: " + localstorage(); 
  document.getElementById("canvas").innerHTML = "canvas: " + canvas();
  document.getElementById("ie8compat").innerHTML = "ie8compat: " + ie8compat();
  document.getElementById("touch").innerHTML = "(unreliable) touch: " + touch();
  document.getElementById("json").innerHTML = "json: " + json();
  document.getElementById("cookies").innerHTML = "cookies: " + cookies();
  document.getElementById("webgl").innerHTML = "webgl: " + webgl();
  document.getElementById("video").innerHTML = "video: " + video();
  document.getElementById("videoOgg").innerHTML = "ogg: " + videoOgg();
  document.getElementById("videoH264").innerHTML = "h264: " + videoH264();
  document.getElementById("videoWebm").innerHTML = "webM: " + videoWebm(); 
  document.getElementById("audio").innerHTML = "audio: " + audio();
  document.getElementById("audioOgg").innerHTML = "ogg: " + audioOgg();
  document.getElementById("audioMp3").innerHTML = "mp3: " + audioMp3(); 
  document.getElementById("audioWav").innerHTML = "wav: " + audioWav();  
  document.getElementById("audioM4a").innerHTML = "m4a: " + audioM4a();
}
function runModTestsMinor() {
  document.getElementById("fontFace").innerHTML = "fontface: " + fontface(); 
  document.getElementById("backgroundSize").innerHTML = "background size: " + backgroundsize(); 
  document.getElementById("borderRadius").innerHTML = "border radius: " + borderradius();  
  document.getElementById("boxShadow").innerHTML = "box shadow: " + boxshadow(); 
  document.getElementById("opacity").innerHTML = "opacity: " + opacity();
  document.getElementById("rgba").innerHTML = "rgba: " + rgba();
  document.getElementById("mqAll").innerHTML = "media query all: " + mqAll();
  document.getElementById("generatedContent").innerHTML = "generated content(:before/:after): " + generatedContent();
  document.getElementById("cssGradients").innerHTML = "css gradients: " + cssGradients();
  document.getElementById("dragDrop").innerHTML = "drag and drop: " + dragDrop();
  document.getElementById("formValidation").innerHTML = "form validation: " + formValidation();
  document.getElementById("inputAutofocus").innerHTML = "input autofocus: " + inputAutofocus();
  document.getElementById("inputPlaceholder").innerHTML = "input placeholder: " + inputPlaceholder();
  document.getElementById("inputRequired").innerHTML = "input required: " + inputRequired();
  document.getElementById("deviceOrientation").innerHTML = "device orientation: " + deviceOrientation();
  document.getElementById("ruby").innerHTML = "ruby: " + ruby();
  document.getElementById("lastChild").innerHTML = "last-child: " + lastChild();
  document.getElementById("cors").innerHTML = "cross-origin-resource: " + cors();
  document.getElementById("aDownload").innerHTML = "a download: " + aDownload();
  document.getElementById("webWorkers").innerHTML = "web workers: " + webWorkers();
  document.getElementById("supports").innerHTML = "@ supports: " + supports();
  document.getElementById("iframeSrcdoc").innerHTML = "iframe srcdoc: " + iframeSrcdoc();
  document.getElementById("lowBandwidth").innerHTML = "low bandwidth: " + lowBandwidth();
  document.getElementById("performance").innerHTML = "performance: " + performance();
  document.getElementById("xhr2").innerHTML = "XMLHttpRequest level 2: " + xhr2();
  
  compileResults();
}
/***************************

TEST RESULT/PARSE FUNCTIONS

***************************/
function compileResults() {
  console.log('MT: compileResults...');
  document.getElementById("php_parse").innerHTML = "compileResults...";
  // test with majorArray first
  if (typeof majorArray !== 'undefined' && majorArray.length > 10) {
    // the array is defined and has at least 10 elements
    console.log('MT: majorArray: OK');
    document.getElementById("php_parse").innerHTML = "majorArray: OK.";
    // test with minorArray next
    if (typeof minorArray !== 'undefined' && minorArray.length > 10) {
      // the array is defined and has at least 10 elements
      console.log('MT: minorArray: OK');
      document.getElementById("php_parse").innerHTML = "minorArray: OK.";
      sendResults();
    }
    else {
      console.log('MT: minorArray: ERROR');
      document.getElementById("php_parse").innerHTML = "minorArray: ERROR."; 
    }   
  }
  else {
    console.log('MT: majorArray: ERROR');
    document.getElementById("php_parse").innerHTML = "majorArray: ERROR."; 
  } 
}
function sendResults() { 
  document.getElementById("php_parse").innerHTML = "sending arrays..."; 
  $.ajax({
    type: 'POST',
    data: {'jsonArrayMaj':JSON.stringify(majorArray), 'jsonArrayMin':JSON.stringify(minorArray)},
    dataType: 'json',
    url: '/test/mustard/js/mod_tests_bridge.php',
    success: function(data){
      console.log("post major: OK");
      $("#php_parse").text("post major: OK");
    }
  });
  
  postResults();
}
function postResults() {
  document.getElementById("php_parse").innerHTML = "post resulted: OK";
  
  $.ajax({
    url: "/test/mustard/lib/debug.php",
    data: {action: 'result'},
    type: 'POST',
    success: function(data){
      $("#php_parse").text("ajax post to debug");
    }
  });
}
/***************************

DEBUGGER UTILITIES

***************************/
function boomerCheck() {
  document.getElementById("php_parse").innerHTML = "boomer check: running";
  exists = urlBoomerChecker();
  if (exists) { 
    console.log("boomerCheck: OK");
    document.getElementById("php_parse").innerHTML = "boomer_call: url exists.";
  }
  else {
    console.log("boomerCheck: ERROR");
    document.getElementById("php_parse").innerHTML = "boomer_call: url error.";
  }
}

