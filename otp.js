var userName = document.getElementById("otp")
var submit = document.getElementById("submit")
var output = document.getElementById("output")


function response(){

fetch(
    'https://otpgenerator.ishanjirety.repl.co/get-otp/?name=' + userName.value
  )
    .then(function (res) {
      return res.json
    })
    .then(function (res) {
      console.log(res)
      output.innerText = res.otp
    })

}

submit.addEventListener('click',response)