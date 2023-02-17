let str = "";
let buttons = document.querySelectorAll('button');
let output = document.getElementById('output-value');
let history = document.getElementById('history-value');


Array.from(buttons).forEach((button)=>{
   return button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            str = eval(str);
        output.innerHTML = str;
        history.innerText = str;
        }
        else if(e.target.innerHTML == "C"){
            str = "";
            output.innerHTML = str;
        }
       else if(e.target.innerHTML == "CE"){
            str = str.substring(0, str.length-1);
            output.innerHTML = str;
        }
        else{
            str = str + e.target.innerHTML;
            output.innerHTML = str;
        }
    })
})