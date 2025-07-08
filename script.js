const display = document.querySelector('.display');

const numbers = document.querySelectorAll('.num')
const operators = document.querySelectorAll('.operator')
const clearBtn = document.querySelector(".clearBtn")
const equalBtn = document.querySelector(".equalBtn");

let result;

function calculate(){
    let str = display.textContent;
    let opIndex;
    let op;
    for (let i = 0; i < str.length; i++){
        if (str[i] === "+" || str[i] === "-" || str[i] === "*" || str[i] === "/"){
            opIndex = i;
            op = str[i];
            break;
        }
    }
    let firstOp = parseInt(str.substring(0,opIndex), 10);
    let secondOp = parseInt(str.substring(opIndex+1, str.length - 1), 10);

    console.log("Expression: " + firstOp + " " + op + " " + secondOp);

    if (op === "+"){
        result = firstOp + secondOp;
    } else if (op === "-"){
        result = firstOp - secondOp;
    } else if (op === "*"){
        result = firstOp * secondOp;
    } else if (op === "/"){
        result = firstOp / secondOp;
    }

    console.log("Result: " + result);
    display.textContent = result;
}

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        display.innerHTML += number.textContent;
    })
});

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        display.innerHTML += operator.textContent;
    })
})

clearBtn.addEventListener('click', () => {
    display.textContent = "";
})

equalBtn.addEventListener('click', calculate);
