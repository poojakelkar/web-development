var userName = document.getElementById('name')
var output = document.getElementById('outputt')
var redColor = document.getElementById('red')
var blueColor = document.getElementById('blue')




function changeToRed(){
    output.innerText = userName.value
    output.style.color = 'red'
}

function changeToBlue(){
    output.innerText = userName.value
    output.style.color = 'Blue'

}



redColor.addEventListener("click",changeToRed)
blueColor.addEventListener("click",changeToBlue)
