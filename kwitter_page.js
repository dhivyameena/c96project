var firebaseConfig = {
    apiKey: "AIzaSyAd3pwwM6jd3vTEZUgUMivfAJIhEtnbc5U",
    authDomain: "kwitter-app-43e24.firebaseapp.com",
    databaseURL: "https://kwitter-app-43e24-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-43e24",
    storageBucket: "kwitter-app-43e24.appspot.com",
    messagingSenderId: "910301731706",
    appId: "1:910301731706:web:fa925fbadec7e0331cd4c3"
  };
  
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function send() {
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
});
document.getElementById("msg").value="";
}