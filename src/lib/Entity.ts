import { Vector2 } from './vector/Vector2'
import { Actions } from '../client/InputManager'
import { Observer } from './Observer'

export class Entity implements Observer {
  position: Vector2
  velocity: Vector2
  sprite
  context
  acceleration: Vector2
  state

  constructor (x: number, y: number, sprite, context) {
    this.position = new Vector2(x, y)
    this.velocity = new Vector2(1, 1)
    this.sprite = sprite
    this.context = context
    this.acceleration = new Vector2(0, 0)
    this.state = {}
  }

  move (): void {
    this.context.clearRect(Math.floor(this.position.x), Math.floor(this.position.y), this.sprite.width, this.sprite.height)
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
    this.position.subtractVector(this.acceleration)
    this.context.drawImage(this.sprite, Math.floor(this.position.x), Math.floor(this.position.y), this.sprite.width, this.sprite.height)
  }

  update (state: any): void {
    this.state = state
  }
}
