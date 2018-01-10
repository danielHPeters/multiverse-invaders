import Point from './Point'
import { Color } from './Line'
import Shape from './interfaces/Shape'

export default class Rectangle implements Shape {
  start: Point
  end: Point
  color: Color

  constructor (start: Point, end: Point, color = Color.BLACK) {
    this.start = start
    this.end = end
    this.color = color
  }

  /**
   * Draw this line on the canvas.
   *
   * @param {CanvasRenderingContext2D} context drawing context
   */
  render (context: CanvasRenderingContext2D): void {
    context.beginPath()
    context.rect(this.start.x, this.start.y, this.end.x - this.start.x, this.end.y - this.start.y)
    context.strokeStyle = this.color
    context.stroke()
  }
}
