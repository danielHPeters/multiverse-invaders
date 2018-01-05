import Matrix from './Matrix'

export default class GUI {
  private canvas: HTMLCanvasElement
  private context: CanvasRenderingContext2D
  private matrix: Matrix
  private yPositions

  constructor () {
    this.canvas = document.getElementById('matrix') as HTMLCanvasElement
    this.context = this.canvas.getContext('2d')
    this.matrix = new Matrix(this.canvas.width, this.canvas.height)
  }

  init (): void {
    this.setSize()
    window.addEventListener('resize', () => this.setSize())
    this.matrix.run(this.context)
  }

  setSize (): void {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
    this.yPositions = Array(window.innerWidth).join('0').split('')
    this.matrix.setSize(window.innerWidth, window.innerHeight, this.yPositions)
  }
}
