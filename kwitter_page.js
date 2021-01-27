//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDTblzVs2lKgtqXZNizyrPwbP1AVE08PHg",
      authDomain: "testing-kwitter-web-app.firebaseapp.com",
      projectId: "testing-kwitter-web-app",
      storageBucket: "testing-kwitter-web-app.appspot.com",
      messagingSenderId: "1029988723550",
      appId: "1:1029988723550:web:5010936e55a46c9c3bbdcf"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    var msg;
    userName=localStorage.getItem("userName");
    roomName=localStorage.getItem("roomName");

    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref("roomName").push({
       name:userName,
       message:msg,
       like:0
      });
      document.getElementById("msg").value="";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logOut(){
      localStorage.removeItem("userName");
      localStorage.removeItem("roomName");
}

