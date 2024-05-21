let num1 = prompt("Enter the first Number: ");
let num2 =  prompt("Enter the second Number: ");

let num3;
let num4;

num3 = parseInt(num1);
num4 = parseInt(num2);


let result = document.getElementById("answer");


document.getElementById("val1").textContent = num1;
document.getElementById("val2").textContent = num2;


function add() {

    let answer = num3 + num4;
    result.textContent = "Sum: " + answer;

}

function subtract() {

    let answer = num3 - num4;
    result.textContent = "Sum: " + answer;

}

function multiply() {

    let answer = num3 * num4;
    result.textContent = "Sum: " + answer;

}

function divide() {

    let answer = num3 / num4;
    result.textContent = "Sum: " + answer;

}


function erase() {

    result.textContent = "Sum:";
    console.log("clicked")
}