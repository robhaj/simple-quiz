$(document).ready(function(){

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

    $('.simple').append("<h1>A Simple Javascript Quiz</h1>");
    $('.simple').append("<p>See how well you know these <strong>JS fundamentals</strong></p>");

    var k = 0;
    for (var l = 0; l < questions.length; l++) {
      createQuestion(questions[l].q);

      for (var i = 0; i < questions[l].answers.length; i++ ) {
        createAnswers(questions[l].answers[k], questions[l].answers[k], l);
        k++;
      }
      k=0;
    }
    $(document).prop('title', 'A Simple Javscript Quiz');
    $('#gitHub').append('<a href="https://github.com/robhaj">github</a>');
    $('#gitHub').append('<p>Simple JS Quiz/Form BoilerPlate for JS/Jquery. &copy;2015</p>');
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

    // validation
    if (checked.length < total){
      alert("You missed a question");
      return 1;
    }

    //check answers and calculate score
    for (var i=0; i<total; i++) {
      if (questions[i].correct===checked[i].value)
      score++;
    }

    //output
    $('#results').html('<h3>You scored ' +score+ ' out of ' +total+ '</h3>');
    alert("You scored " +score+ " out of " +total);
  }

});
