import IGameLoop from '../lib/interfaces/IGameLoop'
import IGame from '../lib/interfaces/IGame'
import { Actions } from '../lib/client/InputManager'
import Observer from '../lib/observer/Observer'

/**
 * Game loop.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class GameLoop implements IGameLoop, Observer {
  public game: IGame
  public lastTime: number
  public frameId: number
  private state: any

  /**
   * Constructor.
   *
   * @param {IGame} game Game instance
   */
  constructor (game: IGame) {
    this.game = game
    this.lastTime = null
    this.state = {}
  }

  /**
   *
   */
  public start (): void {
    this.game.init()
    this.game.state.running = true
    this.frameId = requestAnimationFrame(time => this.loop(time))
  }

  /**
   *
   */
  public stop (): void {
    if (this.frameId) {
      cancelAnimationFrame(this.frameId)
    }
  }

  public restart (): void {
    this.stop()
    this.start()
  }

  /**
   *
   */
  public togglePause (): void {
    this.game.state.paused = !this.game.state.paused
  }

  /**
   *
   */
  public loop (time: number): void {
    if (this.state[Actions.RESTART]) {
      this.restart()
    } else {
      if (this.game.state.running) {
        this.game.clear()
        if (this.lastTime !== null) {
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
