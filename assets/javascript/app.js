var questions = [
  {
    question: "Who play Neo in the Matrix",
    answers: ["Keanu Reeves", "Tom Hanks", "Jim Carey"],
    answer: "Keanu Reeves"
  },
  {
    question: "Who is actually a chef?",
    answers: ['Chandler', 'Monica', 'Rachel', 'Ross'],
  },
  {
    question: "What state is Kenneth originally from?",
    answers: ["New York", "Alabama", "Georgia", "Arkansas", "Florida"],
  }
]

var counter = 0;
var currentQuestion = 0;
var setTime = 30;
var answerQ1 = questions[0].answers[0];
var answerQ2 = questions[1].answers[1];
var answerQ3 = questions[2].answers[4];
console.log('Q1', answerQ1, 'Q2', answerQ2, 'Q3', answerQ3);


function answers() {
  // console.log('answers is called')
  $("#container").empty();
  $("#container").append(("<h2>" + questions[currentQuestion].question + "</h2>"));
  // console.log(questions[currentQuestion].answers);
  for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
    var answerbutton = $("<button>");
    answerbutton.attr("data-letter", questions[currentQuestion].answers[i]);
    answerbutton.addClass("answerbutton");
    answerbutton.text(questions[currentQuestion].answers[i]);
    answerbutton.click(handleClick);
    $("#container").append(answerbutton);
    // console.log(answerbutton.text());
    // console.log(questions[currentQuestion].answers[0]);

  }

  // $(document).on('click', ".answerbutton", handleClick);
}

function handleClick() {
  var answer = false;
  // for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
  console.log('possible answers are', questions[currentQuestion].answers);
  if (($(this).text() === answerQ1) || ($(this).text() === answerQ2) || ($(this).text() === answerQ3)) {
    console.log('win win win')
    result(!answer);
    counter++;

    console.log("counter is " + counter);
  }
  else {
    console.log('loser')
    result(answer);
    console.log("worng answer");
  }

  currentQuestion++;
}
// }

function result(isCorrect) {
  console.log('result is called');

  $('#container').empty();
  var image = $("<img>");
  console.log('isCorrect', isCorrect);
  if (isCorrect) {
    image.attr('src', 'https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif')
  }
  else {
    image.attr('src', 'https://media.giphy.com/media/m8eIbBdkJK7Go/giphy.gif')
  }
  $("#container").append(image);

  console.log('currentQuestion ', currentQuestion);
  console.log('questions.length', questions.length);
  if (currentQuestion === questions.length) {
    setTimeout(function () {
      console.log('show the result page' + currentQuestion + counter);
      // show the result page
    }, 5000)
  } else {
    setTimeout(answers, 5000);
  }

}

// $(document).on('click', ".answerbutton", function () {
// console.log('clicked')
//   if ($(this).text() === questions[currentQuestion].answers[0]) {
//     console.log('win win win')
//     result(true);
//     counter++;

//     console.log(counter);
//   }
//   else {
//     console.log('loser')
//     result(false);
//     console.log("worng answer");
//   }

//   currentQuestion++;

//   answers();
// });
var intervalId;
function startTimer(setTime) {
  var timer = setTime, minutes, seconds;

  intervalId = setInterval(function () {
    timerRunning = true;
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    $(".timer").text(minutes + ":" + seconds);
    if (--timer < 0) {
      timeUp(intervalId);
      // document.getElementById("details").setAttribute("disabled","disabled");
    }
  }, 1000);
}
function timeUp(interval) {
  clearInterval(interval);
  timerRunning = false;
  result(false);
  $(".timer").text("Time up!!!" + "The answer is " + questions[currentQuestion].answers[0]);

}
$('#Strbutton').on('click', function () {
  answers();
  startTimer(setTime);
}
)
