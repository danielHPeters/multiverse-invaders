import Point from './Point'
export enum Color {
  RED = '#FF0000',
  GREEN = '#00FF00',
  BLUE = '#0000FF',
  YELLOW = '#FFFF00',
  BLACK = '#000000'
}

export default class Line {
  start: Point
  end: Point
  color: Color

  /**
   * Default constructor.
   *
   * @param {Point} start mouse start location
   * @param {Point} end mouse release location
   * @param {Color} color stroke color
   */
  constructor (start: Point, end: Point, color: Color) {
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
    context.moveTo(this.start.x, this.start.y)
    context.lineTo(this.end.x, this.end.y)
    context.stroke()
  }
}
