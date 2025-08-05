


let btns = document.querySelectorAll('button');

let input = document.querySelector('input');

for(let btn of btns){
    btn.addEventListener('click',function(event){
        let btnText = event.target.innerText;
        if(btnText == 'C'){
            input.value = '';
        }
        else if(btnText == '='){
            try{
                input.value = eval(input.value);
            }
            catch(e){
                input.value = "Error!!!"
            }
            
        }

        else{
            input.value += btnText;
        }

    })  
}










