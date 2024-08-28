// Toggle dark mode
document.getElementById('darkMode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

const display = document.getElementById('initial-display');

function updateDisplay(value) {
    // Handle clear all
    if (value === 'AC') {
        display.textContent = '';
    } 
    // Handle backspace
    else if (value === '⌫') {
        display.textContent = display.textContent.slice(0, -1);
    } 
    // Handle equals
    else if (value === '=') {
        try {
            // Only evaluate if the display has a valid expression
            if (display.textContent.trim() !== '') {
                display.textContent = eval(display.textContent);
            }
        } catch (error) {
            display.textContent = 'Error';
        }
    } 
    // Handle brackets
    else if (value === '()') {
        // Automatically handle opening and closing brackets
        const openBrackets = (display.textContent.match(/\(/g) || []).length;
        const closeBrackets = (display.textContent.match(/\)/g) || []).length;

        if (openBrackets <= closeBrackets) {
            display.textContent += '(';
        } else {
            display.textContent += ')';
        }
    } 
    // Handle decimal
    else if (value === '.') {
        const currentText = display.textContent;
        const lastNumber = currentText.split(/[\+\-\*\/\(\)]/).pop(); // Get the last number

        // Allow decimal only if there is no decimal point in the last number
        if (!lastNumber.includes('.')) {
            display.textContent += value;
        }
    } 
    // Handle other inputs
    else {
        display.textContent += value;
    }
}


const buttons = document.querySelectorAll('.keypad-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        updateDisplay(value);
    });
});
