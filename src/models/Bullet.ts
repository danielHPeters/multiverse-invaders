import Vector2 from '../lib/math/Vector2'
import ICollideAble, { EntityType } from '../lib/interfaces/ICollideAble'
import Entity from '../lib/entity/Entity'
import Settings from '../config/Settings'
import IRenderable from '../lib/interfaces/IRenderable'
import IMovable from '../lib/interfaces/IMovable'
import Dimension from '../lib/geometry/Dimension'
import { ContextId } from '../enum/ContextId'
import ISpawnAble from '../lib/interfaces/ISpawnAble'

/**
 * Bullet class.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Bullet extends Entity implements IRenderable, IMovable, ICollideAble, ISpawnAble {
  contextId: ContextId
  speed: number
  sprite: any
  alive: boolean
  collidesWith
  type: EntityType
  colliding: boolean

  /**
   *
   * @param {number} width
   * @param {number} height
   * @param sprite
   * @param {EntityType} type
   * @param {Settings} settings
   */
  constructor (width: number, height: number, sprite: any, type: EntityType, settings: Settings) {
    super(new Vector2(0, 0), new Dimension(width, height), settings)
    this.speed = 0
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
    this.contextId = ContextId.MAIN
  }

  /**
   *
   */
  init (): void {
    this.position.set(0, 0)
    this.speed = 0
    this.alive = false
    this.colliding = false
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
  render (ctx: CanvasRenderingContext2D): void {
    if ((this.type === EntityType.PLAYER_BULLET && this.position.y <= 0 - this.dimension.height) ||
      (this.type === EntityType.ENEMY_BULLET && this.position.y >= this.settings.gameSize.height)) {
      this.alive = false
    } else {
      ctx.drawImage(this.sprite, this.position.x, this.position.y)
    }
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  clear (ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(this.position.x - 1, this.position.y - 1, this.dimension.width + 1, this.dimension.height + 1)
  }

  /**
   *
   * @param {number} dt
   */
  move (dt: number): void {
    if ((this.type === EntityType.PLAYER_BULLET && this.position.y <= 0 - this.dimension.height) ||
      (this.type === EntityType.ENEMY_BULLET && this.position.y >= this.settings.gameSize.height) ||
      this.colliding) {
      this.alive = false
      this.colliding = false
    } else {
      this.position.y -= Math.floor(this.speed * dt)
    }
  }

  /**
   *
   * @param {ICollideAble} other
   * @returns {boolean}
   */
  isCollideAbleWith (other: ICollideAble): boolean {
    return this.collidesWith.includes(other.type.toString())
  }
}
