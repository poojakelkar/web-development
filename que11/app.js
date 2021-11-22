const password = document.getElementById('password')
const checkbtn = document.getElementById('checkbtn')
const output = document.getElementById('output')

checkbtn.addEventListener('click', function () {
  if (password.value.length > 10) {
    output.innerText = 'Success'
    output.style.color = 'green'
    password.style.borderColor = 'green'
  } else {
    output.innerText = 'fail'
    output.style.color = 'red'
    password.style.borderColor = 'red'
  }
})
