import Point from './Point'

export default class Line {
  start: Point
  end: Point

  /**
   * Default constructor.
   *
   * @param {Point} start mouse start location
   * @param {Point} end mouse release location
   */
  constructor (start: Point, end: Point) {
    this.start = start
    this.end = end
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
