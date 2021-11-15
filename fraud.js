var inputFromUser = document.getElementById('input')
var output = document.getElementById('news')
var submit = document.getElementById('submit')


function check(){
    if((inputFromUser.value==='facebook')||(inputFromUser.value==='instagram')||(inputFromUser.value==='telegram')){
        output.innerText = "dont believe in this appliations news"
    }
    else{
        output.innerText = "believe"
    }

}

submit.addEventListener('click',check)