import { Vector2 } from '../../lib/vector/Vector2'
import { Observer } from '../../lib/observer/Observer'
import { Actions } from '../../client/InputManager'
import { Drawable } from '../interfaces/Drawable'

export class Player implements Observer, Drawable {
  canvasWidth: number
  canvasHeight: number
  context: any
  sprite: any
  position: Vector2
  speed: number
  width: number
  height: number
  inputState

  constructor (x: number, y: number) {
    // (x, y) = center of object
    // ATTENTION:
    // it represents the player position on the world(room), not the canvas position
    this.position = new Vector2(x, y)

    // move speed in pixels per second
    this.speed = 200

    // draw properties
    this.width = 50
    this.height = 50
  }

  move (step, worldWidth, worldHeight): void {
    // parameter step is the time between frames ( in seconds )

    // check controls and move the player accordingly
    if (this.inputState[Actions.LEFT]) {
      this.position.x -= this.speed * step
    }
    if (this.inputState[Actions.UP]) {
      this.position.y -= this.speed * step
    }
    if (this.inputState[Actions.RIGHT]) {
      this.position.x += this.speed * step
    }
    if (this.inputState[Actions.DOWN]) {
      this.position.y += this.speed * step
    }

    // don't let player leaves the world's boundary
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
  }

  draw (xView, yView): void {
    // draw a simple rectangle shape as our player model
    this.context.save()
    this.context.fillStyle = 'black'
    // before draw we need to convert player world's position to canvas position
    this.context.fillRect((this.position.x - this.width / 2) - xView, (this.position.y - this.height / 2) - yView, this.width, this.height)
    this.context.restore()
  }

  update (state: any): void {
    this.inputState = state
  }
}
