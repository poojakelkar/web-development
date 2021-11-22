const btn = document.getElementById('btn')
const output = document.getElementById('output')

btn.addEventListener('click', function () {
  const moreAgePer = personWithMOreAge(person1, person2)

  output.innerText = 'person with more age-' + moreAgePer.name
})

const person1 = {
  name: 'Ram',
  age: 20,
  yuga: 'Treta',
}
const person2 = {
  name: 'Krishna',
  age: 31,
  yuga: 'Dwapar',
}

function personWithMOreAge(per1, per2) {
  if (per1.age > per2.age) {
    return per1
  } else {
    return per2
  }
}

const moreAgePer = personWithMOreAge(person1, person2)

console.log('person with more age-', moreAgePer.name)
