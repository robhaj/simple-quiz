  //progress bar dynamics
  function progBar(){
    $('input').on('change', function(){
      var increment = 50;
      var bar = $('input:checked').length;
      $('.progress-bar').css("width", bar*increment+"%");
    });
  }

  //audio off button event
  $('.glyphicon-volume-off').on('click', function(){
    $('.audio').prop("volume", 0);});

    //audio on button event
    $('.glyphicon-volume-up').on('click', function(){
      $('.audio').prop("volume", 1);
    });

    //create question
    function createQuestion(text){
      $('.qst1').append("<h3>" +text+ "</h3>");
    }

    //create answer
    function createAnswers(num, letter, id, answer){
      $('.qst1').append('<input type="radio" name='+num+' value='+letter+' id='+id+' />'+answer+'<br>');
    }

  function submitAnswers() {

    //cache
    var score = 0;
    var formResult = document.forms["quizForm"];
    var q1 = formResult["q1"].value;
    var q2 = formResult["q2"].value;
    var q3 = formResult["q3"].value;
    var q4 = formResult["q4"].value;
    var q5 = formResult["q5"].value;
    var q6 = formResult["q6"].value;

    //check answers and calculate score
    for (i=1; i<=total; i++) {
      if (eval('q'+i)===answers[i - 1]) {
        score++;}
      }

      //validation
      for (i=1; i<=total; i++ ) {
        if (eval('q'+i) === null || (eval('q'+i) === "")) {
          alert("You missed question " + i);
          return 1;}
        }

        //output
        $('section #results').html('<h3>You scored ' +score+ ' out of ' +total+ '</h3>');
        alert("You scored " +score+ " out of " +total);
        return 1;
}
