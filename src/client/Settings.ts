import { Actions } from './InputManager'

/**
 * Settings class for game applications.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Settings {
  keyBoard
  player
  audio

  constructor () {
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
      maxVelocity: 15,
      fireDelay: 15,
      friction: 0.7,
      acceleration: 3
    }
    this.audio = {
      master: 1,
      ambient: 1,
      effects: 1
    }
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
