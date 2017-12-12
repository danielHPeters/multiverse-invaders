import { IGame } from '../lib/interfaces/IGame'

export class SnakeGame implements IGame {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  playing: boolean

  constructor (canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.context = this.canvas.getContext('2d')
    this.playing = false
  }

  start (): void {
    this.playing = true
    this.run()
  }

  update (): void {

  }

  render (): void {

  }

  run (): void {
    while (this.playing) {
      this.update()
      this.render()
      window.requestAnimationFrame(() => this.run())
    }
  }

  stop (): void {
    this.playing = false
  }
}
