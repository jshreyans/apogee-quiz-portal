var currentSelected = 0; 

// ------------------ Timer Code --------------------
var maxtime_min = 30;
var timer= document.getElementById("timer");
var minutesLeft = maxtime_min;
var secondsLeft = 0;
timer.innerHTML = `${minutesLeft} : ${secondsLeft}`;

// document.querySelector(".start-button").addEventListener("click", function() {
//     setInterval(function(){
//         if(secondsLeft == 0){
//             minutesLeft -= 1;
//             secondsLeft = 60;
//         }
//         secondsLeft-=1;
//         timer.innerHTML = `${minutesLeft} : ${secondsLeft}`;
//     },1000);
//     console.log("Timer called on click");
//     startquiz();
// });
// ---------------------------------------------------

function getText(element){
    var text = element.innerText;
    return text;
}
var isIndicatorSelected = false;
var indicatorSelected;
// window.addEventListener("click", function(){
//     if(isIndicatorSelected){
//         isIndicatorSelected= false;
//     }
// });
function getElement(text){
    var element= document.querySelector(".questions-container .questions:nth-child("+text+")");
    return element;
}
var indicatorList = document.querySelectorAll(".indicators");
function addBorder(indicator){
    indicator.className+= " indicator-border";
};
function removeBorder(indicator){
    indicator.className= "indicators";
};
function addClickEvent(indicator){
indicatorList[i].addEventListener("click",function(){
    if(isIndicatorSelected == false){
        isIndicatorSelected = true;
        addBorder(indicator);
        
        indicatorSelected= indicator.children[0].className;
        console.log(isIndicatorSelected);
        console.log(indicatorSelected);
    } else{
        isIndicatorSelected = false; 
        removeBorder(indicator);
        console.log(isIndicatorSelected);
        
        console.log(isIndicatorSelected);  
    }
 });
}
for(var i=0; i<indicatorList.length;i++){
    console.log(indicatorList[i]);
    addClickEvent(indicatorList[i]);
}
function questionDisplay(content){
    var newElement = document.createElement("div");
    newElement.className = "questions";
    var questionsContainer = document.getElementsByClassName("questions-container")[0];
    newElement.addEventListener("click", function(){
        var text =  getText(this);
        var element = getElement(text);
        console.log(isIndicatorSelected);
        console.log(indicatorSelected);
        if(isIndicatorSelected){
            if(indicatorSelected== "items attempted"){
                element.className= "items attempted";
            }
            else if(indicatorSelected== "items attempted"){
                element.className= "items attempted";
            }
            else if(indicatorSelected== "items not-attempted"){
                element.className= indicatorSelected;
            }
            else if(indicatorSelected== "items to-be-reviewed"){
                element.className= indicatorSelected;
            }
            else if(indicatorSelected== "items not-reviewed-yet"){
                element.className = indicatorSelected;
            }
            else{
                element.className = indicatorSelected;
            }
        }
    });
    newElement.innerHTML= content;
    questionsContainer.appendChild(newElement);
}
function addBorder(indicator){
    indicator.classList.toggle("indicator-border");
}

var numOfQuestions = 20;
for(var i= 1; i<=numOfQuestions ; i++){
    questionDisplay(i);
}

// document.querySelector(".start-button").addEventListener("click", function() {
//     document.querySelector(".instructions-page").style.display = "none";
// })

const nav = document.querySelector(".nav-menu");

document.querySelector(".ham").addEventListener("click", () => {nav.style.left = "0"});
document.querySelector("#close-nav").addEventListener("click", () => {nav.style.left = "-100%"});