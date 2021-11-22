const userName = document.getElementById('username')
const otpoutput = document.getElementById('otp')
const fetchBtn = document.getElementById('fetch')

fetchBtn.addEventListener('click', function () {
  fetch(
    'https://otpgenerator.ishanjirety.repl.co/get-otp/?name=' + userName.value
  )
    .then(function (res) {
      return res.json()
    })
    .then(function (res) {
      console.log(res)
      otpoutput.innerText = res.otp
    })
})


