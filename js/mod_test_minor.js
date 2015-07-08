/*
    Test Harness:: mod_test_minor.js
    Modernizr function calls

    called from mod_tests.js
    
    minor function abilities and css

*/
//
// init array
//
var minorArray = new Array(25);
function popMinor() {
  // set the array to default false
  for (n = 0; n < 25; ++n) {
      minorArray[n] = false;
  }
  return "OK"
}
//
// individual tests, simple
//
function fontface() {
  if (Modernizr.fontface) {
    minorArray[0] = true;
    return "OK";
  }
  else return "NO";
}
function backgroundsize() {
  if (Modernizr.backgroundsize) {
    minorArray[1] = true;
    return "OK";
  }
  else return "NO";
}
function borderradius() {
  if (Modernizr.borderradius) {
    minorArray[2] = true;
    return "OK";
  }
  else return "NO";
}
function boxshadow() {
  if (Modernizr.boxshadow) {
    minorArray[3] = true;
    return "OK";
  }
  else return "NO";
}
function opacity() {
  if (Modernizr.opacity) {
    minorArray[4] = true;
    return "OK";
  }
  else return "NO";
}
function rgba() {
  if (Modernizr.rgba) {
    minorArray[5] = true;
    return "OK";
  }
  else return "NO";
}
function mqAll() {
  if (Modernizr.mq( 'only all')) {
    minorArray[6] = true;
    return "OK";
  }
  else return "NO";
}
function generatedContent() {
  if (Modernizr.generatedcontent) {
    minorArray[7] = true;
    return "OK";
  }
  else return "NO";
}
function cssGradients() {
  if (Modernizr.cssgradients) {
    minorArray[8] = true;
    return "OK";
  }
  else return "NO";
}
function dragDrop() {
  if (Modernizr.draganddrop) {
    minorArray[9] = true;
    return "OK";
  }
  else return "NO";
}
function formValidation() {
  if (Modernizr.formvalidation) {
    minorArray[10] = true;
    return "OK";
  }
  else return "NO";
}
function inputAutofocus() {
  if (Modernizr.input.autofocus) {
    minorArray[11] = true;
    return "OK";
  }
  else return "NO";
}
function inputPlaceholder() {
  if (Modernizr.input.placeholder) {
    minorArray[12] = true;
    return "OK";
  }
  else return "NO";
}
function inputRequired() {
  if (Modernizr.input.required) {
    minorArray[13] = true;
    return "OK";
  }
  else return "NO";
}
function deviceOrientation() {
  if (Modernizr.deviceorientation) {
    minorArray[14] = true;
    return "OK";
  }
  else return "NO";
}
function ruby() {
  if (Modernizr.ruby) {
    minorArray[15] = true;
    return "OK";
  }
  else return "NO";
}
function lastChild() {
  if (Modernizr.lastchild) {
    minorArray[16] = true;
    return "OK";
  }
  else return "NO";
}
function cors() {
  if (Modernizr.cors) {
    minorArray[17] = true;
    return "OK";
  }
  else return "NO";
}
function aDownload() {
  if (Modernizr.adownload) {
    minorArray[18] = true;
    return "OK";
  }
  else return "NO";
}
function webWorkers() {
  if (Modernizr.webworkers) {
    minorArray[19] = true;
    return "OK";
  }
  else return "NO";
}
function supports() {
  if (Modernizr.supports) {
    minorArray[20] = true;
    return "OK";
  }
  else return "NO";
}
function iframeSrcdoc() {
  if (Modernizr.srcdoc) {
    minorArray[21] = true;
    return "OK";
  }
  else return "NO";
}
function lowBandwidth() {
  if (Modernizr.lowbandwidth) {
    minorArray[22] = true;
    return "OK";
  }
  else return "NO";
}
function performance() {
  if (Modernizr.performance) {
    minorArray[23] = true;
    return "OK";
  }
  else return "NO";
}
function xhr2() {
  if (Modernizr.xhr2) {
    minorArray[24] = true;
    return "OK";
  }
  else return "NO";
}