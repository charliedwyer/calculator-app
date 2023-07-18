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
    if (b == 0) {
        document.getElementById('result').value = "ERROR CAN'T DIVIDE BY 0";
        return;
    }
    return a / b;
}

let numberOne = '';
let numberTwo = '';
let operator = '';
let displayVal = '';
let answer = '';

function getOperator(selectedOperator) {
    if (operator != '') {
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

function getResult() {
    
    numberTwo = displayVal;
    console.log(`numberTwo = ${numberTwo}`);
    console.log(`numberOne = ${numberOne}`);

    answer = operate(numberOne, numberTwo, operator);

    displayVal = answer.toString();
    document.getElementById('result').value = displayVal;
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
    answer = '';
};

const equals = document.querySelector('.equal');
equals.addEventListener('click', function() {
    operator = '';
});
