import { Vector2 } from '../vector/Vector2'

export class HitBox {
  position: Vector2
  width: number
  height: number

  /**
   * Initializes position and dimension.
   * @param {number} x position x
   * @param {number} y position y
   * @param {number} width dimension width
   * @param {number} height dimension height
   */
  constructor (x, y, width, height) {
    this.position = new Vector2(x, y)
    this.width = width
    this.height = height
  }
}
