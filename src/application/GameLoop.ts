import IGameLoop from '../lib/interfaces/IGameLoop'
import IGame from '../lib/interfaces/IGame'

/**
 * Game loop.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class GameLoop implements IGameLoop {
  public game: IGame
  public lastTime: number
  public frameId: number

  /**
   * Constructor.
   *
   * @param {IGame} game Game instance
   */
  constructor (game: IGame) {
    this.game = game
    this.lastTime = null
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
    this.game.state.running = false
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
    if (this.game.state.running) {
      if (!this.game.state.paused) {
        if (this.lastTime !== null) {
          const diff = time - this.lastTime
          this.game.update(diff / 1000)
        }
        this.lastTime = time
        this.game.render()
        this.frameId = requestAnimationFrame(time => this.loop(time))
      }
    }
  }
}