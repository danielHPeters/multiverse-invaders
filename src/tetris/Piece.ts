import Matrix from '../lib/math/Matrix'
import Vector2 from '../lib/math/Vector2'
import CollideAble, { EntityType } from '../game/interfaces/CollideAble'
import MatrixCollisionManager from '../lib/collision/MatrixCollisionManager'
import Arena from './Arena'
import Player from './Player'

export const types = {
  I: [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0]
  ],
  L: [
    [0, 2, 0],
    [0, 2, 0],
    [0, 2, 2]
  ],
  J: [
    [0, 3, 0],
    [0, 3, 0],
    [3, 3, 0]
  ],
  O: [
    [4, 4],
    [4, 4]
  ],
  Z: [
    [5, 5, 0],
    [0, 5, 5],
    [0, 0, 0]
  ],
  S: [
    [0, 6, 6],
    [6, 6, 0],
    [0, 0, 0]
  ],
  T: [
    [0, 7, 0],
    [7, 7, 7],
    [0, 0, 0]
  ]
}

/**
 * Tetris piece representation.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Piece implements CollideAble {
  position: Vector2
  matrix: Matrix
  type: EntityType
  collidesWith
  colliding: boolean
  dropCounter: number
  dropInterval: number

  /**
   * Default constructor.
   *
   * @param {number} x X position
   * @param {number} y Y position
   * @param {Matrix} matrix Matrix representing the piece
   */
  constructor (x: number, y: number) {
    this.position = new Vector2(x, y)
    this.matrix = new Matrix([[0]])
    this.setRandom()
    this.collidesWith = []
    this.collidesWith.push(EntityType.ARENA)
    this.colliding = false
    this.dropCounter = 0
    this.dropInterval = 1000
  }

  move (offset: number): void {
    this.position.add(offset, 0)
  }

  rotate (arena: Arena, player: Player, direction: number): void {
    const pos = player.piece.position.x
    let offset = 1
    this.matrix.rotate(direction)

    while (MatrixCollisionManager.detectCollision(arena, player)) {
      player.piece.position.x += offset
      offset = -(offset + (offset > 0 ? 1 : -1))
      if (offset > player.piece.matrix.mArray[0].length) {
        player.piece.matrix.rotate(-direction)
        player.piece.position.x = pos
        return
      }
    }
  }

  drop (arena: Arena, player: Player): void {
    this.position.add(0, 1)
    if (MatrixCollisionManager.detectCollision(arena, player)) {
      this.position.add(0, -1)
      arena.merge(player)
      this.reset(arena, player)
      arena.sweep(player)
    }
    this.dropCounter = 0
  }

  isCollideAbleWith (other: CollideAble): boolean {
    return this.collidesWith.includes(other.type.toString())
  }

  setRandom (): void {
    const pieces = 'TJLOSZI'
    this.matrix.set(types[pieces[pieces.length * Math.random() | 0]])
  }

  reset (arena: Arena, player: Player): void {
    this.setRandom()
    this.position.set((arena.matrix.mArray[0].length / 2 | 0) - (this.matrix.mArray[0].length / 2 | 0), 0)

    if (MatrixCollisionManager.detectCollision(arena, player)) {
      arena.matrix.mArray.forEach(row => row.fill(0))
      player.score = 0
    }
  }
}
