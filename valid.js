const email = document.getElementById("email")
const pass =document.getElementById("password")
const submit =document.getElementById("submit")
const output =document.getElementById("output")


function check(){
    
    if(pass.value.includes(email.value)){
        output.innerText = "please don't add username in password"
    }
    else{
        output.innerText = "submitted"
    }
}



submit.addEventListener("click",check)
