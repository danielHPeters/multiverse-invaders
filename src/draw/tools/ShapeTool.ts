import Point from '../geometry/Point'
import Settings from '../config/Settings'
import Tool from '../interfaces/Tool'
import Shape from '../interfaces/Shape'
import ShapeFactory from '../factory/ShapeFactory'

export default class ShapeTool implements Tool {
  start: Point
  end: Point
  shapes: Shape[]
  tempShape: Shape
  settings: Settings
  down: boolean

  constructor (settings: Settings) {
    this.start = new Point(0, 0)
    this.end = new Point(0, 0)
    this.shapes = settings.history
    this.settings = settings
    this.tempShape = ShapeFactory.create(this.settings.activeTool, this.start, this.end, this.settings.activeColor, this.settings.fill)
    this.down = false
  }

  click (event): void {
    this.down = true
    this.start.set(event.clientX, event.clientY - this.settings.menuHeight)
  }

  move (event): void {
    if (!this.down) return
    this.tempShape = ShapeFactory.create(this.settings.activeTool, this.start, this.end, this.settings.activeColor, this.settings.fill)
    this.tempShape.end.set(event.clientX, event.clientY - this.settings.menuHeight)
  }

  release (event): void {
    this.end.set(event.clientX, event.clientY - this.settings.menuHeight)
    this.shapes.push(ShapeFactory.create(this.settings.activeTool, this.start.clone(), this.end.clone(), this.settings.activeColor, this.settings.fill))
    this.down = false
  }

  renderAll (context): void {
    this.shapes.forEach(line => line.render(context))
  }

  undo (context: CanvasRenderingContext2D, width: number, height: number): void {
    if (this.shapes.length > 0) {
      context.clearRect(0, 0, width, height)
      this.tempShape.start.set(0, 0)
      this.tempShape.end.set(0, 0)
      this.shapes.pop()
      this.renderAll(context)
    }
  }
}
