import { Actions } from '../lib/client/InputManager'
import Dimension from '../lib/geometry/Dimension'

/**
 * Settings class for models applications.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Settings {
  keyboard: any
  player: any
  audio: any
  gameSize: Dimension

  /**
   *
   * @param {Dimension} dimension
   */
  constructor (dimension: Dimension) {
    this.keyboard = {
      'w': Actions.UP,
      's': Actions.DOWN,
      'a': Actions.LEFT,
      'd': Actions.RIGHT,
      'space': Actions.SHOOT,
      'r': Actions.RESTART
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
    this.gameSize = dimension
  }

  findKey (value: string): string {
    return Object.keys(this.keyboard).filter(key => this.keyboard[key] === value)[0]
  }

  setKey (newKey: string, action: string): void {
    let oldKey = this.findKey(action)
    if (newKey !== oldKey) {
      console.log('old:' + oldKey, ' new: ' + newKey + ' value: ' + action)
      this.keyboard[newKey] = this.keyboard[oldKey]
      delete this.keyboard[oldKey]
    }
  }
}
