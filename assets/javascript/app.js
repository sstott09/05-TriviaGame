var questions = [
    {
        question: "color of sky ?",
        answers: ["blue","green","red","black"],
        correctAns: "blue",
        correctImg: "",
        wrongImg: ""
    },
    {
        question: "color of sky ?",
        answers: ["blue","green","red","black"],
        correctAns: "blue"
    },
    {
        question: "color of sky ?",
        answers: ["blue","green","red","black"],
        correctAns: "blue"
    },

]
alert("hi")
console.log("connected");

//global variables

var countNumber = 30;
var currectQuestionIndex = 0;
var counter = countNumber;
var correct = 0;
var incorrect = 0;
var timer;


//on click for start button
$(document).on("click", "#start", function(){
    $(".sub-container").prepend("<h2>Time Remaining: <span id='counter'>30</span> Seconds</h2>");
    displayQuestion();
})
$(document).on("click", ".answer-button", function(e){
    click(e)
})
function click(e){
    clearInterval(timer);
    if($(e.target).attr("data-name") === questions[currectQuestionIndex].correctAns){
        answerCorrect();
    }
    else{
        answerIncorrect();
    }
}
function answerCorrect(){
    //increment correct variable

    //clear timer 43
    //select quiz area andappend saying you are correct;
    //append img img to the quiz area
    //if the use is answering the last question call display results function
    //if not then go the next question nextQuestion()
}
function nextQuestion(){
    counter= countNumber;
    //update it on the page 
    $("#counter").text(counter);

    currectQuestionIndex++;
    displayQuestion();
}
function countdown(){
    counter--;
    $("#counter").text(counter);
    if(counter == 0){
        console.log("time up");
        timeup();
    }
}
function displayQuestion(){
    timer = setInterval(countdown, 1000);
    $(".quiz-area").html("<h2>" +questions[currectQuestionIndex].question + "</h2>");
    console.log("current question: " +questions[currectQuestionIndex].answers.length)
 //   for(var i=0; i<questions[currentQuestionIndex].answers.length; i++){
    //     $(".quiz-area").append("<button class='answer-button' id='button' data-name='" +questions[currectQuestionIndex].answers[i] +"'>" +questions[currectQuestionIndex].answers[i] +"</button>")
    // }

    for (var i = 0; i < questions[currectQuestionIndex].answers.length; i++) {
        $(".quiz-area").append("<button class='answer-button' id='button' data-name='" + questions[currectQuestionIndex].answers[i]
        + "'>" + questions[currectQuestionIndex].answers[i] + "</button>");
      }
}
function timeup(){
    console.log("time up");
}