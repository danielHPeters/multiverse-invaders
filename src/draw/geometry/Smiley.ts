import Shape from '../interfaces/Shape'
import Point from './Point'
import { Color } from './Line'

export default class Smiley implements Shape {
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
    const radius = Math.abs(this.end.x - this.start.x)
    context.beginPath()
    context.strokeStyle = this.color
    context.arc(this.start.x, this.start.y, radius, 0, Math.PI * 2, true) // Outer circle
    context.moveTo(this.start.x + (radius * 0.7), this.start.y)
    context.arc(this.start.x , this.start.y, radius * 0.7, 0, Math.PI, false)  // Mouth (clockwise)
    context.moveTo(this.start.x - (radius * 0.3) + radius * 0.2, this.start.y - (radius * 0.2))
    context.arc(this.start.x - (radius * 0.3), this.start.y - (radius * 0.2), radius * 0.2, 0, Math.PI * 2, false)  // Left eye
    context.moveTo(this.start.x + (radius * 0.3) + radius * 0.2, this.start.y - (radius * 0.2))
    context.arc(this.start.x + (radius * 0.3), this.start.y - (radius * 0.2), radius * 0.2, 0, Math.PI * 2, true)  // Right eye
    context.stroke()
  }
}
