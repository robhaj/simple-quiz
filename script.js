function submitAnswers() {
  //set answer key
  var answers = ["a","c","c","d","d","d"];

  var total = answers.length;
  var score = 0;
  //input
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
      return false;
    }
  }

  //check answers(process)
  for (i=1; i<=total; i++) {

    if (eval('q'+i)===answers[i - 1]) {
      score++;
    }
  }

  // output
  var results = document.getElementById("results");
  results.innerHTML = '<h3>You scored ' +score+ ' out of ' +total+ '</h3>';
  alert("You scored " +score+ " out of " +total);
  return false;
}

$(document).ready(function() {
  $('.glyphicon-volume-off').on('click', function(){
    $('.audio').prop("volume", 0);
  });
  $('.glyphicon-volume-up').on('click', function(){
    $('.audio').prop("volume", 1);
  });
});
//   function progressBar() {
//     for (var i=0; i>=100; i+=20) {
//
//     $('.progress-bar').css("width", (i+"%")).attr('aria-valuenow', i);
// }
//   }
//   progressBar();
//   // if ($('#q1a').attr('checked') === true)
// });
