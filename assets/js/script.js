
var quizEl = document.querySelector("#btnstartquiz");

quizEl.addEventListener("click", removeStartPage);

var mainstartEl = document.querySelector(".mainstartquestions");

mainstartEl.addEventListener("click", selectAnswer);

function selectAnswer(event) {
    console.log("selectAnswer" + " " + event.target);
    console.log(event.target.id);
}



function removeStartPage(event) {
    startPageVisible(false);
    startTimer();
    questionsPageVisible(true);
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
        console.log("sec == 00 && minute == 0")
        if (sec == 00 && minute == 0) {
            console.log("stop time and switch page")
            questionsPageVisible(false);
            endOfTestPageVisible(true);
        }
    }, 1000);
};


function startPageVisible(visiblityState) {
    object = document.querySelector('.mainstartquiz');
    if (visiblityState)
        object.classList.remove('hidden');
    else
        object.classList.add('hidden');
}

function questionsPageVisible(visiblityState) {
    object = document.querySelector('.mainstartquestions');
    if (visiblityState)
        object.classList.remove('hidden');
    else
        object.classList.add('hidden');
}

function endOfTestPageVisible(visiblityState) {
    object = document.querySelector('.endoftestpage');
    if (visiblityState)
        object.classList.remove('hidden');
    else
        object.classList.add('hidden');
}

questionsPageVisible(false);
endOfTestPageVisible(false);



