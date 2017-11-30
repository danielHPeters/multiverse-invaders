import { Vector2 } from '../vector/Vector2'
import { Actions } from '../../client/InputManager'
import { Observer } from '../observer/Observer'
import { CollideAble, EntityType } from '../../game/interfaces/CollideAble'

export class Entity implements Observer, CollideAble {
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

  move (): void {
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
    } else {
      this.goBack()
    }
  }

  render (): void {
    this.context.clearRect(Math.floor(this.previousPosition.x), Math.floor(this.previousPosition.y), this.width, this.height)
    this.context.drawImage(this.sprite, Math.floor(this.position.x), Math.floor(this.position.y), this.sprite.width, this.sprite.height)
  }

  goBack (): void {
    let temp = this.position.clone()
    this.position.setVector(this.previousPosition)
    this.previousPosition.setVector(temp)
    this.colliding = false
  }

  update (state: any): void {
    this.state = state
  }

  isCollideAbleWith (other: CollideAble): boolean {
    return this.collidesWith.includes(other.type.toString())
  }
}
