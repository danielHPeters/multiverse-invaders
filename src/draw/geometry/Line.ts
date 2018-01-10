import Point from './Point'
import Shape from '../interfaces/Shape'

export enum Color {
  RED = '#FF0000',
  GREEN = '#00FF00',
  BLUE = '#0000FF',
  YELLOW = '#FFFF00',
  BLACK = '#000000'
}

export const VALID_COLOR = '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$'

export default class Line implements Shape {
  start: Point
  end: Point
  color: Color
  fill: boolean

  /**
   * Default constructor.
   *
   * @param {Point} start tool start location
   * @param {Point} end tool release location
   * @param {Color} color stroke color
   */
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
    context.strokeStyle = this.color
    context.moveTo(this.start.x, this.start.y)
    context.lineTo(this.end.x, this.end.y)
    context.stroke()
  }
}
