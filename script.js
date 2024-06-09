let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonValue = e.target.innerHTML;
        if(buttonValue == '='){
            string = eval(string);
            input.value = string;
        }
        else if(buttonValue == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else if(buttonValue == 'AC'){
            string = string = '';
            input.value = string;
        }
        else{
            string += buttonValue;
            input.value = string;
        }
    })
})