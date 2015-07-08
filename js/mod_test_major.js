/*
    Test Harness:: mod_test_major.js
    Modernizr function calls

    called from mod_tests.js
    
    major function abilities

*/
//
// init array
//
var majorArray = new Array(22);
function popMajor() {
  // set the array to default false
  for (n = 0; n < 22; ++n) {
      majorArray[n] = false;
  }
  return "OK"
}
//
// individual tests, simple
//
function scriptasync() {
  if (Modernizr.scriptasync) {
    majorArray[0] = true;
    return "OK";
  }
  else return "NO";  
}
function scriptdefer() {
  if (Modernizr.scriptdefer) {
    majorArray[1] = true;
    return "OK";
  }
  else return "NO";
}
function unicode() {
  if (Modernizr.unicode) {
    majorArray[2] = true;
    return "OK";
  }
  else return "NO";
}
function applicationcache() {
  if (Modernizr.applicationcache) {
    majorArray[3] = true;
    return "OK";
  }
  else return "NO";
}
function history() {
  if (Modernizr.history) {
    majorArray[4] = true;
    return "OK";
  }
  else return "NO";
}
function sessionstorage() {
  if (Modernizr.sessionstorage) {
    majorArray[5] = true;
    return "OK";
  }
  else return "NO";
}
function localstorage() {
  if (Modernizr.localstorage) {
    majorArray[6] = true;
    return "OK";
  }
  else return "NO";
}
function canvas() {
  if (Modernizr.canvas) {
    majorArray[7] = true;
    return "OK";
  }
  else return "NO";
}
function ie8compat() {
  if (Modernizr.ie8compat) {
    majorArray[8] = true;
    return "OK";
  }
  else return "NO";
}
function touch() {
  if (Modernizr.touch) {
    majorArray[9] = true;
    return "OK";
  }
  else return "NO";
}
function json() {
  Modernizr.addTest('json', function(){
    return window.JSON
        && window.JSON.parse
        && typeof window.JSON.parse === 'function'
        && window.JSON.stringify
        && typeof window.JSON.stringify === 'function';
  });
  
  if (Modernizr.json) {
    majorArray[10] = true;
    return "OK";
  }
  else return "NO";
}
function cookies() {
  if (Modernizr.cookies) {
    majorArray[11] = true;
    return "OK";
  }
  else return "NO";
}
function webgl() {
  if (Modernizr.webgl) {
    majorArray[12] = true;
    return "OK";
  }
  else return "NO";
}
function video() {
  if (Modernizr.video) {
    majorArray[13] = true;
    return "OK";
  }
  else return "NO";
}
function videoOgg() {
  if (Modernizr.video.ogg) {
    majorArray[14] = true;
    return "OK";
  }
  else return "NO";
}
function videoH264() {
  if (Modernizr.video.h264) {
    majorArray[15] = true;
    return "OK";
  }
  else return "NO";
}
function videoWebm() {
  if (Modernizr.video.webm) {
    majorArray[16] = true;
    return "OK";
  }
  else return "NO";
}
function audio() {
  if (Modernizr.audio) {
    majorArray[17] = true;
    return "OK";
  }
  else return "NO";
}
function audioOgg() {
  if (Modernizr.audio.ogg) {
    majorArray[18] = true;
    return "OK";
  }
  else return "NO";
}
function audioMp3() {
  if (Modernizr.audio.mp3) {
    majorArray[19] = true;
    return "OK";
  }
  else return "NO";
}
function audioWav() {
  if (Modernizr.audio.wav) {
    majorArray[20] = true;
    return "OK";
  }
  else return "NO";
}
function audioM4a() {
  if (Modernizr.audio.m4a) {
    majorArray[21] = true;
    return "OK";
  }
  else return "NO";
}