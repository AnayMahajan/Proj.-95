function addUser(){
    user_name= document.getElementById("login_input").value;
    localStorage.setItem("login_input", user_name);
    window.location= "kwitter_room.html";
}