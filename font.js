var added = document.getElementById("add");
var substracted = document.getElementById("sub");

function adding() {
    txt = document.getElementById("change");
    style = window.getComputedStyle(txt, null).getPropertyValue("font-size");
    currentSize = parseFloat(style);
    txt.style.fontSize = currentSize + 2 + "px";
}

function substract() {
    txt = document.getElementById("change");
    style = window.getComputedStyle(txt, null).getPropertyValue("font-size");
    currentSize = parseFloat(style);
    txt.style.fontSize = currentSize - 2 + "px";

    //   document.getElementById('change'). style. fontSize = "0rem"
}

added.addEventListener("click", adding);
substracted.addEventListener("click", substract);
