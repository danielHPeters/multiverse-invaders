import Matrix from '../lib/math/Matrix'
import Player from './Player'
import Vector2 from '../lib/math/Vector2'

export default class Arena {
  matrix: Matrix
  postition: Vector2

  constructor () {
    this.postition = new Vector2(0, 0)
    this.init(12, 20)
  }

  init (width: number, height: number): void {
    const array = []
    while (height--) {
      array.push(new Array(width).fill(0))
    }
    this.matrix = new Matrix(array)
  }

  sweep (player: Player): void {
    let rowCount = 1
    outer: for (let y = this.matrix.mArray.length - 1; y > 0; --y) {
      for (let x = 0; x < this.matrix.mArray[y].length; ++x) {
        if (this.matrix.mArray[y][x] === 0) {
          continue outer
        }
      }

      const row = this.matrix.mArray.splice(y, 1)[0].fill(0)
      this.matrix.mArray.unshift(row)
      ++y

      player.score += rowCount * 10
      rowCount *= 2
    }
  }

  merge (player: Player): void {
    player.piece.matrix.mArray.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          this.matrix.mArray[y + player.piece.position.y][x + player.piece.position.x] = value
        }
      })
    })
  }
}
