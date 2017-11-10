 // Timer has bugs
 $(document).on('click', "#button", function() {
  var time = 5;

  function redirect() {
   var id = setTimeout(redirect, 1000); // function will fired for every one second
   $("#timer").html(time);
   if (time == 0) {
    // if time is zero redirect
    clearTimeout(id);
    $("#timer2").html("Game Over")
   }

   time--; // the the time decrease, from 30 to 0
  }

  // remember to call function redirect
  redirect();
 });

 $("#button2").on("click", function() {

  alert("you need to calm down");
 });
 //example of what can be done to access the id's on the other

 // <div class="choice" data-value = 0>Charlotte</div>
 // <div class="choice">Raleigh</div>
 // <div class="choice">Greensboro</div>


 // $(".choice").click(function(){


 //  var val = $(this).attr('data-value'); //0

 // })
 