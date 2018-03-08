import Vector2 from '../lib/math/Vector2'
import Pool from './Pool'
import ICollideAble, { EntityType } from '../lib/interfaces/ICollideAble'
import SpaceGame from '../application/SpaceGame'
import Sound from '../lib/audio/Sound'
import Settings from '../config/Settings'
import IRenderable from '../lib/interfaces/IRenderable'
import IMovable from '../lib/interfaces/IMovable'
import Entity from '../lib/entity/Entity'
import Dimension from '../lib/geometry/Dimension'
import { ContextId } from '../enum/ContextId'

/**
 * Enemy ship class.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Enemy extends Entity implements IRenderable, IMovable, ICollideAble {
  contextId: ContextId
  velocity: Vector2
  acceleration: Vector2
  speed: number
  speedX: number
  speedY: number
  leftEdge: number
  rightEdge: number
  bottomEdge: number
  sprite: any
  percentFire: number
  chance: number
  alive: boolean
  bulletPool: Pool
  collidesWith
  type: EntityType
  colliding: boolean
  explosionSound: Sound

  /**
   *
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   * @param {number} speed
   * @param sprite
   * @param {EntityType} type
   * @param {Pool} bulletPool
   * @param {Settings} settings
   */
  constructor (x: number, y: number, width: number, height: number, speed: number, sprite, type: EntityType, bulletPool: Pool, settings: Settings) {
    super(new Vector2(x, y), new Dimension(width, height), settings)
    this.speed = speed
    this.sprite = sprite
    this.percentFire = 0.001
    this.chance = 0
    this.alive = false
    this.type = type
    this.collidesWith = []
    this.collidesWith.push(EntityType.PLAYER_BULLET)
    this.colliding = false
    this.bulletPool = bulletPool
  }

  /**
   *
   * @param {number} x
   * @param {number} y
   * @param {number} speed
   */
  spawn (x: number, y: number, speed: number): void {
    this.position.x = x
    this.position.y = y
    this.speed = speed
    this.speedX = 0
    this.speedY = speed
    this.alive = true
    this.leftEdge = this.position.x - 180
    this.rightEdge = this.position.x + 180
    this.bottomEdge = this.position.y + 280
  }

  clear (ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(this.position.x - 1, this.position.y, this.dimension.width + 1, this.dimension.height)
  }

  move (dt: number): void {
    if (!this.colliding) {
      this.position.x += this.speedX
      this.position.y += this.speedY
      if (this.position.x <= this.leftEdge) {
        this.speedX = this.speed
      } else if (this.position.x >= this.rightEdge + this.dimension.width) {
        this.speedX = -this.speed
      } else if (this.position.y >= this.bottomEdge) {
        this.speed = 1.5
        this.speedY = 0
        this.position.y -= 5
        this.speedX = -this.speed
      }
      this.chance = Math.floor(Math.random() * 101)
      if (this.chance / 100 < this.percentFire) {
        this.fire()
      }
    } else {
      // this.game.scorePoints()
    }
  }

  /**
   *
   */
  render (ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.sprite, this.position.x, this.position.y)
  }

  /**
   *
   */
  fire (): void {
    this.bulletPool.get(Math.floor(this.position.x + this.dimension.width / 2), Math.floor(this.position.y + this.dimension.height), -5)
  }

  /**
   *
   */
  reset (): void {
    this.position.x = 0
    this.position.y = 0
    this.speed = 0
    this.speedX = 0
    this.speedY = 0
    this.alive = false
    this.colliding = false
  }

  /**
   *
   * @param {ICollideAble} other
   */
  isCollideAbleWith (other: ICollideAble): boolean {
    return this.collidesWith.includes(other.type.toString())
  }
}
