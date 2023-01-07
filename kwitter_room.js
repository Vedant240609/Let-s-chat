
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAPwLXw6YERtQIpgs0H6C1Z7zoSdM1DTAA",
      authDomain: "let-s-chat-bf156.firebaseapp.com",
      projectId: "let-s-chat-bf156",
      storageBucket: "let-s-chat-bf156.appspot.com",
      messagingSenderId: "576902023243",
      appId: "1:576902023243:web:cc375e4711fb1af1d5e5ce"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
