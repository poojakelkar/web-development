var submitBtn = document.getElementById("submit")
var display = document.getElementById("output")


var person1 = {
    name:'Ram',
    age: '25',
    yuga:'Treta'
}
var person2 = {
    name:'Krishna',
    age: '31',
    yuga:'Dwapar'
}

function age(){
    if(person1.age>person2.age){
        display.innerText = person1.name+person1.age+"Is greater age"
    }
    else{
        display.innerText = person2.name+person2.age+"Is greater age"
    }
}

submitBtn.addEventListener("click",age)