// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

var buttonEl = document.querySelector("#start");
var questionHolderEl = document.querySelector(".questions");
var questionEl = document.createElement("ul");

//var timerEl = document.getElementById("#countdown");


//when the start button is clicked, the countdown() function begins counting down
function countdown() {
    var timerContainerEl = document.getElementById("timer");
    //give the user 45 seconds to finish the quiz
    var timeLeft = 45;

    //if the amount of time the user has left is greater than 0, inform the user how much time is left
    var timeCountdown = setTimeout(function() {
        if (timeLeft > 0) {
        timerContainerEl.textContent = timeLeft + " seconds remaining!";
        timeLeft--;
    //if the user clicks the wrong button, take 5 seconds away from the time

    //if the user runs out of time before they finish the quiz, show them their score
    } else {
            timerEl.textContent = "Out of time!";
            showScore();
        }
    }, 1000);
};

//to keep track of the user's score
var userScore = 0;

var questionOne = function(event) {
    event.preventDefault();
//create the question element that appears when the button is clicked
    questionEl.className = "first-question";

    //add the content for the div element that appears
    questionEl.textContent = "Who sculpted the David?";
    questionHolderEl.appendChild(questionEl);
    var questionOneChoice = questionEl.getAttribute("data-question-one");

    var q1Option1 = document.createElement("button");
    q1Option1.className = "answer-btn-one";
    q1Option1.textContent = "da Vinci";
    q1Option1.setAttribute("data-question-one", questionOneChoice);
    q1Option1.onclick = function() {
        window.alert("Wrong!");
        questionTwo();
    };

    var q1Option2 = document.createElement("button");
    q1Option2.id = "answer-btn-one-correct";
    q1Option2.textContent = "Michelangelo";
    q1Option2.setAttribute("data-question-one", questionOneChoice);
    q1Option2.onclick = function() {
        window.alert("Correct!");
        userScore += 5;
        questionTwo();
    };

    var q1Option3 = document.createElement("button");
    q1Option3.className = "answer-btn-one";
    q1Option3.textContent = "Donatello";
    q1Option3.setAttribute("data-question-one", questionOneChoice);
    q1Option3.onclick = function() {
        window.alert("Wrong!");
        questionTwo();
    };

    var q1Option4 = document.createElement("button");
    q1Option4.className = "answer-btn-one";
    q1Option4.textContent = "Botticelli";
    q1Option4.setAttribute("data-question-one", questionOneChoice);
    q1Option4.onclick = function() {
        window.alert("Wrong!");
        questionTwo();
    };

    questionEl.appendChild(q1Option1);
    questionEl.appendChild(q1Option2);
    questionEl.appendChild(q1Option3);
    questionEl.appendChild(q1Option4);
};

var questionTwo = function() {
//create the question element that appears when the button is clicked
    questionEl.className = "second-question";
    questionEl.textContent = "Vincent van Gogh famously injured himself by cutting off a body part. Which part did he cut off?";
    var questionTwoChoice = questionEl.getAttribute("data-question-two");
    questionHolderEl.appendChild(questionEl);

    var q2Option1 = document.createElement("button");
    q2Option1.className = "answer-btn-two";
    q2Option1.textContent = "His finger";
    q2Option1.setAttribute("data-question-two", questionTwoChoice);
    q2Option1.onclick = function() {
        window.alert("Wrong!");
        questionThree();
    };

    var q2Option2 = document.createElement("button");
    q2Option2.className = "answer-btn-two";
    q2Option2.textContent = "His toe";
    q2Option2.setAttribute("data-option-two", questionTwoChoice);
    q2Option2.onclick = function() {
        window.alert("Wrong!");
        questionThree();
    };

    var q2Option3 = document.createElement("button");
    q2Option3.id = "answer-btn-two-correct";
    q2Option3.textContent = "His ear";
    q2Option3.setAttribute("data-question-two", questionTwoChoice);
    q2Option3.onclick = function() {
        window.alert("Correct!");
        userScore += 5;
        questionThree();
    };

    var q2Option4 = document.createElement("button");
    q2Option4.className = "answer-btn-two";
    q2Option4.textContent = "His nose";
    q2Option4.setAttribute("data-question-two", questionTwoChoice);
    q2Option4.onclick = function() {
        window.alert("Wrong!");
        questionThree();
    };
    
    questionEl.appendChild(q2Option1);
    questionEl.appendChild(q2Option2);
    questionEl.appendChild(q2Option3);
    questionEl.appendChild(q2Option4);

};


