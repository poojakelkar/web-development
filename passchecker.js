var email = document.getElementById('email')
var password = document.getElementById('pass')
var btn = document.getElementById('submit')
var msg = document.getElementById('message')


function check(){
    if(password.length>=10 && !password.value.includes(email.value)){
        msg.innerText = "Done"
    }
    else{
        msg.innerText = "Password length is to short and don not enter username"
    }
   
}

btn.addEventListener('click', check)