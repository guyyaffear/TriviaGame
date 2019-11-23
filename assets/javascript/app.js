var questions = [
  {
    qustion: "Who play Neo in the Matrix",
    answers: ["Keanu Reeves", "Tom Hanks", "Jim Carey"],
  },
  {
    qustion: "Who play 31 in the Matrix",
    answers: ["111", "abc", "cbs"],
  },
  {
    qustion: "Who play 22 in the Matrix",
    answers: ["222", "3333", "h1h2h3"],
  }
]

var counter=0;
var currentQuestion = 0;

function answers() {
  $("#container").empty();
  $("#container").append(("<h2>" + questions[currentQuestion].qustion + "</h2>"));
  console.log(questions[currentQuestion].answers);
  for (var i = 0; i <questions[currentQuestion].answers.length; i++)
   {
    var answerbutton = $("<button>");
    answerbutton.attr("data-letter", questions[currentQuestion].answers[i]);
    answerbutton.addClass("answerbutton");
    answerbutton.text(questions[currentQuestion].answers[i]);
    $("#container").append(answerbutton);
    console.log(answerbutton.text());
    console.log(questions[currentQuestion].answers[0]);
  }

  
}
  // for (var i = 0; i < Q2.Triva.answers.length; i++) {
  //   var answerbutton = $("<button>");
  //   answerbutton.attr("data-letter", Q1.Triva.answers[i]);
  //   answerbutton.addClass("answerbutton");
  //   answerbutton.text(Q1.Triva.answers[i]);
  //   $(".qustion2").append(answerbutton);
  //   console.log(answerbutton.text());
  //   console.log(Q1.Triva.answers[1]);
  // }
  // for (var i = 0; i < Q3.Triva.answers.length; i++) {
  //   var answerbutton = $("<button>");
  //   answerbutton.attr("data-letter", Q1.Triva.answers[i]);
  //   answerbutton.addClass("answerbutton");
  //   answerbutton.text(Q1.Triva.answers[i]);
  //   $(".qustion3").append(answerbutton);
  //   console.log(answerbutton.text());
  //   console.log(Q3.Triva.answers[2]);
  // }
  $(document).on('click', ".answerbutton", function () {

    if ($(this).text() === questions[currentQuestion].answers[0]) {
      counter++;
      
      console.log(counter);
    }
    else {
      
      console.log("worng answer");
    }

    currentQuestion++;

    answers();
  });
  // var timeRemaining = 30;
  // function playRound() {
  //   // Populate #question-window with relevant data.
  //   answers(currentQuestion);

  //   // Run timers
  //   timeRemaining = 30;
  //   var timerDisplay = setInterval(function() {
  //       timeRemaining--;
  //       $("#timer").text(timeRemaining);
  //       if (timeRemaining === 0) {
  //           clearInterval(timerDisplay);
  //           timeRemaining = 30;
  //       }
  //   }, 1000);
  
$('#Strbutton').on('click', function () {
  answers();
}
)
