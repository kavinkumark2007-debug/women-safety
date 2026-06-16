// Firebase reference (optional - if you configured firebase.js)
let database = null;

if (typeof firebase !== "undefined") {
  database = firebase.database();
}

// 🚨 SEND SOS
function sendSOS() {
  let name = document.getElementById("name").value;

  if (name === "") {
    alert("Please enter your name!");
    return;
  }

  alert("🚨 SOS SENT!");

  // Optional: Save to Firebase
  if (database) {
    database.ref("sosAlerts").push({
      name: name,
      time: new Date().toString(),
      message: "Emergency SOS Triggered"
    });
  }

  console.log("SOS triggered by:", name);
}


// 📞 CALL EMERGENCY
function callEmergency() {
  // India emergency number example
  window.location.href = "tel:112";
}


// 🔔 PLAY ALARM
function playAlarm() {
  let audio = new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg");
  audio.play();

  alert("🔔 Alarm Playing!");
}


// 📍 OPTIONAL: Get location (future upgrade use)
function getLocation(callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        callback({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      function (error) {
        alert("Location access denied!");
      }
    );
  } else {
    alert("Geolocation not supported");
  }
}
