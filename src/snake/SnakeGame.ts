import IGame from '../lib/interfaces/IGame'
import IGameState from '../lib/interfaces/IGameState'
import ICollisionManager from '../lib/interfaces/ICollisionManager'

/**
 * Snake models.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export class SnakeGame implements IGame {
  state: IGameState
  collisionManager: ICollisionManager
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  playing: boolean
  lastTimestamp: number

  constructor (canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.context = this.canvas.getContext('2d')
    this.playing = false
  }

  init (): void {
  }

  start (): void {
    this.playing = true
    this.run()
  }

  animationCallback (timeStamp: number): void {
    while (this.playing) {
      if (this.lastTimestamp) {
        this.update(timeStamp - this.lastTimestamp / 1000)
      }
      this.render()
      this.lastTimestamp = timeStamp
      requestAnimationFrame(this.animationCallback)
    }
  }

  update (deltaTime: number): void {

  }

  render (): void {

  }

  run (): void {
    window.requestAnimationFrame(this.animationCallback)
  }

  stop (): void {
    this.playing = false
  }
}
