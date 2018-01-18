import PostFixCalculator from './PostFixCalculator'

const calculator = document.getElementById('calculator')
const input = document.getElementById('expression') as HTMLInputElement

calculator.addEventListener('submit', ev => {
  ev.preventDefault()
  const resultBox = document.getElementById('result')
  resultBox.innerHTML = ''
  const expression = input.value
  resultBox.appendChild(document.createTextNode(PostFixCalculator.calculate(expression).toString()))
})

document.querySelectorAll('.math').forEach(key => {
  key.addEventListener('click', () => input.value += key.textContent)
})
