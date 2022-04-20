const firebaseConfig = {
    apiKey: "AIzaSyCfcrDNZr-n-DTujZyiGpZ_2o7bEq0JG_k",
    authDomain: "kwitter-project-38b5b.firebaseapp.com",
    databaseURL: "https://kwitter-project-38b5b-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-38b5b",
    storageBucket: "kwitter-project-38b5b.appspot.com",
    messagingSenderId: "5991500378",
    appId: "1:5991500378:web:b3cb886e4f0d05ec022663",
    measurementId: "G-YCNHPNHRLR"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addRoom(){
    room_name= document.getElementById("room_name").value;
    localStorage.setItem("room_name", room_name);
    firebase.database().ref("/").child(room_name).update({
      purpose: "Adding Room name"
    });
    window.location= "kwitter_page.html";
  }
  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
row = "<div>#"+ Room_names +"</div><hr>";
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row; 
//End code
});});}
getData();

function redirectToRoomName(name){
  localStorage.setItem("room_name", name);
  window.location= "kwitter_page.html";
}
function logout(){
  window.location= "index.html";
}
  
  