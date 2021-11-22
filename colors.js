var input = document.getElementById("change")
var output = document.getElementById("output")
var red = document.getElementById("red1")
var blue = document.getElementById("blue2")
var green = document.getElementById("green3")

function Changing(event){
    output.innerText = event.target.value
}

function redColor(){
    output.style.color = "red"
}
function blueColor(){
    output.style.color = "blue"
}
function greenColor(){
    output.style.color = "green"
}



input.addEventListener("change",Changing)

red.addEventListener('click', redColor)
blue.addEventListener('click', blueColor)
green.addEventListener('click', greenColor)