// const submit = document.getElementById('submit')
// const output = document.getElementById('output')
// const currentPrice = document.getElementById('currentPrice')
// const initialPrice = document.getElementById('price')

// submit.addEventListener('click', function () {
//   const currentValue = Number(currentPrice.value)
//   const startingPrice = Number(initialPrice.value)
//   if (currentValue > startingPrice) {
//     const diffPrice = currentValue - startingPrice
//     const percentage = (diffPrice / startingPrice) * 100
//     output.innerHTML = 'You have gained profit with ' + percentage + '%'
//   } else {
//     const diffPrice = startingPrice - currentValue
//     const percentage = (diffPrice / startingPrice) * 100
//     output.innerHTML = 'You have made a loss with ' + percentage + '%'
//   }
// })

//fetch
//fonst size,color,
//password 10 chcr and username

const increaseBtn = document.getElementById('plus')
const decreaseBtn = document.getElementById('min')
const text = document.getElementById('text')

increaseBtn.addEventListener('click', function () {
  text.style.color = 'red'
})

decreaseBtn.addEventListener('click', function () {
  text.style.color = 'blue'
})
