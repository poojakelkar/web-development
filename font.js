var added = document.getElementById('add')
var substract = document.getElementById('sub')


function adding(){
  txt = document.getElementById('change');
  style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
  currentSize = parseFloat(style);
  txt.style.fontSize = (currentSize + 2) + 'px';
}



function sub(){
  txt = document.getElementById('change');
  style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
  currentSize = parseFloat(style);
  txt.style.fontSize = (currentSize - 2) + 'px';

//   document.getElementById('change'). style. fontSize = "0rem"
  }


added.addEventListener('click',adding)
substract.addEventListener('click',sub)
