import { Observable } from '../lib/Observable'
import { Settings } from './Settings'

export enum Actions {
  UP = 'UP', DOWN = 'DOWN', LEFT = 'LEFT', RIGHT = 'RIGHT', SHOOT = 'SHOOT'
}

/**
 *
 */
export class InputManager extends Observable {
  inputMap

  /**
   *
   */
  constructor (settings: Settings) {
    super()
    this.inputMap = settings.keyBoard
    this.init()
  }

  /**
   * Register pressed keys and notify observers.
   */
  init (): void {
    window.addEventListener('keydown', event => {
      this.state[this.inputMap[event.key]] = true
      this.notify()
    })
    window.addEventListener('keyup', event => {
      this.state[this.inputMap[event.key]] = false
      this.notify()
    })
  }

  reset (): void {
    Object.keys(this.state).forEach(key => this.state[key] = false)
  }
}
