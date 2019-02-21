var currentSelected = 0; 
function getText(element){
    var text = element.innerText;
    return text;
}
window.addEventListener("click", function(){
    if(isClicked){
        isClicked= false;
    }
});
function getElement(text){
    var element= document.querySelector(".questions-container .questions:nth-child("+text+")");
    return element;
}

function questionDisplay(content){
    var newElement = document.createElement("div");
    newElement.className = "questions";
    var questionsContainer = document.getElementsByClassName("questions-container")[0];
    newElement.addEventListener("click", function(){
        var text =  getText(this);
        var element = getElement(text);
        element.className= "items attempted"; 
    });
    newElement.innerHTML= content;
    questionsContainer.appendChild(newElement);
}

var numOfQuestions = 20;
for(var i= 1; i<=numOfQuestions ; i++){
    questionDisplay(i);
}
