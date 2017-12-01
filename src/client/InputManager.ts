import { Observable } from '../lib/observer/Observable'
import { Settings } from './Settings'

export enum Actions {
  UP = 'UP', DOWN = 'DOWN', LEFT = 'LEFT', RIGHT = 'RIGHT', SHOOT = 'SHOOT', RESTART = 'RESTART'
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
    this.initializeTouchHandler()
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

  /**
   * Maps swipe directions to key press booleans.
   * Allows touch controls on mobile.
   */
  initializeTouchHandler (): void {
    // Register the event listeners
    window.addEventListener('touchstart', handleTouchStart, false)
    window.addEventListener('touchmove', handleTouchMove, false)
    window.addEventListener('touchend', handleTouchEnd, false)

    let xDown = null
    let yDown = null
    let thisInstance = this

    function handleTouchStart (evt): void {
      // Prevent divide scrolling
      evt.preventDefault()
      xDown = evt.touches[0].clientX
      yDown = evt.touches[0].clientY
    }

    function handleTouchMove (evt): void {
      // Prevent divide scrolling
      evt.preventDefault()
      // do nothing if no touch direction is registered
      if (!xDown || !yDown) {
        return
      }

      let xUp = evt.touches[0].clientX
      let yUp = evt.touches[0].clientY

      // Subtract start currently touched location from start location
      let xDiff = xDown - xUp
      let yDiff = yDown - yUp

      // Positive values equals left. Negative values equals right
      if (xDiff > 0) {
        thisInstance.state[thisInstance.inputMap['a']] = true
      } else if (xDiff < 0) {
        thisInstance.state[thisInstance.inputMap['d']] = true
      } else if (yDiff > 0) {
        thisInstance.state[thisInstance.inputMap['w']] = true
      } else if (yDiff < 0) {
        thisInstance.state[thisInstance.inputMap['s']] = true
      }
      thisInstance.notify()
      /* reset values */
      xDown = null
      yDown = null
    }

    function handleTouchEnd (evt): void {
      // Prevent divide scrolling
      evt.preventDefault()
      thisInstance.reset()
    }
  }

  reset (): void {
    Object.keys(this.state).forEach(key => {
      this.state[key] = false
      this.notify()
    })
  }
}
