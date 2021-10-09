
const firebaseConfig = {
    apiKey: "AIzaSyDPK0uBrVlDchZxDD0tMdPNZL3DKUz2y0o",
    authDomain: "kwitter-5397d.firebaseapp.com",
    databaseURL: "https://kwitter-5397d-default-rtdb.firebaseio.com",
    projectId: "kwitter-5397d",
    storageBucket: "kwitter-5397d.appspot.com",
    messagingSenderId: "4508235919",
    appId: "1:4508235919:web:9e28e73cb2de6173a498fa"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({purpose : "adding user"});
    firebase.database().ref(user_name).child("jina").update({purpose : "adding another child"});
}