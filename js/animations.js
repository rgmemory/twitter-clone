$(document).ready(function(){

  var keystrokes = 140;
  var characters = 0;

  console.log("hellooo");
  $(".tweet-compose").on('click', function(){

    $("#tweet-controls").show();


    var inputBox = $(this);

    var height = $(this).height() * 2;
    inputBox.height(height);


  });

  $('.tweet-compose').keyup(function(){

    var maxLength = 15;

    var length = $(this).val().length;
    var length = maxLength-length;
    $('#char-count').text(length);

    // keystrokes--;
    // characters++;
    // $('#char-count').text(keystrokes);


    // if(userInput.length <= 10){
    //   $('#char-count').css("color", "red");
    // }
    //
    // if(userInput.length > 5){
    //   alert("you're over");
    //   $(".button").prop('disabled', true);
    // }
    //
    // if(userInput.length <= 140){
    //   alert("you're under");
    // }


  });








});
