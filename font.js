const textEle = document.getElementById('change');
const inc = document.getElementById('add');
const dec = document.getElementById('sub');

let fontSize = 1

inc.addEventListener('click', function(){
  fontSize = fontSize + 1 
  textEle.style.fontSize = (fontSize*2)+'px'
})
dec.addEventListener('click', function(){
    fontSize = fontSize - 1 
  textEle.style.fontSize = (fontSize*2)+'px'
})

textEle.style.fontSize