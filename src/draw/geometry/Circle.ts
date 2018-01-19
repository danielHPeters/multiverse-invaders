import Shape, { Color } from '../interfaces/Shape'
import Point from '../../lib/vector/Point'

/**
 * Circle shape to be drawn on a canvas.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Circle implements Shape {
  start: Point
  end: Point
  color: Color
  fill: boolean

  /**
   * Default constructor.
   *
   * @param {Point} start Starting point of this shape
   * @param {Point} end Ending point of this shape
   * @param {Color} color The color of this shape
   * @param {boolean} fill Flag determining whether this shape should be filled
   */
  constructor (start: Point, end: Point, color: Color, fill: boolean) {
    this.start = start
    this.end = end
    this.color = color
    this.fill = fill
  }

  /**
   * Draws the circle on a canvas.
   *
   * @param {CanvasRenderingContext2D} context Canvas rendering context
   */
  render (context: CanvasRenderingContext2D): void {
    const radius = Math.abs(this.end.x - this.start.x)
    if (radius !== 0) {
      context.beginPath()
      context.strokeStyle = this.color
      context.arc(this.start.x, this.start.y, radius, 0, Math.PI * 2, true)
      if (this.fill) {
        context.fillStyle = this.color
        context.fill()
      } else {
        context.stroke()
      }
    }
  }
}