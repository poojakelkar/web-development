var submitBtn = document.getElementById("")


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
        console.log(person1.name+person1.age+"Is greater age")
    }
    else{
        console.log(person2.name+person2.age+"Is greater age")
    }
}

age()