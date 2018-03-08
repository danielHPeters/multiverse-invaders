import { Actions } from '../lib/client/InputManager'
import Dimension from '../lib/geometry/Dimension'

/**
 * Settings class for models applications.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Settings {
  keyBoard
  player
  audio
  gameSize: Dimension

  constructor (canvas: HTMLCanvasElement) {
    this.keyBoard = {
      'w': Actions.UP,
      's': Actions.DOWN,
      'a': Actions.LEFT,
      'd': Actions.RIGHT,
      'space': Actions.SHOOT,
      'r': Actions.RESTART,
      'q': Actions.ROTATE_LEFT,
      'e': Actions.ROTATE_RIGHT
    }
    this.player = {
      maxVelocity: 150,
      fireDelay: 15,
      friction: 0.9,
      acceleration: 50
    }
    this.audio = {
      master: 1,
      ambient: 1,
      effects: 1
    }
    this.gameSize = new Dimension(canvas.width, canvas.height)
  }

  findKey (value): string {
    return Object.keys(this.keyBoard).filter(key => this.keyBoard[key] === value)[0]
  }

  setKey (newKey, action: Actions): void {
    let oldKey = this.findKey(action)
    if (newKey !== oldKey) {
      console.log('old:' + oldKey, ' new: ' + newKey + ' value: ' + action)
      this.keyBoard[newKey] = this.keyBoard[oldKey]
      delete this.keyBoard[oldKey]
    }
  }
}