var questionThree = function() {
    questionEl.className = "third-question";
    questionEl.textContent = "Which French artist was known for painting ballerinas?"
    var questionThreeChoice = questionEl.getAttribute("data-question-three");
    questionHolderEl.appendChild(questionEl);

    var q3Option1 = document.createElement("button");
    q3Option1.className = "answer-btn-three";
    q3Option1.textContent = "Claude Monet";
    q3Option1.setAttribute("data-question-three", questionThreeChoice);
    q3Option1.onclick = function() {
        window.alert("Wrong!");
        questionFour();
    };
    
    var q3Option2 = document.createElement("button");
    q3Option2.className = "answer-btn-three";
    q3Option2.textContent = "Paul Cézanne";
    q3Option2.setAttribute("data-question-three", questionThreeChoice);
    q3Option2.onclick = function() {
        window.alert("Wrong!");
        questionFour();
    };
    
    var q3Option3 = document.createElement("button");
    q3Option3.className = "answer-btn-three";
    q3Option3.textContent = "Henri Matisse";
    q3Option3.setAttribute("data-question-three", questionThreeChoice);
    q3Option3.onclick = function() {
        window.alert("Wrong!");
        questionFour();
    };
    

    var q3Option4 = document.createElement("button");
    q3Option4.id = "answer-btn-three-correct";
    q3Option4.textContent = "Edgar Degas";
    q3Option4.setAttribute("data-question-three", questionThreeChoice);
    q3Option4.onclick = function() {
        window.alert("Correct!");
        userScore += 5;
        questionFour();
    };

    questionEl.appendChild(q3Option1);
    questionEl.appendChild(q3Option2);
    questionEl.appendChild(q3Option3);
    questionEl.appendChild(q3Option4);
};

var questionFour = function() {
    questionEl.className = "fourth-question";
    questionEl.textContent = "The Last Supper by Leonardo da Vinci is located in which Italian town?"
    var questionFourChoice = questionEl.getAttribute("data-question-four");
    questionHolderEl.appendChild(questionEl);

    var q4Option1 = document.createElement("button");
    q4Option1.className = "answer-btn-four";
    q4Option1.textContent = "Florence";
    q4Option1.setAttribute("data-question-four", questionFourChoice);
    q4Option1.onclick = function() {
        window.alert("Wrong!");
        questionFive();
    };

    var q4Option2 = document.createElement("button");
    q4Option2.id = "answer-btn-four-correct";
    q4Option2.textContent = "Milan";
    q4Option2.setAttribute("data-question-four", questionFourChoice);
    q4Option2.onclick = function() {
        window.alert("Correct!");
        userScore += 5;
        questionFive();
    };

    var q4Option3 = document.createElement("button");
    q4Option3.className = "answer-btn-four";
    q4Option3.textContent = "Rome";
    q4Option3.setAttribute("data-question-four", questionFourChoice);
    q4Option3.onclick = function() {
        window.alert("Wrong!");
        questionFive();
    };

    var q4Option4 = document.createElement("button");
    q4Option4.className = "answer-btn-four";
    q4Option4.textContent = "Siena";
    q4Option4.setAttribute("data-question-four", questionFourChoice);
    q4Option4.onclick = function() {
        window.alert("Wrong!");
        questionFive();
    };

    questionEl.appendChild(q4Option1);
    questionEl.appendChild(q4Option2);
    questionEl.appendChild(q4Option3);
    questionEl.appendChild(q4Option4);
};

var questionFive = function() {
    questionEl.className = "fifth-question";
    questionEl.textContent = "What do peaches symbolize in Chinese art?";
    var questionFiveChoice = questionEl.getAttribute("data-question-five");
    questionHolderEl.appendChild(questionEl);

    var q5Option1 = document.createElement("button");
    q5Option1.className = "answer-btn-five";
    q5Option1.textContent = "Wealth";
    q5Option1.setAttribute("data-question-five", questionFiveChoice);
    q5Option1.onclick = function() {
        window.alert("Wrong!");
        showScore();
    };

    var q5Option2 = document.createElement("button");
    q5Option2.className = "answer-btn-five";
    q5Option2.textContent = "Death";
    q5Option2.setAttribute("data-question-five", questionFiveChoice);
    q5Option2.onclick = function() {
        window.alert("Wrong!");
        showScore();
    };

    var q5Option3 = document.createElement("button");
    q5Option3.id = "answer-btn-five-correct";
    q5Option3.textContent = "Immortality";
    q5Option3.setAttribute("data-question-five", questionFiveChoice);
    q5Option3.onclick = function() {
        window.alert("Correct!");
        userScore += 5;
        showScore();
    };

    var q5Option4 = document.createElement("button");
    q5Option4.className = "answer-btn-five";
    q5Option4.textContent = "Plague";
    q5Option4.setAttribute("data-question-five", questionFiveChoice);
    q5Option4.onclick = function() {
        window.alert("Wrong!");
        showScore();
    };

    questionEl.appendChild(q5Option1);
    questionEl.appendChild(q5Option2);
    questionEl.appendChild(q5Option3);
    questionEl.appendChild(q5Option4);
};

function showScore() {

    var finalScore = document.createElement("div");
    finalScore.textContent = "You've finished the quiz! Your final score is " + userScore + ".";
    //append finalScore variable to parent container, questionHolderEl
    questionHolderEl.appendChild(finalScore);
    //when the user finishes the quiz, they receive their score
    //add 5 points to their score for each correct answer
    //take off 10 seconds for each incorrect answer

};

buttonEl.addEventListener("click", questionOne);