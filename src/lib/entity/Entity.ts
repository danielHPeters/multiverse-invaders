import Vector2 from '../math/Vector2'
import { Actions } from '../client/InputManager'
import Observer from '../observer/Observer'
import CollideAble, { EntityType } from '../../game/interfaces/CollideAble'
import Drawable from '../../game/interfaces/Drawable'

/**
 * Base entity class.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Entity implements Observer, CollideAble, Drawable {
  speed: number
  canvasWidth: number
  canvasHeight: number
  type: EntityType
  collidesWith
  colliding: boolean
  position: Vector2
  velocity: Vector2
  sprite
  context
  acceleration: Vector2
  state
  width
  height
  previousPosition: Vector2

  /**
   *
   * @param {number} x
   * @param {number} y
   * @param sprite
   * @param context
   */
  constructor (x: number, y: number, sprite, context) {
    this.position = new Vector2(x, y)
    this.velocity = new Vector2(1, 1)
    this.sprite = sprite
    this.context = context
    this.acceleration = new Vector2(0, 0)
    this.state = {}
    this.colliding = false
    this.type = EntityType.PLAYER
    this.collidesWith = []
    this.collidesWith.push(EntityType.BOX)
    this.width = sprite.width
    this.height = sprite.height
    this.previousPosition = new Vector2(x, y)
  }

  /**
   *
   * @param worldWidth
   * @param worldHeight
   */
  move (worldWidth, worldHeight): void {
    if (!this.colliding) {
      this.previousPosition.setVector(this.position)
      this.acceleration.set(0, 0)
      if (this.state[Actions.LEFT]) {
        this.acceleration.add(-3, 0)
      }
      if (this.state[Actions.RIGHT]) {
        this.acceleration.add(3, 0)
      }
      if (this.state[Actions.UP]) {
        this.acceleration.add(0, -3)
      }
      if (this.state[Actions.DOWN]) {
        this.acceleration.add(0, 3)
      }
      this.velocity.multiply(0.6)
      this.velocity.addVector(this.acceleration)
      this.velocity.limit(15)
      this.position.addVector(this.velocity)

      if (this.position.x - this.width / 2 < 0) {
        this.position.x = this.width / 2
      }
      if (this.position.y - this.height / 2 < 0) {
        this.position.y = this.height / 2
      }
      if (this.position.x + this.width / 2 > worldWidth) {
        this.position.x = worldWidth - this.width / 2
      }
      if (this.position.y + this.height / 2 > worldHeight) {
        this.position.y = worldHeight - this.height / 2
      }
    } else {
      this.goBack()
    }
  }

  /**
   *
   * @param {number} xView
   * @param {number} yView
   * @param {number} prevXView
   * @param {number} prevYView
   */
  draw (xView: number, yView: number, prevXView: number, prevYView: number): void {
    this.context.clearRect(
      (Math.floor(this.previousPosition.x) - this.width / 2) - prevXView,
      (Math.floor(this.previousPosition.y) - this.height / 2) - prevYView,
      this.width,
      this.height
    )
    this.context.drawImage(
      this.sprite,
      (Math.floor(this.position.x) - this.width / 2) - xView,
      (Math.floor(this.position.y) - this.height / 2) - yView,
      this.width,
      this.height
    )
  }

  /**
   *
   */
  goBack (): void {
    let temp = this.position.clone()
    this.position.setVector(this.previousPosition)
    this.previousPosition.setVector(temp)
    this.colliding = false
  }

  /**
   *
   * @param state
   */
  update (state: any): void {
    this.state = state
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
