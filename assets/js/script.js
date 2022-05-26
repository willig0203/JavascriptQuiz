
var quizEl = document.querySelector("#btnstartquiz");

quizEl.addEventListener("click", removeStartPage);

function removeStartPage(event) {
    console.log(event.target);
    quizEl.parentElement.remove("mainstartquiz");
    console.log("gone");

    // start timer
    
    startTimer();

    // display for.......
};


function startTimer() {
    var minute = 5;
    var sec = 60;
    setInterval(function() {
      document.getElementById("#quiztimeleft").innerHTML = minute + " : " + sec;
      sec--;
      if (sec == 00) {
        minute --;
        sec = 60;
        if (minute == 0) {
          minute = 5;
        }
      }
    }, 1000);
}






