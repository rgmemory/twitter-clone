$(document).ready(function(){

  var keystrokes = 140;
  var characters = 0;
  var userInput;

  $(".tweet-compose").on('click', function(){
    $("#tweet-controls").show();
    var inputBox = $(this);
    var height = $(this).height() * 2;
    inputBox.height(height);
  });

  $('.tweet-compose').keyup(function(){
    var maxLength = 11;
    userInput = $(this).val();
    var length = $(this).val().length;
    var length = maxLength-length;
    $('#char-count').text(length);
    if(length <= 0){
      $('.tweet-compose').prop('disabled', true);//attr
    }
    if(length <= 10){
      $('#char-count').css("color", "red");
    }
  });



$(".button").on('click', function(){

  var clonedTweet = $(".tweet:first").clone(true);
  var stream = $('#stream');

  stream.prepend(clonedTweet);





  // $("#stream").prepend(userInput);
});




});
