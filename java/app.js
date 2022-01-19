const buttons = document.querySelectorAll('button');
const input = document.querySelector('#input');
const resultDiv = document.querySelector('#resultt');

Array.from(buttons).forEach(button => {
    button.addEventListener('click', e => {
        console.log(button.innerText);
        
        if (button.innerText == '=') {
            const result = input.value.split('+').reduce((a, b) => parseInt(a) + parseInt(b), 0);
            resultDiv.innerText = '=' + result;
            console.log(result);
            
            console.log(input.value.split('+'));
        }
        else if(button.innerText == 'C'){
            input.value = '';
            resultDiv.innerText = '';
        }
        else{
            input.value += button.innerText;
        }
    });
    
});