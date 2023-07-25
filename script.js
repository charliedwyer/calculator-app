const add = function (a, b) {
    return parseFloat(a) + parseFloat(b);
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    if (b == 0) { //prevents dividing by 0 to avoid crash
        return document.getElementById('result').value = "ERROR CAN'T DIVIDE BY 0";
        
    }
    return a / b;
}

let numberOne = '';
let numberTwo = '';
let operator = '';
let displayVal = '';
let answer = '';

function getOperator(selectedOperator) { //gets the inputted operator
    if (operator != '') { //checks to see if an operation needs to be preformed before getting next operator
        getResult();
        numberOne = answer;
        numberTwo = '';
    } else {
        numberOne = displayVal;
    }
    operator = selectedOperator;
    displayVal = '';
};

const operate = function (numOne, numTwo, op) {
    let result;

    switch (op) {
        case '+':
            result = add(numOne, numTwo);
            break;
        case '-':
            result = subtract(numOne, numTwo);
            break;
        case '*':
            result = multiply(numOne, numTwo);
            break;
        case '/':
            result = divide(numOne, numTwo);
            break;
        default:
            console.log("Invalid Input");
            return;
    };
    return result;
};

function getResult() { //gets the results and displays it on calculator
    
    numberTwo = displayVal;
    console.log(`numberTwo = ${numberTwo}`);
    console.log(`numberOne = ${numberOne}`);

    answer = operate(numberOne, numberTwo, operator);

    displayVal = answer.toString();
    document.getElementById('result').value = displayVal;
}

function appendToDisplay(value) {
    if (value === '.' && displayVal.includes('.')) { //only allows one decimal point in a number
        return;
    }
    displayVal += value;//adds value to display value
    document.getElementById('result').value = displayVal;//updates the display
};

function clearResult() {
    displayVal = '' //reset display val
    document.getElementById('result').value = '' //clear display
    numberOne = ''; //reset variables
    operator = '';
    answer = '';
};

const equals = document.querySelector('.equal');
equals.addEventListener('click', function() {
    operator = ''; // resets the operator once the equal sign is pressed
});
