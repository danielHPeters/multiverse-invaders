import { Drawable } from '../interfaces/Drawable'
import { Vector2 } from '../../lib/vector/Vector2'
import { Pool } from '../structures/Pool'
import { Observer } from '../../lib/observer/Observer'
import { CollideAble, EntityType } from '../interfaces/CollideAble'
import { Actions } from '../../client/InputManager'
import { AssetManager, AssetType } from '../../client/AssetManager'

/**
 *
 */
export class Ship implements Drawable, Observer, CollideAble {
  position: Vector2
  speed: number
  acceleration: Vector2
  width: number
  height: number
  canvasWidth: number
  canvasHeight: number
  context: any
  sprite: any
  pool: Pool
  counter: number
  collidesWith
  type: EntityType
  colliding: boolean
  velocity: Vector2
  state
  maxTop: number
  startPosition
  settings
  assetManager: AssetManager

  /**
   *
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   * @param {number} canvasWidth
   * @param {number} canvasHeight
   * @param context
   * @param {AssetManager} assetManager
   * @param {Pool} pool
   * @param settings
   */
  constructor (x: number, y: number, width: number, height: number, canvasWidth: number, canvasHeight: number, context: any, assetManager: AssetManager, pool: Pool, settings) {
    this.position = new Vector2(x, y)
    this.startPosition = new Vector2(x, y)
    this.acceleration = new Vector2(0, 0)
    this.velocity = new Vector2(0, 0)
    this.width = width
    this.height = height
    this.canvasWidth = canvasWidth
    this.canvasHeight = canvasHeight
    this.context = context
    this.sprite = assetManager.getSprite(EntityType.PLAYER)
    this.type = EntityType.PLAYER
    this.pool = pool
    this.counter = 0
    this.collidesWith = []
    this.collidesWith.push(EntityType.ENEMY_BULLET)
    this.colliding = false
    this.state = {}
    this.settings = settings
    this.maxTop = Math.floor(this.canvasHeight / 4 * 3)
    this.assetManager = assetManager
  }

  reset (): void {
    this.position.setVector(this.startPosition)
    this.velocity.set(0, 0)
    this.colliding = false
  }

  /**
   *
   */
  move (): void {
    if (!this.colliding) {
      this.counter++
      this.context.clearRect(Math.floor(this.position.x), Math.floor(this.position.y), this.width, this.height)
      this.acceleration.set(0, 0)
      if (this.state[Actions.LEFT]) {
        this.acceleration.add(-this.settings.acceleration, 0)
      }
      if (this.state[Actions.RIGHT]) {
        this.acceleration.add(this.settings.acceleration, 0)
      }
      if (this.state[Actions.UP]) {
        this.acceleration.add(0, -this.settings.acceleration)
      }
      if (this.state[Actions.DOWN]) {
        this.acceleration.add(0, this.settings.acceleration)
      }
      this.velocity.multiply(this.settings.friction)
      this.velocity.addVector(this.acceleration)
      this.velocity.limit(this.settings.maxVelocity)
      this.position.addVector(this.velocity)
      if (this.position.x <= 0) {
        this.position.x = 0
        this.velocity.x += -1
      }
      if (this.position.x >= this.canvasWidth - this.width) {
        this.position.x = this.canvasWidth - this.width
      }
      if (this.position.y <= this.maxTop) {
        this.position.y = this.maxTop
      }
      if (this.position.y >= this.canvasHeight - this.height) {
        this.position.y = this.canvasHeight - this.height
      }

      // Finish by redrawing the ship
      this.draw()

      if (this.state[Actions.SHOOT] && this.counter >= this.settings.fireDelay && !this.colliding) {
        this.fire()
        this.counter = 0
      }
    }
  }

  alive (): boolean {
    return !this.colliding
  }

  draw (): void {
    this.context.drawImage(this.sprite, Math.floor(this.position.x), Math.floor(this.position.y))
  }

  update (state: any): void {
    this.state = state
  }

  fire (): void {
    this.pool.getTwo(
      Math.floor(this.position.x) + 6, Math.floor(this.position.y), 3,
      Math.floor(this.position.x) + 33, Math.floor(this.position.y), 3
    )
    let laser = this.assetManager.getSound(EntityType.LASER, AssetType.AUDIO)
    laser.play()
  }

  /**
   *
   * @param {CollideAble} other
   * @returns {boolean}
   */
  isCollideAbleWith (other: CollideAble): boolean {
    return this.collidesWith.includes(other.type.toString())
  }
}
