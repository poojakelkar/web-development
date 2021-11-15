var email = document.getElementById('email')
var password = document.getElementById('pass')
var btn = document.getElementById('submit')
var msg = document.getElementById('message')


function check(){
    if(password.length==10){
        msg.innerText = "Done"
    }
    else{
        msg.innerText = "Password length is to short"
    }
   
}

btn.addEventListener('click', check)