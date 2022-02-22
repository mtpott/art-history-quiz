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

var questionOne = function() {
    event.preventDefault();
//create the question element that appears when the button is clicked
    questionEl.className = "first-question";

    //add the content for the div element that appears
    questionEl.textContent = "Who sculpted the David?";
    questionHolderEl.appendChild(questionEl);   

    var q1Option1 = document.createElement("button");
    q1Option1.className = "answer-btn-one";
    q1Option1.textContent = "da Vinci";
    questionEl.appendChild(q1Option1);

    var q1Option2 = document.createElement("button");
    q1Option2.id = "answer-btn-one-correct";
    q1Option2.textContent = "Michelangelo";
    questionEl.appendChild(q1Option2);

    var q1Option3 = document.createElement("button");
    q1Option3.className = "answer-btn-one";
    q1Option3.textContent = "Donatello";
    questionEl.appendChild(q1Option3);

    var q1Option4 = document.createElement("button");
    q1Option4.className = "answer-btn-one";
    q1Option4.textContent = "Botticelli";
    questionEl.appendChild(q1Option4);

    if (document.getElementById("answer-btn-one-correct").clicked == true) {
        window.alert("Correct!");
        //add to the user's score
        userScore++; 
        //move to the next function
        } else {
        //deduct 5 seconds from the timer and move to the next question 
        }

    //if the user clicks the right answer, this targets that button
    var correctAnswerOneEl = document.querySelector("#answer-btn-one-correct");
    correctAnswerOneEl.addEventListener("click", questionTwo);

    var incorrectAnswerOneEl = document.querySelector(".answer-btn-one");
    incorrectAnswerOneEl.addEventListener("click", questionTwo);
    
};

var questionTwo = function() {
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
    q2Option2.id = "answer-btn-two";
    q2Option2.textContent = "His toe";
    questionEl.appendChild(q2Option2);

    var q2Option3 = document.createElement("button");
    q2Option3.className = "answer-btn-two-correct";
    q2Option3.textContent = "His ear";
    questionEl.appendChild(q2Option3);

    var q2Option4 = document.createElement("button");
    q2Option4.className = "answer-btn-two";
    q2Option4.textContent = "His nose";
    questionEl.appendChild(q2Option4);
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

    event.preventDefault();
//create the question element that appears when the button is clicked
    questionEl.className = "third-question";
    questionEl.textContent = "Which French artist was known for painting ballerinas?"

    
    var q3Option1 = document.createElement("button");
    q3Option1.className = "answer-btn-three";
    q3Option1.textContent = "Claude Monet";
    questionEl.appendChild(q3Option1);

    var q3Option2 = document.createElement("button");
    q3Option2.id = "answer-btn-three";
    q3Option2.textContent = "Paul Cézanne";
    questionEl.appendChild(q3Option2);

    var q3Option3 = document.createElement("button");
    q3Option3.className = "answer-btn-three";
    q3Option3.textContent = "Henri Matisse";
    questionEl.appendChild(q3Option3);

    var q3Option4 = document.createElement("button");
    q3Option4.className = "answer-btn-three-correct";
    q3Option4.textContent = "Edgar Degas";
    questionEl.appendChild(q3Option4);

}

//quiz questions:

// 3. which french artist was known for painting ballerinas? 
// a - claude monet 
// b - paul cézanne 
// c - henri matisse 
// d - edgar degas **

buttonEl.addEventListener("click", questionOne);
