const input = document.getElementById('input')
const submitBtn = document.getElementById('submit')
const output = document.getElementById('output')
const userName = document.getElementById('username')

submitBtn.addEventListener('click', function () {
  if (input.value.length >= '10' && !input.value.includes(userName.value)) {
    output.innerText = 'Password Valid'
  } else {
    output.innerText =
      'Password Invalid! Password must be 10 characters and Does not contain userName'
  }
})
