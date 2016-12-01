// NOTE: If you run this file locally
// You will not get a server status and the example will fail
// Comment out lines 9 and 11 if you are working locally

var xhr = new XMLHttpRequest();                 // create XMLHttpRequest object

xhr.onload = function() {                       // when response has loaded
  // The following conditional check will not work locally - only on a server
  if(xhr.status === 200) {                       // if the server was ok
    document.getElementById('content').innerHTML = xhr.responseText; // then it updates
  }
};

xhr.open('GET', 'data/data.html', true);        // prepares the request
xhr.send(null);                                 // send the request