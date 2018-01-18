import PostFixCalculator from './PostFixCalculator'

const calculator = document.getElementById('calculator')

calculator.addEventListener('submit', ev => {
  ev.preventDefault()
  const resultBox = document.getElementById('result')
  resultBox.innerHTML = ''
  const input = document.getElementById('expression') as HTMLInputElement
  const expression = input.value
  resultBox.appendChild(document.createTextNode(PostFixCalculator.calculate(expression).toString()))
})
