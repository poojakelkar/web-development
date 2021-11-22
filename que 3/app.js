const input = document.getElementById('input')
const h1btn = document.getElementById('h1-btn')
const h2btn = document.getElementById('h2-btn')
const h3btn = document.getElementById('h3-btn')
const output = document.getElementById('out')

input.addEventListener('change', function (event) {
  output.innerText = event.target.value
})

h1btn.addEventListener('click', function () {
  output.style.fontSize = '32px'

})
h2btn.addEventListener('click', function () {
  output.style.fontSize = '24px'
})
h3btn.addEventListener('click', function () {
  output.style.fontSize = '16px'
})
