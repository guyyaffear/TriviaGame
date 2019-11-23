
var Q1 = {
  Triva: {
    qustion1: "Who play Neo in the Matrix",
    answers: ["Keanu Reeves", "Tom Hanks", "Jim Carey"],
  },
}
function answers() {
  $("#Strbutton").replaceWith("<h2>" + Q1.Triva.qustion1 + "</h2>");
  var counter = 0;
  for (var i = 0; i < Q1.Triva.answers.length; i++) {
    var answerbutton = $("<button>");
    answerbutton.attr("data-letter", Q1.Triva.answers[i]);
    answerbutton.addClass("answerbutton");
    answerbutton.text(Q1.Triva.answers[i]);
    $(".new").append(answerbutton);
    console.log(answerbutton.text());
    console.log(Q1.Triva.answers[0]);
  }
  $(document).on('click', ".answerbutton", function () {
   
    if ($(this).text() === Q1.Triva.answers[0]) {
      counter++;
      console.log(counter);
    }
    else {
      console.log("worng answer");
    }
  })




  //  .then(function (){
  //     $("#new").append("<button id=Q1>"+Q1.Triva.answers.items[i]+"</button>") 
  //  } 

  // );
}



$('#Strbutton').on('click', function () {
  answers();
}
)

// function renderButtons() {

//     // $('#Strbutton').empty();

//     for (var i = 0; i < Q1.Triva.qustion1.items.length; i++) {
//       var movieButton = $('<button>').addClass("btn btn-primary btn-lg btn-block").attr({ answers: items[i] }).html(items[i]);
//       $('#Strbutton').append(movieButton);
//     }

//     // Delete the content inside the buttons-view div prior to adding new movies
//     // (this is necessary otherwise you will have repeat buttons)

//     // Loop through the array of movies, then generate buttons for each movie in the array

//   }


