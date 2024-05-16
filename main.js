import { db } from "./firebase";

const form = document.getElementById("signUpForm");
const locationBtn = document.getElementById("locationBtn");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  
  // Set the latitude and longitude values to hidden input fields
  document.getElementById('latitude').value = latitude;
  document.getElementById('longitude').value = longitude;
  
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
  }
}

locationBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getLocation();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
console.log(e.target["name"].value);
console.log(e.target["mail"].value);
console.log(e.target["latitude"].value);
console.log(e.target["longitude"].value);
})