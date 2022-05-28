

var goToStartPageEl = document.querySelector(".goToStartPage");
goToStartPageEl.addEventListener("click", goToStartPage);
function goToStartPage() {
    console.log("goToStartPage");
    pageVisible('.showHighScores', false);
    btnDisabled('.btnhighscores', false);
    pageVisible('.mainstartquiz', true);
}

var clearAllScoresEl = document.querySelector(".clearAllScores");
clearAllScoresEl.addEventListener("click", clearAllScores);
function clearAllScores() {
    console.log("clearAllScores");
}

var mainHiScoreBtnEl = document.querySelector(".btnhighscores");
mainHiScoreBtnEl.addEventListener("click", showHiScores);
function showHiScores() {
    console.log("show high scores!");

    pageVisible('.mainstartquiz', false);
    pageVisible('.mainstartquestions', false);
    pageVisible('.endoftestpage', false);
    pageVisible('.showHighScores', true);

}


var quizEl = document.querySelector("#btnstartquiz");
quizEl.addEventListener("click", removeStartPage);
function removeStartPage(event) {
    pageVisible('.mainstartquiz', false);
    startTimer();
    pageVisible('.mainstartquestions', true);    
    btnDisabled('.btnhighscores', true);
    
    
    // display for.......
    loadQuestion(0);

};


var mainstartEl = document.querySelector(".mainstartquestions");
mainstartEl.addEventListener("click", selectAnswer);
function selectAnswer(event) {
    console.log("selectAnswer" + " " + event.target);
    console.log(event.target.id);
    
    // check if answer in the loaded question
    console.log("check if answer");

}


var quizForm = document.querySelector(".submitForm");
quizForm.addEventListener("click", doSomething);
function doSomething() {
    console.log("did something!");
    pageVisible('.mainstartquestions', true);
    btnDisabled('.btnhighscores', false);
}



function startTimer() {
    var minute = 1;
    var sec = 60;
    tmr = setInterval(function () {
        var timeDisplay = document.getElementById("#quiztimeleft").innerHTML = minute + " : " + sec;
        sec--;

        if (sec == 00) {
            if (minute == 0) {
                // timeDisplay = "0";
                clearInterval(tmr);
                pageVisible('.mainstartquestions', false);
                pageVisible('.endoftestpage', true);
            } else {
                minute--;
                sec = 60;
            }

        }

    }, 1000);
};

function btnDisabled(name, state) {
    object = document.querySelector(name);
    if (state)
        object.disabled = true;
    else
        object.disabled = false;
}

function pageVisible(name, visiblityState) {
    object = document.querySelector(name);
    if (visiblityState)
        object.classList.remove('hidden');
    else
        object.classList.add('hidden');
}


pageVisible('.mainstartquestions', false);
pageVisible('.endoftestpage', false);
pageVisible('.showHighScores', false);

// our object array
var questionsArray = [];

// our object
var questions = {};

function createQuestions() {

    objQuestions = {
        question: ["Commonly used data types DO Not Include:"],
        btnAns1: ["1. strings"],
        btnAns2: ["2. booleans"],
        btnAns3: ["3. alerts"],
        btnAns4: ["4. numbers"],
        answerVal: ["btnAns3"],
    };

    questionsArray.push(objQuestions);

    objQuestions = {
        question: ["The condition in an if / else statement is enclosed with ________:"],
        btnAns1: ["1. quotes"],
        btnAns2: ["2. curly brackets"],
        btnAns3: ["3. parenthesis"],
        btnAns4: ["4. square brackets"],
        answerVal: ["btnAns2"],
    };

    questionsArray.push(objQuestions);

    objQuestions = {
        question: ["Arrays in JavaScript can be used to store ________:"],
        btnAns1: ["1. numbers and strings"],
        btnAns2: ["2. other arrays"],
        btnAns3: ["3. booleans"],
        btnAns4: ["4. all of the above"],
        answerVal: ["btnAns4"],
    };

    questionsArray.push(objQuestions);

    objQuestions = {
        question: ["String values must be enclosed within _______ when being assigned to variables:"],
        btnAns1: ["1. commas"],
        btnAns2: ["2. curly brackets"],
        btnAns3: ["3. quotes"],
        btnAns4: ["4. parenthesis"],
        answerVal: ["btnAns3"],
    };

    questionsArray.push(objQuestions);

    objQuestions = {
        question: ["A very useful tool used during development and debugging for printing content to the debugger is _______:"],
        btnAns1: ["1. JaveScript"],
        btnAns2: ["2. teminal/bash"],
        btnAns3: ["3. for loops"],
        btnAns4: ["4. consol.log"],
        answerVal: ["btnAns4"],
    };

    questionsArray.push(objQuestions);

    console.log(questionsArray);
}

createQuestions();

var answer = null;

function loadQuestion(num) {

    var question = questionsArray[num];

    document.querySelector('.quizQuestion').innerHTML = question['question'];

    document.getElementById("btnAns1").innerHTML = question['btnAns1'];
    document.getElementById("btnAns2").innerHTML = question['btnAns2'];
    document.getElementById("btnAns3").innerHTML = question['btnAns3'];
    document.getElementById("btnAns4").innerHTML = question['btnAns4'];

    answer = question['answerVal'];
    console.log(answer);


}

// var quiz = {};

// var loadQuiz = function () {
//     quiz = JSON.parse(localStorage.getItem("quiz"));

//     // if nothing in localStorage, create a new object
//     if (!quiz) {
//         quiz = {
//             question: [],
//             btn1Val: [],
//             btn2Val: [],
//             btn3Val: [],
//             btn4Val: [],
//             answerVal: [],
//         };
//     }

//     // loop over object properties
//     $.each(quiz, function (quiz, arr) {
//         console.log(quiz, arr);
//         // then loop over sub-array
//         arr.forEach(function (quiz) {
//             createTask(task.text, task.date, list);
//         });
//     });
// };

// var saveTasks = function () {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// };



