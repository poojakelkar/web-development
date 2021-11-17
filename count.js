var num = document.getElementById("count");
var add = document.getElementById("add");
var sub = document.getElementById("sub");

var count = 0

function addcount() {
            count = count+1
            num.innerText= count
    
}

function subcount() {
   count = count -1
   num.innerText = count
}

add.addEventListener("click", addcount);
sub.addEventListener("click", subcount);
