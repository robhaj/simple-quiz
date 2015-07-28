function submitAnswers() {
  var total = 6;
  var score = 0;
  //input
  var formResult = document.forms["quizForm"];
  var q1 = formResult.["q1"].value;
  var q3 = document.forms["quizForm"]["q3"].value;
  var q4 = document.forms["quizForm"]["q4"].value;
  var q5 = document.forms["quizForm"]["q5"].value;
  var q6 = document.forms["quizForm"]["q6"].value;
  //validation
  for (i=1; i<=total; i++ ) {
    if (eval('q'+i) === null || (eval('q'+i) == "")) {
      alert("You missed question " + i);
      return false;
    }
  }

  //set answer key
  var answers = ["a","c","c","d","d","d"];

  //check answers(process)
  for (i=1; i<=total; i++) {

    if (eval('q'+i)===answers[i - 1]) {
      score++
  }
}


// output
var results = document.getElementById("results");
results.innerHTML = '<h3>You scored ' +score+ ' out of ' +total+ '</h3>'
alert("You scored " +score+ " out of " +total)
return false;
}
