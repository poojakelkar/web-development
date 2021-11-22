const input = document.getElementById('input')
const redbtn = document.getElementById('red-btn')
const greenbtn = document.getElementById('green-btn')
const bluebtn = document.getElementById('blue-btn')
const output = document.getElementById('output')

input.addEventListener('change', function (event) {
  output.innerText = event.target.value
})

redbtn.addEventListener('click', function () {
  output.style.color = 'red'
})
greenbtn.addEventListener('click', function () {
  output.style.color = 'green'
})
bluebtn.addEventListener('click', function () {
  output.style.color = 'blue'
})
