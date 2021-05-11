function changeText(text){
    var display = document.getElementByClass('ques');
    display.innerHTML = "";
    display.innerHTML = text;
}
              
function defaultText(){
    var display = document.getElementByclass('ques');
    display.innerHTML = "";
    display.innerHTML = "What would you like to do?";
}

var container = document.getElementByClass('container1');

container.addEventListener("click", defaultText());