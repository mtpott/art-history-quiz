var buttonEl = document.querySelector("#start");
var questionHolderEl = document.querySelector(".questions");
var questionEl = document.createElement("ul");
var scoreContainerEl = document.querySelector(".score-container");

var timerEl = document.getElementById("timer");
var timerContainerEl = document.getElementById("timer-container");

//variable to determine that the quiz is over
//after every function, declare the same variable to ensure that it's still true and if it's not,
//run the last part of the if/else statement in the countdown function
var questionsLeft = true;

//give the user 30 seconds to finish the quiz
var timeLeft = 30;
//to keep track of the user's score
var userScore = 0;

//when the start button is clicked, the countdown() function begins counting down
function countdown() {

    //if the amount of time the user has left is greater than 0, inform the user how much time is left
    var timeCountdown = setInterval(function() {
        if (timeLeft > 0) {
        timerContainerEl.textContent = timeLeft + " seconds left";
        timeLeft--;
    //if the user runs out of time before they finish the quiz, show them their score
        } else if (timeLeft <= 0) {
            timerContainerEl.textContent = "Out of time! Let's see how you did.";
            clearInterval(timeCountdown);
            showScore();
        } else if (questionsLeft) {
            clearInterval(timeCountdown);
        }
    }, 1000);
    //append timerEl to timerContainerEl
    timerContainerEl.appendChild(timerEl);
};

var questionOne = function(event) {
    event.preventDefault();
//create the question element that appears when the button is clicked
    questionEl.className = "first-question";
    document.getElementById("start").style.visibility = "hidden";

    //add the content for the div element that appears
    questionEl.textContent = "Who sculpted the David?";
    questionHolderEl.appendChild(questionEl);
    var questionOneChoice = questionEl.getAttribute("data-question-one");

    var q1Option1 = document.createElement("button");
    q1Option1.className = "answer-btn";
    q1Option1.textContent = "da Vinci";
    q1Option1.setAttribute("data-question-one", questionOneChoice);
    q1Option1.onclick = function() {
        window.alert("Wrong!");
        questionTwo();
    //if the user clicks the wrong button, take 7 seconds away from the time
        timeLeft -= 5;
    };

    var q1Option2 = document.createElement("button");
    q1Option2.id = "answer-btn-one-correct";
    q1Option2.textContent = "Michelangelo";
    q1Option2.setAttribute("data-question-one", questionOneChoice);
    q1Option2.onclick = function() {
        window.alert("Correct!");
    //if the user answers correctly, they will get 5 points added to their score and moved to the next question
        userScore += 5;
        questionTwo();
    };

    var q1Option3 = document.createElement("button");
    q1Option3.className = "answer-btn";
    q1Option3.textContent = "Donatello";
    q1Option3.setAttribute("data-question-one", questionOneChoice);
    q1Option3.onclick = function() {
        window.alert("Wrong!");
        questionTwo();
        timeLeft -= 5;
    };

    var q1Option4 = document.createElement("button");
    q1Option4.className = "answer-btn";
    q1Option4.textContent = "Botticelli";
    q1Option4.setAttribute("data-question-one", questionOneChoice);
    q1Option4.onclick = function() {
        window.alert("Wrong!");
        questionTwo();
        timeLeft -= 5;
    };

    questionEl.appendChild(q1Option1);
    questionEl.appendChild(q1Option2);
    questionEl.appendChild(q1Option3);
    questionEl.appendChild(q1Option4);

    questionsLeft = new Boolean (true);
};

