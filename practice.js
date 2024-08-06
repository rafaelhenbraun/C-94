
//ADICIONE SEUS LINKS FIREBASE 
const firebaseConfig = {
    apiKey: "AIzaSyCJCQxZciN2MdTlINVeOHtkkNQ7d2KUZiw",
    authDomain: "c-94-ccc8b.firebaseapp.com",
    databaseURL: "https://c-94-ccc8b-default-rtdb.firebaseio.com",
    projectId: "c-94-ccc8b",
    storageBucket: "c-94-ccc8b.appspot.com",
    messagingSenderId: "482081176130",
    appId: "1:482081176130:web:1403dd355b8577e818cbdb"
  };
   
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    userName = document.getElementById("userName").value;
    firebase.database().ref("/").child(userName).update({
        purpose : "adicionar usuário"
    });
}