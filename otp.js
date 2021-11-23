var userName = document.getElementById("otp")
var submit = document.getElementById("submit")
var output = document.getElementById("outputValue")


submit.addEventListener('click',function (){
  fetch(
    'https://otpgenerator.ishanjirety.repl.co/get-otp/?name=' +userName.value
  )
  .then(function(res){
    return res.json()
  })
  .then(function(res){
    console.log(res)
    output.innerText = res.otp
  })

})