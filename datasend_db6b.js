 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAJ-kHys7rIXfoLH1AmmnTIS41k0v9hYcM",
    authDomain: "fir-training-38447.firebaseapp.com",
    databaseURL: "https://fir-training-38447.firebaseio.com",
    projectId: "fir-training-38447",
    storageBucket: "fir-training-38447.appspot.com",
    messagingSenderId: "300374935309"
  };
  firebase.initializeApp(config);
// Reference messages collection
var messagesRef = firebase.database().ref('company_data1');
// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);
// Submit form
function submitForm(e){//e is for event listener
  // Get values
  var name = document.getElementById('names').value;
  var about = document.getElementById('abouts').value;
  var email = document.getElementById('emails').value;
  var field = document.getElementById('fields').value;
  var duration = document.getElementById('durations').value;
  var Time = document.getElementById('Times').value;
  var salary = document.getElementById('salarys').value;
  var task = document.getElementById('tasks').value;
  
  savedata(name, about, email, field, duration, Time, salary, task );//at the place of savedata we can use any variable.
}
// Save message to firebase
function savedata(n,a,e,f,d,T,s,t){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({

    Company_Name:n,

    About_Company:a,

    email:e,

    Field:f,

    Duration:d,

    Starting_Date:T,

    salary:s,

    task:t
    
   
  });
}

