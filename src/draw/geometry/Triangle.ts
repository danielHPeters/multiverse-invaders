import Shape from '../interfaces/Shape'
import { Color } from './Line'
import Point from './Point'

export default class Triangle implements Shape {
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

  render (context: CanvasRenderingContext2D): void {
    context.beginPath()
    context.strokeStyle = this.color
    context.fillStyle = this.color
    context.moveTo(this.start.x, this.start.y)
    context.lineTo(this.start.x, this.end.y)
    context.lineTo(this.end.x, this.start.y)
    if (this.fill) {
      context.fill()
    } else {
      context.stroke()
    }
  }

}
