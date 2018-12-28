var rootRef = firebase.database().ref().child("company_data1");
rootRef.on("child_added", snap =>{


 var name = snap.child("Company_Name").val();
 var about = snap.child("About_Company").val();
 var email = snap.child("email").val();
 var field = snap.child("Field").val();
 var duration = snap.child("Duration").val();
 var time = snap.child("Starting_Date").val();
 var sal = snap.child("salary").val();
 var task = snap.child("task").val();
 

$("#table_body").append("<tr><td>" + name + "</td><td>" + about + "</td><td>" + email + "</td><td>" + field + "</td><td>" + duration + 
    "</td><td>" + time + "</td><td>" + sal + "</td><td>" + task + 
    "</td><td><button>Accept</button></td></tr>" )

    });