var questionTwo = function() {
//create the question element that appears when the button is clicked
    questionEl.className = "second-question";
    questionEl.textContent = "Vincent van Gogh famously injured himself by cutting off a body part. Which part did he cut off?";
    var questionTwoChoice = questionEl.getAttribute("data-question-two");
    questionHolderEl.appendChild(questionEl);

    var q2Option1 = document.createElement("button");
    q2Option1.className = "answer-btn";
    q2Option1.textContent = "His finger";
    q2Option1.setAttribute("data-question-two", questionTwoChoice);
    q2Option1.onclick = function() {
        window.alert("Wrong!");
        questionThree();
        timeLeft -= 5;
    };

    var q2Option2 = document.createElement("button");
    q2Option2.className = "answer-btn";
    q2Option2.textContent = "His toe";
    q2Option2.setAttribute("data-option-two", questionTwoChoice);
    q2Option2.onclick = function() {
        window.alert("Wrong!");
        questionThree();
        timeLeft -= 5;
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
    q2Option4.className = "answer-btn";
    q2Option4.textContent = "His nose";
    q2Option4.setAttribute("data-question-two", questionTwoChoice);
    q2Option4.onclick = function() {
        window.alert("Wrong!");
        questionThree();
        timeLeft -= 5;
    };
    
    questionEl.appendChild(q2Option1);
    questionEl.appendChild(q2Option2);
    questionEl.appendChild(q2Option3);
    questionEl.appendChild(q2Option4);

    questionsLeft = new Boolean (true);

};

var questionThree = function() {
    questionEl.className = "third-question";
    questionEl.textContent = "Which French artist was known for painting ballerinas?"
    var questionThreeChoice = questionEl.getAttribute("data-question-three");
    questionHolderEl.appendChild(questionEl);

    var q3Option1 = document.createElement("button");
    q3Option1.className = "answer-btn";
    q3Option1.textContent = "Claude Monet";
    q3Option1.setAttribute("data-question-three", questionThreeChoice);
    q3Option1.onclick = function() {
        window.alert("Wrong!");
        questionFour();
        timeLeft -= 5;
    };
    
    var q3Option2 = document.createElement("button");
    q3Option2.className = "answer-btn";
    q3Option2.textContent = "Paul Cézanne";
    q3Option2.setAttribute("data-question-three", questionThreeChoice);
    q3Option2.onclick = function() {
        window.alert("Wrong!");
        questionFour();
        timeLeft -= 5;
    };
    
    var q3Option3 = document.createElement("button");
    q3Option3.className = "answer-btn";
    q3Option3.textContent = "Henri Matisse";
    q3Option3.setAttribute("data-question-three", questionThreeChoice);
    q3Option3.onclick = function() {
        window.alert("Wrong!");
        questionFour();
        timeLeft -= 5;
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

    questionsLeft = new Boolean (true);
};

var questionFour = function() {
    questionEl.className = "fourth-question";
    questionEl.textContent = "The Last Supper by Leonardo da Vinci is located in which Italian town?"
    var questionFourChoice = questionEl.getAttribute("data-question-four");
    questionHolderEl.appendChild(questionEl);

    var q4Option1 = document.createElement("button");
    q4Option1.className = "answer-btn";
    q4Option1.textContent = "Florence";
    q4Option1.setAttribute("data-question-four", questionFourChoice);
    q4Option1.onclick = function() {
        window.alert("Wrong!");
        questionFive();
        timeLeft -= 5;
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
    q4Option3.className = "answer-btn";
    q4Option3.textContent = "Rome";
    q4Option3.setAttribute("data-question-four", questionFourChoice);
    q4Option3.onclick = function() {
        window.alert("Wrong!");
        questionFive();
        timeLeft -= 5;
    };

    var q4Option4 = document.createElement("button");
    q4Option4.className = "answer-btn";
    q4Option4.textContent = "Siena";
    q4Option4.setAttribute("data-question-four", questionFourChoice);
    q4Option4.onclick = function() {
        window.alert("Wrong!");
        questionFive();
        timeLeft -= 5;
    };

    questionEl.appendChild(q4Option1);
    questionEl.appendChild(q4Option2);
    questionEl.appendChild(q4Option3);
    questionEl.appendChild(q4Option4);

    questionsLeft = new Boolean (true);
};

var questionFive = function() {
    questionEl.className = "fifth-question";
    questionEl.textContent = "What do peaches symbolize in Chinese art?";
    var questionFiveChoice = questionEl.getAttribute("data-question-five");
    questionHolderEl.appendChild(questionEl);

    var q5Option1 = document.createElement("button");
    q5Option1.className = "answer-btn";
    q5Option1.textContent = "Wealth";
    q5Option1.setAttribute("data-question-five", questionFiveChoice);
    q5Option1.onclick = function() {
        window.alert("Wrong!");
        showScore(); 
    };

    var q5Option2 = document.createElement("button");
    q5Option2.className = "answer-btn";
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
    q5Option4.className = "answer-btn";
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

    questionsLeft = new Boolean (false);
};

var scoresNotShown = true;
function showScore() {
    if (scoresNotShown) {
        scoresNotShown = false;

        //hide the final quiz question, so the user can't see it
        questionEl.style.visibility = "hidden";

        var finalScore = document.createElement("div");
        finalScore.textContent = "Your final score is " + userScore + "!";
        //append finalScore variable to parent container, questionHolderEl
        questionHolderEl.appendChild(finalScore);
        //when the user finishes the quiz, they receive their score
        var scoreStore = document.createElement("div");
        scoreStore.textContent = "Enter your initials to save your score!";
        questionHolderEl.appendChild(scoreStore);

        var scoreSubmitEl = document.createElement("input");
        scoreSubmitEl.setAttribute("type", "text");
        scoreSubmitEl.id = "input-id";
        scoreStore.appendChild(scoreSubmitEl);
        //submit button for score
        var scoreButtonEL = document.createElement("button");
        scoreButtonEL.className = "submit-btn";
        scoreButtonEL.textContent = "Submit";
        scoreStore.appendChild(scoreButtonEL);

        scoreButtonEL.onclick = function() {
            saveScore();
        }
    };
 

    console.log("showscore function");

    var saveScore = function() {
         //add user data into an object
        var userData = {
        name: textInputValue,
        score: userScore
    };
        
        localStorage.setItem("score", JSON.stringify(userData));
        console.log("saveScore function");
    }
    var textInputValue = scoreSubmitEl.value;
    loadScore();
    scoreList = localStorage.getItem("score");
};

//function to load scores into a list
function loadScore() {
    var scoreList = document.createElement("ol");
    scoreList.appendChild(scoreContainerEl);

    console.log("loadscore function");

    if (!scoreList) {
        return false;
    };

    for (var i = 0; i < scoreList.length; i++) {
        console.log(scoreList[i]);
    }

    var scoreItem = document.createElement("li");
    scoreItem.className = "score-item";
    scoreItem.setAttribute("data-score-id", userScore);
}

buttonEl.addEventListener("click", questionOne);
buttonEl.addEventListener("click", countdown);