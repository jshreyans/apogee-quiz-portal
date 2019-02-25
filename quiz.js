function questionDisplay(content){
    var newElement = document.createElement("div");
    newElement.className = "questions";
    var questionsContainer = document.getElementsByClassName("questions-container")[0];
    newElement.innerHTML= content;
    questionsContainer.appendChild(newElement);
}

var numOfQuestions = 20;
for(var i= 1; i<=numOfQuestions ; i++){
    questionDisplay(i);
}

const nav = document.querySelector(".nav-menu");

document.querySelector(".ham").addEventListener("click", () => {nav.style.left = "0"});
document.querySelector("#close-nav").addEventListener("click", () => {nav.style.left = "-100%"});