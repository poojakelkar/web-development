const colors= document.getElementById("showColors")
const list  = document.getElementById("colors")


const arr = ['blue', 'green', 'yellow', 'red']


function showColours(){
    for(let i=0;i<arr.length;i++){
        list.innerHTML += '<li style= "background:' +arr[i] +'">' + arr[i] +'</li>'
    }
}

colors.addEventListener('click',showColours)