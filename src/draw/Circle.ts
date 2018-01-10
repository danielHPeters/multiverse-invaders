import Shape from './interfaces/Shape'
import Point from './Point'
import { Color } from './Line'

export default class Circle implements Shape {
  start: Point
  end: Point
  color: Color

  constructor (start: Point, end: Point, color: Color) {
    this.start = start
    this.end = end
    this.color = color
  }

  render (context: CanvasRenderingContext2D): void {
    const radius = Math.abs(this.end.x - this.start.x)
    if (radius !== 0) {
      context.beginPath()
      context.strokeStyle = this.color
      context.arc(this.start.x, this.start.y, radius, 0, Math.PI * 2, true)
      context.stroke()
    }
  }
}
