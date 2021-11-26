var kilo = document.getElementById("km");
var submitbtn = document.getElementById("submit");
var meter = document.getElementById("output");

function convert() {
    var kilovalue = typeof parseInt(kilo.value);
    console.log(kilovalue);

    if ((kilovalue = Number)) {
        meter.innerHTML = "<h1>" + kilo.value * 1000 + "</h1>";
    } else {
        meter.innerHTML = "<h1>" + "please enter number " + "</h1>";
    }
}

submitbtn.addEventListener("click", convert);
