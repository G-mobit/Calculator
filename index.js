/*hey = "hey! how are you ?";
fine = "oh! good";
you="good like you";
oh="How can i help you";
nothanks="okkkk !";
name="My name!";
yes="Devs gpt";
age="24"*/
let input =document.getElementById('input-box')
;
let buttons =document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(buttons =>{
    buttons.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;

        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;

        }
        else if
            (e.target.innerHTML == 'DEL'){
        string =string.substring(0, string.
            length-1);
            input.value = string;

            }
        
        else{
        string += e.target.innerHTML;
        input.value = string;
        }
    document.addEventListener(
    'keydown', function(event) {
        if(event.key ===  'eq') {
            calculate();
        }
    }

    )
    })
})
