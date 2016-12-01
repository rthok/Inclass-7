// NOTE: If you run this file locally
// You will not get a server status and the example will fail
// Comment out lines 9 and 35 if you are working locally

var xhr = new XMLHttpRequest();        // creates XMLHttpRequest object

xhr.onload = function() {              // when request is loaded
 // The following conditional check will not work locally - only on a server
 // if (xhr.status === 200) {             // if server is ok

  // THIS PART IS DIFFERENT BECAUSE IT IS PROCESSING XML NOT HTML
  var response = xhr.responseXML;                      // create an response object
  var events = response.getElementsByTagName('event'); // create an events object

  for (var i = 0; i < events.length; i++) {            // for every events
    var container, image, location, city, newline;      // create continer, image, location, city and newline object
    container = document.createElement('div');          // create 'div' tag in container
    container.className = 'event';                      // naming class as 'event'

    image = document.createElement('img');              // create a element 'img' in image
    image.setAttribute('src', getNodeValue(events[i], 'map'));
    image.setAttribute('alt', getNodeValue(events[i], 'location'));
    container.appendChild(image);

    location = document.createElement('p');             // create element 'p'
    city = document.createElement('b');
    newline = document.createElement('br');
    city.appendChild(document.createTextNode(getNodeValue(events[i], 'location')));
    location.appendChild(newline);
    location.insertBefore(city, newline);
    location.appendChild(document.createTextNode(getNodeValue(events[i], 'date')));
    container.appendChild(location);

    document.getElementById('content').appendChild(container);
  }
// }

  function getNodeValue(obj, tag) {                   // function returns node value of first child, takes in two para: obj, tag
    return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
  }

 // THE FINAL PART IS THE SAME AS THE HTML EXAMPLE BUT IT REQUESTS AN XML FILE
};

xhr.open('GET', 'data/data.xml', true);             // prepares the request
xhr.send(null);                                     // sends the request