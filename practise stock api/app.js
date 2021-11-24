const getBtn = document.getElementById('getdata')
const output = document.getElementById('output')

getBtn.addEventListener('click', function () {
  fetch('https:stocklist.aliamaan.repl.co/stocks')
    .then(function (res) {
      return res.json()
    })
    .then(function (res) {
      let listTag = ''
      const dataArr = res.data
      for (let i = 0; i < dataArr.length; i++) {
        listTag += '<li>' + dataArr[i].id + ' - ' + dataArr[i].name + '</li>'
      }
      output.innerHTML = listTag
    })
})


