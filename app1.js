// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3lNTduAHlJE5rZGYLUnT8njf9L1hfr5E",
  authDomain: "todo-app-54932.firebaseapp.com",
  databaseURL: "https://todo-app-54932-default-rtdb.firebaseio.com", 
  projectId: "todo-app-54932",
  storageBucket: "todo-app-54932.appspot.com",
  messagingSenderId: "718850512212",
  appId: "1:718850512212:web:e46a66365bc8b4e66224c1"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

function signup(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var name = document.getElementById("name").value;

  // Firebase Authentication for User Signup
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
      // Only save data if signup is successful
      var user = {
          name: name,
          email: email,
          password: password
      };
      // Save user data to Firebase Realtime Database
      firebase.database().ref("users").push(user)
      .then(() => {
          console.log("User data saved to database.");
          window.location.href = "todo.html";  // Redirect on successful signup and data save
      })
      .catch((error) => {
          console.log("Error saving data to database: ", error.message);
      });
  })
  .catch((error) => {
      // Handle signup error here
      var errorMessage = error.message;
      alert("Signup Error: " + errorMessage);
  });
}





function login(){
    var loginemail =document.getElementById("login-email")
    var loginpassword =document.getElementById("login-password")

    firebase.auth().signInWithEmailAndPassword(loginemail.value, loginpassword.value)
    .then((userCredential) => {
      // Signed in
    //   var user = userCredential.user;
      console.log("Login Sccessflly");
    console.log(userCredential);
    window.location.href="todo.html"
      
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      
    });

    
}
 