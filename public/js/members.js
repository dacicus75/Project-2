$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
      $(".member-name").text(data.name);
      $(".member-id").val(data.id);
      $(".option-select").text(data.name);
      //$(".member-name").text(data.email);git
      

      function signUpNewUser(name, task) {
        $.post("/api/assigntask", {
          name: name,
          task: task,
      
        }).then(function(data) {
          window.location.replace(data);
          // If there's an error, handle it by throwing up a bootstrap alert
        }).catch(handleLoginErr);
      };
//create a onclick event for the new member create area

      //store the user name, task
      //then run the signupNewUser(name, email, pw)
      //for ref look at signup.js and the api-routes.js under app.post/api/signup
      //then double check to see the app.get/api/userdata from api routes and make sure they have all the values
      //check your user model and see what are the rules for the db


     
    });

    $("#submit-task").on("click", function(event){
      event.preventDefault();
      var newTask = {
        name: $(".option-select").val().trim(),
        task: $("#task-body").val().trim(),
        score: $("#points").val().trim(),
        UserId: $(".member-id").val()
      };
      console.log(newTask);

      $.post("/api/Tasks", newTask)
      .then(function(data) {
        console.log(data);
      })
    })

  //   $.get("api/user_data", function(data) {
  //     if (data.length !==0) {
  //       for (i = 0; i < data.length; i++) {
  //         $(".custome-select").text("<option>" + data[i].name + "</option>");
  //       }
  //     }
  //   })
  });

  

  
