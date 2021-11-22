var load = document.getElementById("loader");

var submit = document.getElementById("click");

function loading() {
    

    if (load.style.display !== "none") {
        load.style.display = "none";
    } else {
        load.style.display = "block";
    }
}

submit.addEventListener("click", loading);
