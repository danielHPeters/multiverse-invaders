import Matrix from './matrix/Matrix'

document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('matrix') as HTMLCanvasElement
  let screen = window.screen
  let width = canvas.width = screen.width
  let height = screen.height
  let yPositions = Array(300).join('0').split('')
  let ctx = canvas.getContext('2d')
  let matrix = new Matrix(width, height, yPositions)

  matrix.run(ctx)
})
