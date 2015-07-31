appendQuestions();
progBar();
audioEvents();

$('form').on('submit', function(e) {
  e.preventDefault();
  submitAnswers();
});

//create question
function createQuestion(text){
  $('.qst').append("<h3>" +text+ "</h3>");
}

//create answer
function createAnswers(id, answer, name){
  $('.qst').append('<input type="radio" name='+name+ ' value='+answer+ ' name="" id='+id+' /> <span>' +answer+'</span><br>');
}

//display all questions/answers in objects.js
function appendQuestions() {
  var k = 0;
  for (var l = 0; l < questions.length; l++) {
    createQuestion(questions[l].q);
    for (var i = 0; i < questions[i].answers.length; i++ ) {
      createAnswers(i+"a"+l,questions[i].answers[k], l);
      k++;
    }
    k=0;
  }
}

// progress bar dynamics
function progBar(){
  $('input').on('change', function(){
    var increment = 100 /questions.length;
    var bar = $('input:checked').length;
    $('.progress-bar').css("width", bar*increment+"%");
  });
}

function audioEvents() {
  //audio off button event
  $('.glyphicon-volume-off').on('click', function(){
    $('.audio').prop("volume", 0);});

    //audio on button event
    $('.glyphicon-volume-up').on('click', function(){
      $('.audio').prop("volume", 1);
    }
  );
}

//tracks score
function submitAnswers() {

  //cache
  var total = questions.length;
  var score = 0;
  var checked = $('input:checked');
  var akey = [questions[0].correct, questions[1].correct, questions[2].correct, questions[3].correct, questions[4].correct, questions[5].correct, questions[6].correct, questions[7].correct, questions[8].correct, questions[9].correct];

  //check answers and calculate score
  for (var i=0; i<total; i++) {
    if (akey[i]===checked[i].value) {
      score++;
    }
  }

  //output
  $('#results').html('<h3>You scored ' +score+ ' out of ' +total+ '</h3>');
  alert("You scored " +score+ " out of " +total);
}

//validation
// for (j=1; j<=total; j++ ) {
//   if (checked[j-1]) {
//     alert("You missed question " + j);
//     return 1;
// }}
