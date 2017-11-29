import { Actions } from './InputManager'

export class Settings {
  keyBoard
  player

  constructor () {
    this.keyBoard = {
      'w': Actions.UP,
      's': Actions.DOWN,
      'a': Actions.LEFT,
      'd': Actions.RIGHT,
      ' ': Actions.SHOOT
    }
    this.player = {
      maxVelocity: 10,
      fireDelay: 15,
      friction: 0.7,
      acceleration: 2
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
