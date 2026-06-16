function sendSOS(){

let name = document.getElementById("name").value;

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(function(position){

let latitude = position.coords.latitude;
let longitude = position.coords.longitude;

firebase.database().ref("SOS Alerts").push({

name:name,
latitude:latitude,
longitude:longitude,
time:new Date().toLocaleString()

});

alert("SOS Alert Sent!");

});

}

}

