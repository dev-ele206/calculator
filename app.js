//display variable to display numbers for the calculator
let display = document.getElementById('display');
//array function to create an array for the value of each button
let buttons = Array.from(document.getElementsByClassName('button'));


//map function to change each button to an array
buttons.map(button => {
    button.addEventListener('click',(e) => {
        switch(e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case '⇚':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0,1);
                }
            case '=':
                display.innerText = Function('return ' + display.innerText)();
                break;
            default:
                display.innerText += e.target.innerText;
        }
    })
});
