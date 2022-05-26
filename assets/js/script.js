var quizEl = document.querySelector("#btnstartquiz");

quizEl.addEventListener("click", removeStartPage);

function removeStartPage(event) {
    console.log(event.target);
    quizEl.parentElement.remove("mainstartquiz");    
    console.log("gone");
};


