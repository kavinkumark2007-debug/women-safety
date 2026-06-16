function sendSOS(){

let name = document.getElementById("name").value;

if(!name){
  alert("Enter name");
  return;
}

navigator.geolocation.getCurrentPosition(function(position){

let latitude = position.coords.latitude;
let longitude = position.coords.longitude;

firebase.database().ref("SOS Alerts").push({
name: name,
latitude: latitude,
longitude: longitude,
time: new Date().toLocaleString()
});

alert("SOS Sent Successfully!");

});

}
