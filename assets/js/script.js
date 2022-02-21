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

//to keep track of the user's score
var userScore = 0;

var startQuiz = function() {
//create the question element that appears when the button is clicked
    questionEl.className = "first-question";

    event.preventDefault();
//add the content for the div element that appears
    questionEl.textContent = "Who sculpted the David?";
    questionHolderEl.appendChild(questionEl);
    QuestionOne();
}

var QuestionOne = function() {
//create clickable buttons to use to answer the questions   
var answerOptionsOne = ["da Vinci", "Michelangelo", "Donatello", "Botticelli"];
//use array to display answers; buttons need to be created in order to make this a clickable quiz

for (i = 0; i < answerOptionsOne.length; i++) {
    var answerChoicesOneEl = document.createElement("button");
    answerChoicesOneEl.className = "answer-btn";
    answerChoicesOneEl.textContent = answerOptionsOne[i];
    //answerChoicesOneEl.setAttribute = ("value", answerOptionsOne[i]);

//append answerOptionsOne to the parent container, questionHolderEl
    questionEl.appendChild(answerChoicesOneEl);
    }

//if the user clicks the right answer, they are told they are correct and moved to the next question
//if the user clicks any other answer, they are told they are incorrect and moved to the next question
//     if (answerOptionsOne === ) {
//         window.prompt("Correct!");
//     } else {
//         window.prompt("Incorrect!");
//     }
//     questionTwo();
};

// var questionTwo = function () {
//     var questionTwoEl = document.querySelector("ul");
//     questionTwoEl.className = "second-question";
//     var answerOptionsTwo = ["His finger", "His toe", "His ear", "His Nose"];

//     for (i = 0; i < answerOptionsTwo.length; i++) {
//         var answerChoicesTwoEl = document.createElement("button");
//         answerChoicesTwoEl.className = "answer-btn";
//         answerChoicesTwoEl.textContent = answerOptionsTwo[i];
//         answerChoicesTwoEl.setAttribute("value", answerOptionsTwo[i]);

//         questionEl.appendChild(answerChoicesTwoEl);
//     }
// };


//quiz questions:

// 2. vincent van gogh famously injured himself by cutting off a body part. which part did he cut off?
// a - his finger
// b- his toe 
// c- his ear **
// d - his nose 

// 3. which french artist was known for painting ballerinas? 
// a - claude monet 
// b - paul cézanne 
// c - henri matisse 
// d - edgar degas **

buttonEl.addEventListener("click", startQuiz);
questionsEl = document.querySelector(".answer-btn");
//questionsEl.addEventListener("click", questionTwo);