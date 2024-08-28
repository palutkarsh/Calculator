document.getElementById('darkMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});


const display = document.getElementById('initial-display');


function updateDisplay(value) {
    if (value === 'AC') {
        display.textContent = '';
    } else if (value === '⌫') {
        display.textContent = display.textContent.slice(0, -1);
    } else if (value === '=') {
        try {
            display.textContent = eval(display.textContent);
        } catch (error) {
            display.textContent = 'Error';
        }
    } else {
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