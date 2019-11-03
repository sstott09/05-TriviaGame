$(document).ready(function () {

    // event listeners
    $("#remaining-time").hide();
    $("#start").on('click', trivia.startGame);
    $(document).on('click', '.option', trivia.guessChecker);
  
  })
  
  var trivia = {
    // trivia properties
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    currentSet: 0,
    timer: 20,
    timerOn: false,
    timerId: '',
    // questions options and answers data
    questions: {
      q1: 'A French culinary artist, known as “The King of Chefs and the Chef of Kings?',
      q2: 'How many French Mother Sauces are there?',
      q3: 'What country produces more than half of the worlds olive oil?',
      q4: 'Which of these ingredients is an emulsifier?',
      q5: "Which of these ingredients isn't in a Mirepoix?",
      q6: 'What Temperature should you cook Chicken to?',
      q7: "A Genoise is a type of what?",
      q8: "When meat or vegetables are browned in a pan. What are the bits of caramelized juices that remain called?",
      q9: "When when apples, artichokes, or potatoes are peeled and sliced, the bits will turn brown if not used immediately. To prevent this, they may be soaked in water mixed with lemon juice or white vinegar. What is this preventative measure called?",
      q10: "When a chef juliennes a fruit or vegetable, the results look like which of the following ?"
    },
    options: {
      q1: ["Marie-Antoine Carême", "Paul Bocuse", "Joël Robuchon", "Auguste Escoffier", "Jacques Pépin"],
      q2: ["7", "3", "6", "9", "5"],
      q3: ["Spain", "Greece", "France", "Italy", "Morroco", "USA"],
      q4: ["Soy Sauce", "Honey", "Mustard", "Vinegar", "Oil"],
      q5: ["Onion", "Garlic", "Celery", "Carrot"],
      q6: ["125 F", "155 F", "165 F", "185 F", "195 F"],
      q7: ["Frosting", "Dough", "Sauce", "Cake", "Donut"],
      q8: ["Fond", "Glazing", "Aromatics", "Residue", "Bouillon"],
      q9: ["Blanching", "Steeping", "Reconstituting", "Acidulation", "Tempering"],
      q10: ["Coins", "Matchsticks", "Cubes", "Crowns", "Diamonds"]
    },
    answers: {
      q1: 'Auguste Escoffier',
      q2: '5',
      q3: 'Spain',
      q4: 'Mustard',
      q5: 'Garlic',
      q6: '165 F',
      q7: 'Cake',
      q8: 'Fond',
      q9: 'Acidulation',
      q10: 'Matchsticks'
    },
    // trivia methods
    // method to initialize game
    startGame: function () {
      // restarting game results
      trivia.currentSet = 0;
      trivia.correct = 0;
      trivia.incorrect = 0;
      trivia.unanswered = 0;
      clearInterval(trivia.timerId);
  
      // show game section
      $('#game').show();
  
      //  empty last results
      $('#results').html('');
  
      // show timer
      $('#timer').text(trivia.timer);
  
      // remove start button
      $('#start').hide();
  
      $('#remaining-time').show();
  
      // ask first question
      trivia.nextQuestion();
  
    },
    // method to loop through and display questions and options 
    nextQuestion: function () {
  
      // set timer to 20 seconds each question
      trivia.timer = 20;
      $('#timer').removeClass('last-seconds');
      $('#timer').text(trivia.timer);
  
      // to prevent timer speed up
      if (!trivia.timerOn) {
        trivia.timerId = setInterval(trivia.timerRunning, 1000);
      }
  
      // gets all the questions then indexes the current questions
      var questionContent = Object.values(trivia.questions)[trivia.currentSet];
      $('#question').text(questionContent);
  
      // an array of all the user options for the current question
      var questionOptions = Object.values(trivia.options)[trivia.currentSet];
  
      // creates all the trivia guess options in the html
      $.each(questionOptions, function (index, key) {
        $('#options').append($('<button class="option btn btn-info btn-lg">' + key + '</button>'));
      })
  
    },
    // method to decrement counter and count unanswered if timer runs out
    timerRunning: function () {
      // if timer still has time left and there are still questions left to ask
      if (trivia.timer > -1 && trivia.currentSet < Object.keys(trivia.questions).length) {
        $('#timer').text(trivia.timer);
        trivia.timer--;
        if (trivia.timer === 4) {
          $('#timer').addClass('last-seconds');
        }
      }
      // the time has run out and increment unanswered, run result
      else if (trivia.timer === -1) {
        trivia.unanswered++;
        trivia.result = false;
        clearInterval(trivia.timerId);
        resultId = setTimeout(trivia.guessResult, 1000);
        $('#results').html('<h3>Out of time! The answer was ' + Object.values(trivia.answers)[trivia.currentSet] + '</h3>');
      }
      // if all the questions have been shown end the game, show results
      else if (trivia.currentSet === Object.keys(trivia.questions).length) {
  
        // adds results of game (correct, incorrect, unanswered) to the page
        $('#results')
          .html('<h3>Thank you for playing!</h3>' +
            '<p>Correct: ' + trivia.correct + '</p>' +
            '<p>Incorrect: ' + trivia.incorrect + '</p>' +
            '<p>Unaswered: ' + trivia.unanswered + '</p>' +
            '<p>Please play again!</p>');
  
        // hide game sction
        $('#game').hide();
  
        // show start button to begin a new game
        $('#start').show();
      }
  
    },
    // method to evaluate the option clicked
    guessChecker: function () {
  
      // timer ID for gameResult setTimeout
      var resultId;
  
      // the answer to the current question being asked
      var currentAnswer = Object.values(trivia.answers)[trivia.currentSet];
  
      // if the text of the option picked matches the answer of the current question, increment correct
      if ($(this).text() === currentAnswer) {
        // turn button green for correct
        $(this).addClass('btn-success').removeClass('btn-info');
  
        trivia.correct++;
        clearInterval(trivia.timerId);
        resultId = setTimeout(trivia.guessResult, 1000);
        $('#results').html('<h3>Correct Answer!</h3>');
      }
      // else the user picked the wrong option, increment incorrect
      else {
        // turn button clicked red for incorrect
        $(this).addClass('btn-danger').removeClass('btn-info');
  
        trivia.incorrect++;
        clearInterval(trivia.timerId);
        resultId = setTimeout(trivia.guessResult, 1000);
        $('#results').html('<h3>Better luck next time! ' + currentAnswer + '</h3>');
        $('<img src="assets/imgages/">').appendTo(".ball_footballbox");
      }
  
    },
    // method to remove previous question results and options
    guessResult: function () {
  
      // increment to next question set
      trivia.currentSet++;
  
      // remove the options and results
      $('.option').remove();
      $('#results h3').remove();
  
      // begin next question
      trivia.nextQuestion();
  
    }
  
  }