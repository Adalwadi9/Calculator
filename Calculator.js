let outDisplay = document.querySelector("#outdisplay");

let displayOutput = "";

function btnclick(x) {
displayOutput += x;
outDisplay.textContent = displayOutput;
}

function btncancel() { //clear Display
displayOutput = "";
outDisplay.textContent = "";
}

function btnequal() { //run when = is clicked
let calResult = eval(displayOutput); //this javascript fn will evaluate multiple operands in express
displayOutput = calResult;
outDisplay.textContent = calResult; //display result
}
function sinclicked(){ //run when sin is clicked
outDisplay.textContent =Math.sin(displayOutput);
}
function cosclicked(){ //run when sin is clicked
outDisplay.textContent =Math.cos(displayOutput);
}
function tanclicked(){ //run when sin is clicked
outDisplay.textContent =Math.tan(displayOutput);
}