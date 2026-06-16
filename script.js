function sendSOS(){
  let name = document.getElementById("name").value;

  navigator.geolocation.getCurrentPosition(function(pos){

    firebase.database().ref("SOS Alerts").push({
      name: name,
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude,
      time: new Date().toLocaleString()
    });

    alert("SOS SENT!");

  });
}

function callEmergency(){
  window.location.href = "tel:100";
}

function playAlarm(){
  let audio = new Audio("alarm.mp3");
  audio.loop = true;
  audio.play();
}
