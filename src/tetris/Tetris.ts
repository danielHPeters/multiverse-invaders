import IGame from '../lib/interfaces/IGame'
import Player from './Player'
import Arena from './Arena'
import Vector2 from '../lib/math/Vector2'
import Piece from './Piece'

const colors = [
  null,
  '#FF0D72',
  '#0DC2FF',
  '#0DFF72',
  '#F538FF',
  '#FF8E0D',
  '#FFE138',
  '#3877FF'
]

export default class Tetris implements IGame {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  playing: boolean
  lastTime: number
  players: Player[]
  arena: Arena

  constructor (canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.context = canvas.getContext('2d')
    this.playing = false
    this.arena = new Arena()
    this.players = []
    this.lastTime = 0
    this.context.scale(20, 20)
  }

  addPlayer (playerId: string, playerName: string, piece: Piece): void {
    this.players.push(new Player(playerId, playerName, piece, this.arena))
  }

  start (): void {
    this.playing = true
    this.run()
  }

  drawMatrix (context: CanvasRenderingContext2D, matrix: number[][], offset: Vector2): void {
    matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          context.fillStyle = colors[value]
          context.fillRect(x + offset.x,
            y + offset.y,
            1, 1)
        }
      })
    })
  }

  animationCallback (timeStamp: number): void {
    const deltaTime = timeStamp - this.lastTime
    this.lastTime = timeStamp
    this.update(deltaTime)
    this.render()
    requestAnimationFrame(this.animationCallback.bind(this))
  }

  update (deltaTime: number): void {
    this.players.forEach(player => {
      player.piece.dropCounter += deltaTime
      if (player.piece.dropCounter > player.piece.dropInterval) {
        player.piece.drop(this.arena, player)
      }
    })
  }

  render (): void {
    this.context.fillStyle = '#000'
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
    this.drawMatrix(this.context, this.arena.matrix.mArray, this.arena.postition)
    this.drawMatrix(this.context, this.players[0].piece.matrix.mArray, this.players[0].piece.position)
  }

  run (): void {
    requestAnimationFrame(this.animationCallback.bind(this))
  }

  stop (): void {
  }

}
