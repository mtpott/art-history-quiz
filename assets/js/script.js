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
var questionsEl = document.querySelector(".answer-btn");

//to keep track of the user's score
var userScore = 0;

var questionOne = function() {
    event.preventDefault();
//create the question element that appears when the button is clicked
    questionEl.className = "first-question";

    //add the content for the div element that appears
    questionEl.textContent = "Who sculpted the David?";
    questionHolderEl.appendChild(questionEl);   

    // var firstQuestionAEl = document.createElement("button");
    // firstQuestionAEl.className = "answer-btn-one";
    // firstQuestionAEl.textContent = "da Vinci";
    // questionEl.appendChild(firstQuestionAEl);

    // var firstQuestionBEl = document.createElement("button");
    // firstQuestionBEl.id = "answer-btn-one-correct";
    // firstQuestionBEl.textContent = "Michelangelo";
    // questionEl.appendChild(firstQuestionBEl);

    // var firstQuestionCEl = document.createElement("button");
    // firstQuestionCEl.className = "answer-btn-one";
    // firstQuestionCEl.textContent = "Donatello";
    // questionEl.appendChild(firstQuestionCEl);

    // var firstQuestionDEl = document.createElement("button");
    // firstQuestionDEl.className = "answer-btn-one";
    // firstQuestionDEl.textContent = "Botticelli";
    // questionEl.appendChild(firstQuestionDEl);

    var answerOptionsOne = ["da Vinci", "Michelangelo", "Donatello", "Botticelli"];
//use array to display answers; buttons need to be created in order to make this a clickable quiz

    for (i = 0; i < answerOptionsOne.length; i++) {
        var answerChoicesOneEl = document.createElement("button");
        answerChoicesOneEl.className = "answer-btn-one";
        answerChoicesOneEl.textContent = answerOptionsOne[i];
        answerChoicesOneEl.setAttribute = ("value", answerOptionsOne[i]);
    //append answerOptionsOne to the parent container, questionHolderEl
        questionEl.appendChild(answerChoicesOneEl);
    //make these clickable buttons
       { if (document.getElementById("#answer-btn-one-correct") === true) {
            window.prompt("Correct!");
            //add to the user's score
            userScore++; 
            //move to the next function
            questionTwo;
        } else {
            //deduct 5 seconds from the timer and move to the next question
            questionTwo;
            }
        }
    }    
};

var questionTwo = function() {
    var secondQuestionAEl = document.createElement("button");
    secondQuestionAEl.className = "answer-btn-two";
    secondQuestionAEl.textContent = "His finger";
    questionEl.appendChild(secondQuestionAEl);

    var secondQuestionBEl = document.createElement("button");
    secondQuestionBEl.id = "answer-btn-two";
    secondQuestionBEl.textContent = "His toe";
    questionEl.appendChild(secondQuestionBEl);

    var secondQuestionCEl = document.createElement("button");
    secondQuestionCEl.className = "answer-btn-tw0-correct";
    secondQuestionCEl.textContent = "His ear";
    questionEl.appendChild(secondQuestionCEl);

    var secondQuestionDEl = document.createElement("button");
    secondQuestionDEl.className = "answer-btn-two";
    secondQuestionDEl.textContent = "His nose";
    questionEl.appendChild(secondQuestionDEl);
    // var questionTwoEl = document.querySelector("ul");
    // questionTwoEl.className = "second-question";
    // var answerOptionsTwo = ["His finger", "His toe", "His ear", "His Nose"];

    // for (i = 0; i < answerOptionsTwo.length; i++) {
    //     var answerChoicesTwoEl = document.createElement("button");
    //     answerChoicesTwoEl.className = "answer-btn-two";
    //     answerChoicesTwoEl.textContent = answerOptionsTwo[i];
    //     answerChoicesTwoEl.setAttribute("value", answerOptionsTwo[i]);

    //     questionEl.appendChild(answerChoicesTwoEl);
    //}
};


var questionThree = function() {
    var questionThreeEl = document.querySelector("ul");
    questionThreeEl.className = "third-question";

}

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

buttonEl.addEventListener("click", questionOne);
questionsEl.addEventListener("click", questionTwo);