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

var timerEl = document.getElementById("#countdown");

function countdown() {
    //give the user 60 seconds to finish the quiz
    var timeLeft = 60;

    //if the amount of time the user has left is greater than 0, inform the user how much time is left
    var timeInterval = setInterval (function() {
        if (timeLeft > 0)
        timerEl.textContent = timeLeft + " seconds remaining!";
        timeLeft--;
    //if the user clicks the wrong button, take 5 seconds away from the time

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

    questionEl.appendChild(q1Option1);

    var q1Option2 = document.createElement("button");
    q1Option2.id = "answer-btn-one-correct";
    q1Option2.textContent = "Michelangelo";
    q1Option2.setAttribute("data-question-one", questionOneChoice);

    questionEl.appendChild(q1Option2);

    var q1Option3 = document.createElement("button");
    q1Option3.className = "answer-btn-one";
    q1Option3.textContent = "Donatello";
    q1Option3.setAttribute("data-question-one", questionOneChoice);

    questionEl.appendChild(q1Option3);

    var q1Option4 = document.createElement("button");
    q1Option4.className = "answer-btn-one";
    q1Option4.textContent = "Botticelli";
    q1Option4.setAttribute("data-question-one", questionOneChoice);
    questionEl.appendChild(q1Option4);

    //if the user clicks the right answer, this targets that button
    //var correctAnswerOneEl = document.querySelector("#answer-btn-one-correct");
    //     if (correctAnswerOneEl.clicked == true) {
    //         window.alert("correct!");
    //         questionTwo();
    //     }

    //correctAnswerOneEl.addEventListener("click", answerChoice1);

    function answerChoice1(questionOneChoice) {
        //make element appear/disappear when user is right/wrong
        //if they click the right button, the element that says "correct!" appears. if wrong, "incorrect!"
        if (document.getElementById("answer-btn-one-correct").clicked) {
            window.alert("Correct!");
            //add to the user's score
            //userScore++; 
            console.log("the correct answer was chosen");
            //move to the next function
            } else {
                console.log("the wrong answer was chosen");
            //deduct 5 seconds from the timer and move to the next question 
            }
        };
    

    var incorrectAnswerOneEl = document.querySelector(".answer-btn-one");
        if(incorrectAnswerOneEl.clicked == true) {
            window.alert("Incorrect!");
            questionTwo();
        }
        else {
            window.alert("Incorrect!");
            questionTwo();
        }
    incorrectAnswerOneEl.addEventListener("click", answerChoice1);
};

var questionTwo = function(event) {
    event.preventDefault();

//create the question element that appears when the button is clicked
    questionEl.className = "second-question";
    questionEl.textContent = "Vincent van Gogh famously injured himself by cutting off a body part. Which part did he cut off?";
    questionHolderEl.appendChild(questionEl);

    var q2Option1 = document.createElement("button");
    q2Option1.className = "answer-btn-two";
    q2Option1.textContent = "His finger";
    questionEl.appendChild(q2Option1);

    var q2Option2 = document.createElement("button");
    q2Option2.className = "answer-btn-two";
    q2Option2.textContent = "His toe";
    questionEl.appendChild(q2Option2);

    var q2Option3 = document.createElement("button");
    q2Option3.id = "answer-btn-two-correct";
    q2Option3.textContent = "His ear";
    questionEl.appendChild(q2Option3);

    var q2Option4 = document.createElement("button");
    q2Option4.className = "answer-btn-two";
    q2Option4.textContent = "His nose";
    questionEl.appendChild(q2Option4);
 


    //if the user clicks the right answer, this targets that button
    var correctAnswerTwoEl = document.querySelector("#answer-btn-two-correct");
    correctAnswerTwoEl.addEventListener("click", questionThree);
    
    var incorrectAnswerTwoEl = document.querySelector(".answer-btn-two");
    incorrectAnswerTwoEl.addEventListener("click", questionThree);

};


var questionThree = function(event) {

    event.preventDefault();
//create the question element that appears when the button is clicked
    questionEl.className = "third-question";
    questionEl.textContent = "Which French artist was known for painting ballerinas?"

    
    var q3Option1 = document.createElement("button");
    q3Option1.className = "answer-btn-three";
    q3Option1.textContent = "Claude Monet";
    questionEl.appendChild(q3Option1);

    var q3Option2 = document.createElement("button");
    q3Option2.className = "answer-btn-three";
    q3Option2.textContent = "Paul Cézanne";
    questionEl.appendChild(q3Option2);

    var q3Option3 = document.createElement("button");
    q3Option3.className = "answer-btn-three";
    q3Option3.textContent = "Henri Matisse";
    questionEl.appendChild(q3Option3);

    var q3Option4 = document.createElement("button");
    q3Option4.id = "answer-btn-three-correct";
    q3Option4.textContent = "Edgar Degas";
    questionEl.appendChild(q3Option4);

    var correctAnswerThreeEl = document.querySelector("#answer-btn-three-correct");
    correctAnswerThreeEl.addEventListener("click", questionFour);
    
    var incorrectAnswerThreeEl = document.querySelector(".answer-btn-three");
    incorrectAnswerThreeEl.addEventListener("click", questionFour);
};

var questionFour = function(event) {
    event.preventDefault();

    questionEl.className = "fifth-question";
    questionEl.textContent = "The Last Supper by Leonardo da Vinci is located in which Italian town?"

    var q4Option1 = document.createElement("button");
    q4Option1.className = "answer-btn-five";
    q4Option1.textContent = "Florence";
    questionEl.appendChild(q4Option1);

    var q4Option2 = document.createElement("button");
    q4Option2.id = "answer-btn-five-correct";
    q4Option2.textContent = "Milan";
    questionEl.appendChild(q4Option2);

    var q4Option3 = document.createElement("button");
    q4Option3.className = "answer-btn-four";
    q4Option3.textContent = "Rome";
    questionEl.appendChild(q4Option3);

    var q4Option4 = document.createElement("button");
    q4Option4.className = "answer-btn-four";
    q4Option4.textContent = "Siena";
    questionEl.appendChild(q4Option4);

    var correctAnswerFourEl = document.querySelector("#answer-btn-five-correct");
    correctAnswerFourEl.addEventListener("click", questionFive);
    
    var incorrectAnswerFourEl = document.querySelector(".answer-btn-five");
    incorrectAnswerFourEl.addEventListener("click", questionFive);
}

var questionFive = function(event) {
    event.preventDefault();

    questionEl.className = "seventh-question";
    questionEl.textContent = "What do peaches symbolize in Chinese art?";

    var q5Option1 = document.createElement("button");
    q5Option1.className = "answer-btn-seven";
    q5Option1.textContent = "Wealth";
    questionEl.appendChild(q5Option1);

    var q5Option2 = document.createElement("button");
    q5Option2.className = "answer-btn-seven";
    q5Option2.textContent = "Death";
    questionEl.appendChild(q5Option2);

    var q5Option3 = document.createElement("button");
    q5Option3.id = "answer-btn-seven-correct";
    q5Option3.textContent = "Immortality";
    questionEl.appendChild(q5Option3);

    var q5Option4 = document.createElement("button");
    q5Option4.className = "answer-btn-seven";
    q5Option4.textContent = "Plague";
    questionEl.appendChild(q5Option4);

    var correctAnswerFourEl = document.querySelector("#answer-btn-seven-correct");
    correctAnswerFourEl.addEventListener("click", showScore);
    
    var incorrectAnswerFourEl = document.querySelector(".answer-btn-seven");
    incorrectAnswerFourEl.addEventListener("click", showScore);
};

function showScore() {

};

buttonEl.addEventListener("click", questionOne);