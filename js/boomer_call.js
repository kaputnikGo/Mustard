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
  beacon_url: "http://127.0.0.1/test/mustard/stop.html",
  site_domain: "http://127.0.0.1/",
    BW: {
      base_url: "http://127.0.0.1/test/mustard/images/",
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