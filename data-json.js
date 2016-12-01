// NOTE: If you run this file locally
// You will not get a server status
// You can comment out lines 9 and 26 to make it work locally

var xhr = new XMLHttpRequest();                 // creates XMLHttpRequest object

xhr.onload = function() {                       // when responses has loaded
  // The following conditional check will not work locally - only on a server
  //if(xhr.status === 200) {                      // if server is ok
    responseObject = JSON.parse(xhr.responseText); // parse the response

    // create newContent object
    var newContent = '';
    for (var i = 0; i < responseObject.events.length; i++) { // for every event in responseObject add the following to newContent
      newContent += '<div class="event">';
      newContent += '<img src="' + responseObject.events[i].map + '" ';
      newContent += 'alt="' + responseObject.events[i].location + '" />';
      newContent += '<p><b>' + responseObject.events[i].location + '</b><br>';
      newContent += responseObject.events[i].date + '</p>';
      newContent += '</div>';
    }

    // displays the object newContent
    document.getElementById('content').innerHTML = newContent;

  //}
};

xhr.open('GET', 'data/data.json', true);        // prepares the request
xhr.send(null);                                 // sends the request

// When working locally in Firefox, you may see an error saying that the JSON is not well-formed.
// This is because Firefox is not reading the correct MIME type (and it can safely be ignored).

// If you get it on a server, you may need to se the MIME type for JSON on the server (application/JSON).