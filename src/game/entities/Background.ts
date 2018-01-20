import Drawable from '../interfaces/Drawable'
import Vector2 from '../../lib/math/Vector2'
import { EntityType } from '../interfaces/CollideAble'

export default class Background implements Drawable {
  position: Vector2
  speed: number
  width: number
  height: number
  canvasWidth: number
  canvasHeight: number
  context: any
  type: EntityType
  sprite: any

  /**
   *
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   * @param {any} context
   * @param {any} sprite
   */
  constructor (x: number, y: number, width: number, height: number, context: any, sprite: any) {
    this.position = new Vector2(x, y)
    this.speed = 1
    this.width = width
    this.height = height
    this.canvasWidth = width
    this.canvasHeight = height
    this.context = context
    this.sprite = sprite
    this.type = EntityType.BACKGROUND
  }

  reset (): void {
    this.position.set(0, 0)
  }

  /**
   *
   */
  draw (): void {
    this.position.y += this.speed
    this.context.drawImage(this.sprite, this.position.x, this.position.y)
    this.context.drawImage(this.sprite, this.position.x, this.position.y - this.height)

    if (this.position.y >= this.height) {
      this.position.y = 0
    }
  }
}
