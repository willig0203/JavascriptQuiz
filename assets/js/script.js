
var quizEl = document.querySelector("#btnstartquiz");

quizEl.addEventListener("click", removeStartPage);



var btnSelected1 = document.querySelector("#btnAns1");
var btnSelected2 = document.querySelector("#btnAns2");
var btnSelected3 = document.querySelector("#btnAns3");
var btnSelected4 = document.querySelector("#btnAns4");
btnSelected1.addEventListener("click", selectAnswer);
btnSelected2.addEventListener("click", selectAnswer);
btnSelected3.addEventListener("click", selectAnswer);
btnSelected4.addEventListener("click", selectAnswer);

function selectAnswer(event) {
    console.log("selectAnswer" + " " + event.target);
    console.log(object.innerHTML);
}



function removeStartPage(event) {
    quizEl.parentElement.remove("mainstartquiz");
    startTimer();
    showQuestions();
    // display for.......
};

function startTimer() {
    var minute = 5;
    var sec = 60;
    setInterval(function () {
        document.getElementById("#quiztimeleft").innerHTML = minute + " : " + sec;
        sec--;
        if (sec == 00) {
            minute--;
            sec = 60;
            if (minute == 0) {
                minute = 5;
            }
        }
    }, 1000);
};



function hidQuestions(event) {
    const button = document.querySelector('.mainstartquestions');
    button.classList.add('hidden');
};

function showQuestions(event) {
    const button = document.querySelector('.mainstartquestions');
    button.classList.remove('hidden');
};

hidQuestions();




