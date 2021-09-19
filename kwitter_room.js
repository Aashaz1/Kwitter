
var firebaseConfig = {
      apiKey: "AIzaSyClUegfHbfdmCv-MHPjtwfv9QnGZ3o-eWc",
      authDomain: "kwitter-87b07.firebaseapp.com",
      databaseURL: "https://kwitter-87b07-default-rtdb.firebaseio.com",
      projectId: "kwitter-87b07",
      storageBucket: "kwitter-87b07.appspot.com",
      messagingSenderId: "1056679937135",
      appId: "1:1056679937135:web:23867cf19f904bcd0af99a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -"+ Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick= 'redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom(){
      roomName=document.getElementById("roomName").value;
      firebase.database().ref("/").child("roomName").update({
            purpose: "adding room name"
      }) 
      localStorage.setItem("room_name", roomName)
      window.location= "kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("roomName", name);
      window.location = "kwitter_page.html"
}