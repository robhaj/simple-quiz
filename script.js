$(document).ready(function() {

//set total # of questions
  var total = 6;

//dynamic progress bar
$('input').on('change', function(){
  var increment = 100/total;
  var bar = $('input:checked').length;
  $('.progress-bar').css("width", bar*increment+"%");
});

  //audio off
  $('.glyphicon-volume-off').on('click', function(){
    $('.audio').prop("volume", 0);});

  //audio on
  $('.glyphicon-volume-up').on('click', function(){
    $('.audio').prop("volume", 1);});

  //end document ready function
});

  //submit function
function submitAnswers() {
  var answers = ["a","c","c","d","d","d"];
  var total = answers.length;
  var score = 0;

  //grab input
  var formResult = document.forms["quizForm"];
  var q1 = formResult["q1"].value;
  var q2 = formResult["q2"].value;
  var q3 = formResult["q3"].value;
  var q4 = formResult["q4"].value;
  var q5 = formResult["q5"].value;
  var q6 = formResult["q6"].value;

  //validation
  for (i=1; i<=total; i++ ) {
    if (eval('q'+i) === null || (eval('q'+i) === "")) {
      alert("You missed question " + i);
      return false;}
  }

  //check answers and increment total
  for (i=1; i<=total; i++) {
    if (eval('q'+i)===answers[i - 1]) {
      score++;}
    }

  //output
  $('section #results').html('<h3>You scored ' +score+ ' out of ' +total+ '</h3>');
  alert("You scored " +score+ " out of " +total);
return false;
}
