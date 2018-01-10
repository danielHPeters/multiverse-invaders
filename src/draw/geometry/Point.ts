export default class Point {
  x: number
  y: number

  /**
   * Default constructor.
   *
   * @param {number} x initializes x value of this point
   * @param {number} y initializes y value of this point
   */
  constructor (x: number, y: number) {
    this.x = x
    this.y = y
  }

  /**
   * Set both x and y values.
   *
   * @param {number} x
   * @param {number} y
   */
  public set (x: number, y: number): void {
    this.x = x
    this.y = y
  }

  /**
   * Set the x and y values of this point to the values of another point.
   *
   * @param {Point} point
   */
  public setPoint (point: Point): void {
    this.x = point.x
    this.y = point.y
  }

  public clone (): Point {
    return new Point(this.x, this.y)
  }
}
