import { Vector2 } from '../../lib/vector/Vector2'
import LineTool from '../tools/ShapeTool'
import Settings from '../config/Settings'
import Tool from '../interfaces/Tool'

export default class Pane {
  menuBar: HTMLElement
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  tool: Tool
  mousePosition: Vector2
  settings

  constructor (canvas: HTMLCanvasElement, menuBar: HTMLElement, context: CanvasRenderingContext2D, tool: LineTool) {
    this.menuBar = menuBar
    this.canvas = canvas
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight - this.menuBar.offsetHeight
    this.context = context
    this.mousePosition = new Vector2(0, 0)
    this.tool = tool
  }

  init (): void {
    this.canvas.addEventListener('mousedown', event => this.tool.click(event))
    this.canvas.addEventListener('mousemove', event => {
      this.tool.move(event)
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.tool.renderAll(this.context)
      this.tool.tempShape.render(this.context)
    })
    this.canvas.addEventListener('mouseup', event => {
      this.tool.release(event)
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.tool.renderAll(this.context)
    })
  }
}
