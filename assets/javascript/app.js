var questions = [
    {
        question: "A French culinary artist, known as “The King of Chefs and the Chef of Kings?",
        answers: ["Marie-Antoine Carême","Paul Bocuse", "Joël Robuchon","Auguste Escoffier","Jacques Pépin"],
        correctAns: "Auguste Escoffier",
        correctImg: "",
        wrongImg: ""
        // https://www.escoffieronline.com/wp-content/uploads/2014/12/escoffier-chef.jpg
    },
    {
        question: "How many French Mother Sauces are there ?",
        answers: ["7", "3", "6", "9", "5"],
        correctAns: "5",
        correctImg: "",
        wrongImg: ""
        // https://guide.michelin.com/hk/en/article/dining-in/the-5-mother-sauces-of-french-cuisine
    },
    {
        question: "What country produces more than half of the world's olive oil ?",
        answers: ["Spain","Greece","France","Italy", "Morroco"],
        correctAns: "Spain",
        correctImg: "",
        wrongImg: ""
        // https://www.worldatlas.com/articles/leading-olive-producing-countries.html
        // https://www.southeusummit.com/wp-content/uploads/2018/09/Spanish-Olive-Oil.jpg
    },
    {
        question: "Which of these ingredients is an emulsifier ?",
        answers: ["Soy Sauce", "Honey", "Mustard", "Vinegar", "Oil"],
        correctAns: "Mustard",
        correctImg: "",
        wrongImg: ""
        // https://images2.minutemediacdn.com/image/upload/c_crop,h_1124,w_1999,x_0,y_95/f_auto,q_auto,w_1100/v1564804263/shape/mentalfloss/62747-gettyimages-961662908_0.jpg
    },
    {
        question: "Which of these ingredients isn't in a Mirepoix ?",
        answers: ["Onion", "Garlic", "Celery", "Carrot", ],
        correctAns: "Garlic",
        correctImg: "",
        wrongImg: ""
        // https://www.epicurus.com/food/recipes/mirepoix/1011/
    },
    {
        question: "What Temperature should you cook Chicken to ?",
        answers: ["125&#176 F", "155&#176 F", "165&#176 F","185&#176 F","195&#176 F" ],
        correctAns: "165&#176 F",
        correctImg: "",
        wrongImg: ""
        // https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/5/20/0/FN_Infographic-Meat-and-Poultry-Temperature-Guide-Promo.jpg.rend.hgtvcom.616.462.suffix/1432137784318.jpeg
        // https://www.foodnetwork.com/grilling/grilling-central-how-tos/articles/meat-and-poultry-temperature-guide
    },
    {
        question: "A Genoise is a type of what ?",
        answers: ["Frosting", "Dough", "Sauce", "Cake", "Donut" ],
        correctAns: "Cake",
        correctImg: "",
        wrongImg: ""
        // https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/gnoise_sponge_with_69988_16x9.jpg
        // https://www.bbc.co.uk/food/recipes/gnoise_sponge_with_69988

    },
    {
        question: "When meat or vegetables are browned in a pan. What are the bits of caramelized juices that remain called?",
        answers: ["Fond", "Glazing", "Aromatics", "Residue", "Bouillon" ],
        correctAns: "Fond",
        correctImg: "",
        wrongImg: ""
        // http://foodofonesown.blogspot.com/2016/06/love-your-ugly-fond.html?m=0
    },
    {
        question: "When when apples, artichokes, or potatoes are peeled and sliced, the bits will turn brown if not used immediately. To prevent this, they may be saoked in water mixed with lemon juice or white vinegar. What is this preventative measure called?",
        answers: ["Blanching", "Steeping", "Reconstituting", "Acidulation", "Tempering" ],
        correctAns: "Fond",
        correctImg: "",
        wrongImg: ""
        // https://www.finecooking.com/app/uploads/assets/uploads/posts/13872/051129088-08-how-to-prep-baby-artichokes_xlg.jpg
    },
    {
        question: "When a chef juliennes a fruit or vegetable, the results look like which of the following ?",
        answers: ["Coins", "Matchsticks", "Cubes", "Crowns", "Diamonds" ],
        correctAns: "Matchsticks",
        correctImg: "",
        wrongImg: ""
        // https://i2.wp.com/www.foodrepublic.com/wp-content/uploads/2016/05/Julienne-Veggies-Mandoline.jpg?resize=1280%2C%20560&ssl=1
        // http://3.bp.blogspot.com/-PKqOWZc2z44/UX6mT-pGwzI/AAAAAAAAAO4/kUzCQxhVO4E/s1600/knife+skills.jpg
    },
]

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
    alert("Time is up!");
    console.log("time up");
}