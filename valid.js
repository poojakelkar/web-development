const email = document.getElementById("email")
const pass =document.getElementById("pass")
const submit =document.getElementById("submit")
const output =document.getElementById("output")


function check(){
    
    if(pass.value){
        output.innerText = "please dont add username in password"
    }
    else{
        output.innerText = "submitted"
    }
}



submit.addEventListener("click",check)
