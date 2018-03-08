import Vector2 from '../lib/math/Vector2'
import ICollideAble, { EntityType } from '../lib/interfaces/ICollideAble'
import Entity from '../lib/entity/Entity'
import Settings from '../config/Settings'
import IRenderable from '../lib/interfaces/IRenderable'
import IMovable from '../lib/interfaces/IMovable'
import Dimension from '../lib/geometry/Dimension'
import { ContextId } from '../enum/ContextId'

/**
 *
 */
export default class Bullet extends Entity implements IRenderable, IMovable, ICollideAble {
  contextId: ContextId
  velocity: Vector2
  acceleration: Vector2
  speed: number
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
   * @param {number} speed
   * @param {any} sprite
   * @param {string} type
   * @param settings
   */
  constructor (x: number, y: number, width: number, height: number, speed: number, sprite: any, type: EntityType, settings: Settings) {
    super(new Vector2(x, y), new Dimension(width, height), settings)
    this.speed = speed
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
    this.settings = settings
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

  move (dt: number): void {
    this.position.y -= this.speed
  }

  clear (ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(this.position.x - 1, this.position.y - 1, this.dimension.width + 1, this.dimension.height + 1)
  }

  /**
   *
   */
  render (ctx: CanvasRenderingContext2D): void {
    /* if (this.type === EntityType.PLAYER_BULLET && this.position.y <= 0 - this.dimension.height) {
    } else if (this.type === EntityType.ENEMY_BULLET && this.position.y >= this.settings.gameSize.height) {
    } else { }*/
    ctx.drawImage(this.sprite, this.position.x, this.position.y)
  }

  reset (): void {
    this.position.set(0, 0)
    this.speed = 0
    this.alive = false
    this.colliding = false
  }

  isCollideAbleWith (other: ICollideAble): boolean {
    return this.collidesWith.includes(other.type.toString())
  }
}
