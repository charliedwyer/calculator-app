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
    return a / b;
}

let numberOne = '';
let numberTwo = '';
let operator = '';
let displayVal = '';

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

function getResult() {
    let ans;
    numberTwo = displayVal;
    console.log(numberTwo);

    ans = operate(numberOne, numberTwo, operator);

    displayVal = ans.toString();
    document.getElementById('result').value = displayVal;
    numberOne = '';
    operator = '';

}

function appendToDisplay(value) {
    displayVal += value;//adds value to display value
    document.getElementById('result').value = displayVal;//updates the display
};

function clearResult() {
    displayVal = '' //reset display val
    document.getElementById('result').value = '' //clear display
    numberOne = ''; //reset variables
    operator = '';
    numberTwo = '';
};

function getOperator(selectedOperator) {
    numberOne = displayVal;
    operator = selectedOperator;
    displayVal = '';
};

