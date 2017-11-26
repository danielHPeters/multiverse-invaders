import { Drawable } from '../interfaces/Drawable'
import { Vector2 } from '../../lib/vector/Vector2'
import { Pool } from '../structures/Pool'
import { Observer } from '../../lib/Observer'
import { CollideAble } from '../interfaces/CollideAble'

/**
 *
 */
export class Ship implements Drawable, Observer, CollideAble {
  position: Vector2
  speed: number
  width: number
  height: number
  canvasWidth: number
  canvasHeight: number
  context: any
  sprite: any
  pool: Pool
  fireRate: number
  counter: number
  collidesWith
  type: string
  colliding: boolean
  velocity: Vector2
  friction: number
  state
  maxTop: number
  startPosition

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
   * @param {Pool} pool
   */
  constructor (x: number, y: number, width: number, height: number, canvasWidth: number, canvasHeight: number, speed: number, context: any, sprite: any, pool: Pool) {
    this.position = new Vector2(x, y)
    this.velocity = new Vector2(0, 0)
    this.speed = speed
    this.width = width
    this.height = height
    this.canvasWidth = canvasWidth
    this.canvasHeight = canvasHeight
    this.context = context
    this.sprite = sprite
    this.type = 'ship'
    this.pool = pool
    this.fireRate = 15
    this.counter = 0
    this.collidesWith = []
    this.collidesWith.push('bulletEnemy')
    this.colliding = false
    this.friction = 0.6
    this.state = {}
    this.maxTop = Math.floor(this.canvasHeight / 4 * 3)
    this.startPosition = new Vector2(x, y)
  }

  reset () {
    this.position.setVector(this.startPosition)
    this.velocity.set(0, 0)
    this.colliding = false
  }

  /**
   *
   */
  move (): void {
    this.counter++
    if (this.state['a'] || this.state['d'] || this.state['w'] || this.state['s']) {
      this.context.clearRect(Math.floor(this.position.x), Math.floor(this.position.y), this.width, this.height)
      if (this.state['a']) {
        if (this.velocity.x > -this.speed) {
          this.velocity.x--
        }
        // this.position.x -= this.speed
      }
      if (this.state['d']) {
        if (this.velocity.x < this.speed) {
          this.velocity.x++
        }
        // this.position.x += this.speed
      }
      if (this.state['w']) {
        if (this.velocity.y > -this.speed) {
          this.velocity.y--
        }
        // this.position.y -= this.speed
      }
      if (this.state['s']) {
        if (this.velocity.y < this.speed) {
          this.velocity.y++
        }
        // this.position.y += this.speed
      }
      this.velocity.multiply(this.friction)
      this.position.add(this.velocity)
      if (this.position.x <= 0) {
        this.position.x = 0
        this.velocity.x *= -1
      }
      if (this.position.x >= this.canvasWidth - this.width) {
        this.position.x = this.canvasWidth - this.width
        this.velocity.x *= -1
      }
      if (this.position.y <= this.maxTop) {
        this.position.y = this.maxTop
        this.velocity.y *= -1
      }
      if (this.position.y >= this.canvasHeight - this.height) {
        this.position.y = this.canvasHeight - this.height
        this.velocity.y *= -1
      }

      // Finish by redrawing the ship
      if (!this.colliding) {
        this.draw()
      }
    }
    if (this.state[' '] && this.counter >= this.fireRate && !this.colliding) {
      this.fire()
      this.counter = 0
    }
  }

  alive () {
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
  }

  /**
   *
   * @param {CollideAble} other
   * @returns {boolean}
   */
  isCollideAbleWith (other: CollideAble): boolean {
    return this.collidesWith.includes(other.type)
  }
}
