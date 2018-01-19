import PostFixCalculator from './PostFixCalculator'
import MatrixFactory from '../../math/MatrixFactory'

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

const matrix = MatrixFactory.createMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12]
])

const matrix2 = MatrixFactory.createMatrix([
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [13, 14, 15]
])

const matrix3 = MatrixFactory.createMatrix([
  [4, 5, 6, 2],
  [7, 8, 9, 2],
  [10, 11, 12, 2]
])

const m = matrix.clone()
m.add(matrix2)
console.log(m)
console.log(matrix2)

// matrix.multScalar(2)
console.log(matrix)

console.log(matrix.multiply(matrix3).mArray)
