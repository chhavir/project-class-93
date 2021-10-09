
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
    const app = initializeApp(firebaseConfig);

    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
