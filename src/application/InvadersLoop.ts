import GameLoop from '../lib/interfaces/GameLoop'
import Game from '../lib/interfaces/Game'
import { Actions } from '../lib/client/InputManager'
import Observer from '../lib/observer/Observer'

/**
 * Game loop.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class InvadersLoop implements GameLoop, Observer {
  game: Game
  lastTime: number | undefined
  frameId: number
  private state: any

  /**
   * Constructor.
   *
   * @param game Game instance
   */
  constructor (game: Game) {
    this.game = game
    this.lastTime = undefined
    this.state = {}
  }

  start (): void {
    this.game.init()
    this.game.state.running = true
    this.frameId = requestAnimationFrame(time => this.loop(time))
  }

  stop (): void {
    if (this.frameId) {
      cancelAnimationFrame(this.frameId)
    }
  }

  restart (): void {
    this.stop()
    this.start()
  }

  togglePause (): void {
    this.game.state.paused = !this.game.state.paused
  }

  loop (time: number): void {
    if (this.state[Actions.RESTART]) {
      this.restart()
    } else {
      if (this.game.state.running) {
        this.game.clear()
        if (this.lastTime !== undefined) {
          const diff = time - this.lastTime
          if (!this.game.state.paused) {
            this.game.state.update(diff / 1000)
          }
        }
        this.lastTime = time
        this.game.render()
        this.frameId = requestAnimationFrame(time => this.loop(time))
      }
    }
  }

  update (state: any): void {
    this.state = state
  }
}
