/*
    Test Harness:: boomer_call.js
    Boomerang function calls

    called from index
    
    test the boomerang

*/
//
// simple
//
BOOMR.init({
  beacon_url: "http://192.168.56.1/test/mustard/stop.html", 
  site_domain: "http://192.168.56.1/",
    BW: {
      base_url: "http://192.168.56.1/test/mustard/images/",
      cookie: "BW",
      nruns: 2,
      block_beacon: true
    }
});

BOOMR.subscribe('before_beacon', function(o) {
  var html = "";
  if(o.t_done) { html += "This page took " + o.t_done + "ms to load<br>"; }
  if(o.bw) { html += "Your bandwidth to this server is " + parseInt(o.bw/1024) + "kbps (&#x00b1;" + parseInt(o.bw_err*100/o.bw) + "%)<br>"; }
  if(o.lat) { html += "Your latency to this server is " + parseInt(o.lat) + "&#x00b1;" + o.lat_err + "ms<br>"; }

  document.getElementById('boomer_status').innerHTML = html;
  loadTests();
});

/*

utilities

*/
var urlCheck = "http://192.168.56.1/test/mustard/images/index.html";
function urlBoomerChecker() {
  /*
  // check if this path is readable
  urlExists("http://192.168.56.1/test/mustard/images/index.html", function(exists){
    return exists;
  });
  */
  return urlExists(urlCheck);
}

function urlExists(url) {//, callback){
  $.ajax({
    type: 'HEAD',
    url: url,
    success: function(){
      //callback(true);
      return true;
    },
    error: function() {
      //callback(false);
      return false;
    }
  });
}