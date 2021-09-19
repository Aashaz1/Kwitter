var firebaseConfig = {
    apiKey: "AIzaSyBYUwJsYf4qR-vRVZFN315X-HuHJbpSaUs",
    authDomain: "kwitter-test-315bb.firebaseapp.com",
    databaseURL: "https://kwitter-test-315bb-default-rtdb.firebaseio.com",
    projectId: "kwitter-test-315bb",
    storageBucket: "kwitter-test-315bb.appspot.com",
    messagingSenderId: "337671780013",
    appId: "1:337671780013:web:58145cc84275584280b824"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("userName");
  room_name = localStorage.getItem("roomName");

  function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
   }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data('name');
message = message_data ['message'];
like = message_data['like'];
nameWithTag = "<h4>"+ name +"<img class='user_tick' src='tick.png'></h4>";
messageWithTag = "<h4 class='message_h4'>"+ message +"</h4>";
likeButton = "<button class='btn btn-warning' id="+ firebase_message_id +"value="+ like +" onclick='updateLike(this.id)'>";
spanWithTag = "<span= 'gliphicon gliphicon-thumbs-up'> Like: "+ like + "</span></button><hr>";

row = nameWithTag + messageWithTag + likeButton + spanWithTag;
document.getElementById("output").innerHTML += row;
//End code
 } });  }); }
getData();

function logout(){
 localStorage.removeItem(user_name);
 localStorage.removeItem(room_name);
 window.location.replace("index.html");
}

function updateLike(message_id){
    console.log("clicked on like button - " + message_id);
    likes = document.getElementById(button_id).value;
    updatedLikes = Number(likes) + 1;
    console.log(updatedLikes);

    firebase.database().ref(room_name).child(message_id).update({
        like: updatedLikes
    });
}