// JavaScript functionality for a simple calculator

let currentInput = '';
let operator = null;
let firstOperand = null;

// Appends a number to the current input
function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

// Appends an operator and prepares for the next number
function appendOperator(op) {
    if (currentInput === '') return; // Ignore if no input
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else {
        calculate();
    }
    operator = op;
    currentInput = '';
}

// Calculates the result based on the operator
function calculate() {
    if (firstOperand === null || currentInput === '' || operator === null) return;
    let secondOperand = parseFloat(currentInput);
    let result;
    try {
        switch (operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                if (secondOperand === 0) throw new Error('Division by zero');
                result = firstOperand / secondOperand;
                break;
            default:
                throw new Error('Invalid operator');
        }
        currentInput = result;
        operator = null;
        firstOperand = null;
        updateDisplay();
    } catch (error) {
        alert(error.message);
        clearDisplay();
    }
}

// Clears the display and resets values
function clearDisplay() {
    currentInput = '';
    operator = null;
    firstOperand = null;
    updateDisplay();
}

// Deletes the last character in the display
function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

// Updates the calculator display (example function, implement as needed)
function updateDisplay() {
    document.getElementById('display').innerText = currentInput;
}