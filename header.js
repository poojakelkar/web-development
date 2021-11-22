var inputTag = document.getElementById("heading");
var h1 = document.getElementById("h1");
var h2 = document.getElementById("h2");
var h3 = document.getElementById("h3");
var output = document.getElementById("outputDisplay");

function inputChange(event) {
    output.innerText = event.target.value;
}

function converth1() {
    output.style.fontSize = '30px'
}

function converth2() {
    output.style.fontSize = '24px'
}

function converth3() {
    output.style.fontSize = '16px'
}


inputTag.addEventListener('change',inputChange)
h1.addEventListener("click", converth1);
h2.addEventListener("click", converth2);
h3.addEventListener("click", converth3);
