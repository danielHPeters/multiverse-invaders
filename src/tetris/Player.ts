import Piece from './Piece'
import Observer from '../lib/observer/Observer'
import { Actions } from '../lib/client/InputManager'
import Arena from './Arena'

export default class Player implements Observer {
  piece: Piece
  arena: Arena
  id: string
  name: string
  score: number
  state

  constructor (id: string, name: string, piece: Piece, arena: Arena) {
    this.id = id
    this.name = name
    this.score = 0
    this.state = {}
    this.piece = piece
    this.arena = arena
  }

  update (state: any): void {
    this.state = state
    this.move(this.arena)
  }

  move (arena: Arena): void {
    if (this.state[Actions.LEFT]) {
      this.piece.move(-1)
    }
    if (this.state[Actions.RIGHT]) {
      this.piece.move(1)
    }
    if (this.state[Actions.DOWN]) {
      this.piece.drop(arena, this)
    }
    if (this.state[Actions.ROTATE_LEFT]) {
      this.piece.rotate(arena, this, -1)
    }
    if (this.state[Actions.ROTATE_RIGHT]) {
      this.piece.rotate(arena, this, 1)
    }
  }
}
