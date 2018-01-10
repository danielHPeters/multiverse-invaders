import Point from './Point'
import { Color } from './Line'
import Shape from './interfaces/Shape'

export default class Rectangle implements Shape {
  start: Point
  end: Point
  color: Color
  fill: boolean

  constructor (start: Point, end: Point, color: Color, fill: boolean) {
    this.start = start
    this.end = end
    this.color = color
    this.fill = fill
  }

  /**
   * Draw this line on the canvas.
   *
   * @param {CanvasRenderingContext2D} context drawing context
   */
  render (context: CanvasRenderingContext2D): void {
    context.beginPath()
    context.rect(this.start.x, this.start.y, this.end.x - this.start.x, this.end.y - this.start.y)
    if (this.fill) {
      context.fillStyle = this.color
      context.fill()
    } else {
      context.strokeStyle = this.color
      context.stroke()
    }
  }
}
