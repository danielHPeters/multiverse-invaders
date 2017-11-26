import { Drawable } from '../interfaces/Drawable'
import { Vector2 } from '../../lib/vector/Vector2'
import { Pool } from '../structures/Pool'
import { CollideAble } from '../interfaces/CollideAble'
import { Game } from '../Game'

/**
 *
 */
export class Enemy implements Drawable, CollideAble {
  position: Vector2
  speed: number
  speedX: number
  speedY: number
  leftEdge: number
  rightEdge: number
  bottomEdge: number
  width: number
  height: number
  canvasWidth: number
  canvasHeight: number
  context: any
  sprite: any
  percentFire: number
  chance: number
  alive: boolean
  bulletPool: Pool
  collidesWith
  type: string
  colliding: boolean
  game: Game

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
   * @param {Pool} bulletPool
   * @param {Game} game
   */
  constructor (x: number, y: number, width: number, height: number, canvasWidth: number, canvasHeight: number, speed: number, context, sprite, type: string, bulletPool: Pool, game: Game) {
    this.position = new Vector2(x, y)
    this.width = width
    this.height = height
    this.canvasWidth = canvasWidth
    this.canvasHeight = canvasHeight
    this.speed = speed
    this.context = context
    this.sprite = sprite
    this.percentFire = 0.001
    this.chance = 0
    this.alive = false
    this.type = type
    this.collidesWith = []
    this.collidesWith.push('bullet')
    this.colliding = false
    this.bulletPool = bulletPool
    this.game = game
  }

  /**
   *
   * @param {number} x
   * @param {number} y
   * @param {number} speed
   */
  spawn (x: number, y: number, speed: number) {
    this.position.x = x
    this.position.y = y
    this.speed = speed
    this.speedX = 0
    this.speedY = speed
    this.alive = true
    this.leftEdge = this.position.x - 90
    this.rightEdge = this.position.x + 90
    this.bottomEdge = this.position.y + 140
  }

  /**
   *
   */
  draw () {
    this.context.clearRect(this.position.x - 1, this.position.y, this.width + 1, this.height)
    this.position.x += this.speedX
    this.position.y += this.speedY
    if (this.position.x <= this.leftEdge) {
      this.speedX = this.speed
    } else if (this.position.x >= this.rightEdge + this.width) {
      this.speedX = -this.speed
    } else if (this.position.y >= this.bottomEdge) {
      this.speed = 1.5
      this.speedY = 0
      this.position.y -= 5
      this.speedX = -this.speed
    }
    if (!this.colliding) {
      this.context.drawImage(this.sprite, this.position.x, this.position.y)
      // Enemy has a chance to shoot every movement
      this.chance = Math.floor(Math.random() * 101)
      if (this.chance / 100 < this.percentFire) {
        this.fire()
      }
      return false
    } else {
      this.game.scorePoints()
      return true
    }
  }

  /**
   *
   */
  fire (): void {
    this.bulletPool.get(Math.floor(this.position.x + this.width / 2), Math.floor(this.position.y + this.height), -2.5)
  }

  /**
   *
   */
  clear (): void {
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
   * @param {CollideAble} other
   */
  isCollideAbleWith (other: CollideAble): boolean {
    return this.collidesWith.includes(other.type)
  }
}
