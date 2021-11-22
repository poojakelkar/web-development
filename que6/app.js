const loadingbtn = document.getElementById('loading-btn')
const text = document.getElementById('text')

loadingbtn.addEventListener('click', function () {
  console.log('clicked')
  if (text.style.display !== 'none') {
    text.style.display = 'none'
  } else {
    text.style.display = 'block'
  }
})
