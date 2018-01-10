import Shape from './interfaces/Shape'
import { Color } from './Line'
import Point from './Point'

export default class Triangle implements Shape {
  start: Point
  end: Point
  color: Color

  constructor (start: Point, end: Point, color = Color.BLACK) {
    this.start = start
    this.end = end
    this.color = color
  }

  render (context: CanvasRenderingContext2D): void {
    context.beginPath()
    context.strokeStyle = this.color
    context.moveTo(this.start.x, this.start.y)
    context.lineTo(this.start.x, this.end.y)
    context.lineTo(this.end.x, this.start.y)
    context.closePath()
    context.stroke()
  }

}
