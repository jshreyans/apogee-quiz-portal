function questionDisplay(content){
    var newElement = document.createElement("div");
    newElement.className = "questions";
    var questionsContainer = document.getElementsByClassName("questions-container")[0];
    newElement.innerHTML= content;
    questionsContainer.appendChild(newElement);
}

var numOfQuestions = 10;
for(var i= 1; i<=numOfQuestions ; i++){
    questionDisplay(i);
}