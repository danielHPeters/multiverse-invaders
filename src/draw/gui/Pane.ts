import Pen from '../tools/Pen'
import { Vector2 } from '../../lib/vector/Vector2'
import Mouse from '../Mouse'

export default class Pane {
  menuBar: HTMLElement
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  pen: Pen
  mouse: Mouse
  mousePosition: Vector2

  constructor (canvas: HTMLCanvasElement, menuBar: HTMLElement) {
    this.menuBar = menuBar
    this.canvas = canvas
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight - this.menuBar.offsetHeight
    this.context = canvas.getContext('2d')
    this.pen = new Pen(10, 0.5)
    this.mousePosition = new Vector2(0, 0)
    this.mouse = new Mouse(this.menuBar.offsetHeight)
  }

  init (): void {
    this.canvas.addEventListener('mousedown', event => this.mouse.click(event))
    this.canvas.addEventListener('mousemove', event => {
      this.mouse.move(event)
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.drawAllLines()
      this.mouse.tempLine.render(this.context)
    })
    this.canvas.addEventListener('mouseup', event => {
      this.mouse.release(event)
      this.drawAllLines()
    })
  }

  drawAllLines (): void {
    this.mouse.lines.forEach(line => line.render(this.context))
  }
}
