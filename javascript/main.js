                
function playPause() { 
    var myVideo = document.getElementById("video1"); 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function makeBig() { 
    var myVideo = document.getElementById("video1");
    myVideo.width = 560; 
} 

function makeSmall() { 
    var myVideo = document.getElementById("video1");
    myVideo.width = 320; 
} 

function makeNormal() { 
    var myVideo = document.getElementById("video1");
    myVideo.width = 420; 
} 



function getLocation() {
  var x = document.getElementById("demo");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  var x = document.getElementById("demo");
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}
