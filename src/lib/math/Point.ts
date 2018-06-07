/**
 * Class Representing a Coordinate (x|y) on the canvas.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Point {
  x: number
  y: number

  /**
   * Default constructor.
   *
   * @param x Initializes x value of this point
   * @param y Initializes y value of this point
   */
  constructor (x: number, y: number) {
    this.x = x
    this.y = y
  }

  /**
   * Set both x and y values.
   *
   * @param x X-axis value
   * @param y Y-axis value
   */
  set (x: number, y: number): void {
    this.x = x
    this.y = y
  }

  /**
   * Set the x and y values of this point to the values of another point.
   *
   * @param point Other point
   */
  setPoint (point: Point): void {
    this.x = point.x
    this.y = point.y
  }

  /**
   * Create a another Point object with the same value as this Point.
   *
   * @returns A clone of this point
   */
  clone (): Point {
    return new Point(this.x, this.y)
  }
}
