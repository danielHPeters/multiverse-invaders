import { Observable } from '../lib/Observable'

/**
 *
 */
export class InputManager extends Observable {
  /**
   *
   */
  constructor () {
    super()
    this.init()
  }

  /**
   * Register pressed keys and notify observers.
   */
  init (): void {
    window.addEventListener('keydown', event => {
      this.state[event.key] = true
      this.notify()
    })
    window.addEventListener('keyup', event => {
      this.state[event.key] = false
      this.notify()
    })
  }

  reset () {
    Object.keys(this.state).forEach(key => this.state[key] = false)
  }
}
