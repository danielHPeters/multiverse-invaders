import { Drawable } from '../interfaces/Drawable'
import { Vector2 } from '../../lib/vector/Vector2'
import { CollideAble, EntityType } from '../interfaces/CollideAble'

/**
 *
 */
export class Bullet implements Drawable, CollideAble {
  position: Vector2
  speed: number
  width: number
  height: number
  canvasWidth: number
  canvasHeight: number
  context: any
  sprite: any
  alive: boolean
  collidesWith
  type: EntityType
  colliding: boolean

  /**
   *
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   * @param {number} canvasWidth
   * @param {number} canvasHeight
   * @param {number} speed
   * @param {any} context
   * @param {any} sprite
   * @param {string} type
   */
  constructor (x: number, y: number, width: number, height: number, canvasWidth: number, canvasHeight: number, speed: number, context: any, sprite: any, type: EntityType) {
    this.position = new Vector2(x, y)
    this.speed = speed
    this.width = width
    this.height = height
    this.canvasWidth = canvasWidth
    this.canvasHeight = canvasHeight
    this.context = context
    this.sprite = sprite
    this.alive = false
    this.type = type
    this.colliding = false
    this.collidesWith = []
    if (this.type === EntityType.PLAYER_BULLET) {
      this.collidesWith.push(EntityType.ENEMY)
    } else if (this.type === EntityType.ENEMY_BULLET) {
      this.collidesWith.push(EntityType.PLAYER)
    }
  }

  /**
   *
   * @param {number} x
   * @param {number} y
   * @param {number} speed
   */
  spawn (x: number, y: number, speed: number): void {
    this.position.set(x, y)
    this.speed = speed
    this.alive = true
  }

  /**
   *
   */
  draw () {
    this.context.clearRect(this.position.x - 1, this.position.y - 1, this.width + 1, this.height + 1)
    this.position.y -= this.speed
    if (this.colliding) {
      return true
    } else if (this.type === EntityType.PLAYER_BULLET && this.position.y <= 0 - this.height) {
      return true
    } else if (this.type === EntityType.ENEMY_BULLET && this.position.y >= this.canvasHeight) {
      return true
    } else {
      this.context.drawImage(this.sprite, this.position.x, this.position.y)
      return false
    }
  }

  clear (): void {
    this.position.set(0, 0)
    this.speed = 0
    this.alive = false
    this.colliding = false
  }

  isCollideAbleWith (other: CollideAble): boolean {
    return this.collidesWith.includes(other.type)
  }
}
