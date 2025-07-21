const calculatorForm = document.getElementById('calculator');
const buttons = calculatorForm.querySelectorAll('input[type="button"]')

Array.from(buttons).forEach(button => {
    button.addEventListener('click', () => {
        const history = document.getElementById('history');
        const display = document.getElementById('display');
        let currentInput = display.value;

        if (button.value === '=') {

            if (/[+\-*/]$/.test(currentInput)) {
                currentInput = currentInput.slice(0, -1);
                display.value = currentInput;
            }
            try {
                display.value = eval(currentInput);
                history.value = currentInput + ' = ' + display.value;
            } catch (error) {
                display.value = 'Error';
                history.value = currentInput + ' = Error';
            }
            currentInput = '';
        }
        else if (button.value === 'C' || button.value === 'AC') {
            display.value = '';
            currentInput = '';
            if (button.value === 'AC') {
                history.value = '';
            }
        } else if (button.value === '⌫') {
            display.value = currentInput.slice(0, -1);
            currentInput = display.value;
        }
        else if (button.value === '%') {
            if (currentInput) {
                display.value = parseFloat(currentInput) / 100;
                currentInput = display.value;
            }
        }
        else {
            currentInput += button.value;
            display.value = currentInput;
        }
    });
});
