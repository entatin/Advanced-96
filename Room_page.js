var firebaseConfig = {
  apiKey: "AIzaSyDUi5VD0BBMfgIZoQZeNlf_uZvBjO5-6r0",
  authDomain: "project94-b5088.firebaseapp.com",
  databaseURL: "https://project94-b5088-default-rtdb.firebaseio.com",
  projectId: "project94-b5088",
  storageBucket: "project94-b5088.appspot.com",
  messagingSenderId: "761442466062",
  appId: "1:761442466062:web:31580b03e6a01d3458bf5f",
  measurementId: "G-SH1YEWDJEM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.getAnalytics(app);

var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");

function send() {
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});

document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }
getData();

function logout(){
    localStorage.removeItem("User_1");
    localStorage.removeItem("Room_Name");
    window.location.replace("Login.html");
    }