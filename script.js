const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    return a / b;
}

let numberOne = '';
let numberTwo = '';
let operator = '';
let displayVal = '';

const operate = function (numberOne, numberTwo, operator) {
    let result;

    switch (operator) {
        case '+':
            result = add(numberOne, numberTwo);
            break;
        case '-':
            result = subtract(numberOne, numberTwo);
            break;
        case '*':
            result = multiply(numberOne, numberTwo);
            break;
        case '/':
            result = divide(numberOne, numberTwo);
            break;
        default:
            console.log("Invalid Input");
            return;
    };
    return result;
};

function appendToDisplay(value) {
    displayVal += value;//adds value to display value
    document.getElementById('result').value = displayVal;//updates the display
}

function clearResult() {
    displayVal = '' //reset display val
    document.getElementById('result').value = '' //clear display
    numberOne = ''; //reset variables
    operator = '';
    numberTwo = '';
}