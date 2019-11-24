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
  },
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

var counter = 0;
var currentQuestion = 0;
var setTime = 30;



function answers() {
  console.log('answers is called')
  $("#container").empty();
  $("#container").append(("<h2>" + questions[currentQuestion].qustion + "</h2>"));
  // console.log(questions[currentQuestion].answers);
  for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
    var answerbutton = $("<button>");
    answerbutton.attr("data-letter", questions[currentQuestion].answers[i]);
    answerbutton.addClass("answerbutton");
    answerbutton.text(questions[currentQuestion].answers[i]);
    $("#container").append(answerbutton);
    // console.log(answerbutton.text());
    // console.log(questions[currentQuestion].answers[0]);
  }

  $(document).on('click', ".answerbutton", handleClick);
}

function handleClick(){
  console.log('possible answers are', questions[currentQuestion].answers);
  if ($(this).text() === questions[currentQuestion].answers[0]) {
    console.log('win win win')
    result(true);
    counter++;

    console.log(counter);
  }
  else {
    console.log('loser')
    result(false);
    console.log("worng answer");
  }

  currentQuestion++;
}

function result(isCorrect) {
  console.log('result is called');
  
  $('#container').empty();
  var image = $("<img>");
  console.log('isCorrect',isCorrect);
  if (isCorrect) {
    image.attr('src','https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif')
  }
  else
  {
    image.attr('src','https://media.giphy.com/media/m8eIbBdkJK7Go/giphy.gif')
  }
  $("#container").append(image);

  setTimeout(answers, 5000);
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
  $(".timer").text("Time up!!!"+"The answer is "+ questions[currentQuestion].answers[0]);

}
$('#Strbutton').on('click', function () {
  answers();
  startTimer(setTime);
}
)
