const btn = document.getElementById('btn')
const output = document.getElementById('output')

const person1 = {
  name: 'Ram',
  age: 20,
  power: 2500,
}
const person2 = {
  name: 'Krishna',
  age: 31,
  power: 2325,
}

function personWithMOrePower(per1, per2) {
  const power1 = per1.power + 35 * per1.name.length
  const power2 = per2.power + 35 * per2.name.length
  if (power1 > power2) {
    return per1
  } else {
    return per2
  }
}

btn.addEventListener('click', function () {
  const morePowerPer = personWithMOrePower(person1, person2)

  output.innerText = 'person with more power-' + morePowerPer.name
})
