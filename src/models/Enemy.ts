import Vector2 from '../lib/math/Vector2'
import Pool from './Pool'
import Collideable from '../lib/interfaces/Collideable'
import Sound from '../lib/audio/Sound'
import Settings from '../config/Settings'
import Renderable from '../lib/interfaces/Renderable'
import Movable from '../lib/interfaces/Movable'
import Entity from '../lib/entity/Entity'
import Dimension from '../lib/geometry/Dimension'
import { ContextId } from '../enum/ContextId'
import SpawnAble from '../lib/interfaces/SpawnAble'
import GameState from '../lib/interfaces/GameState'
import { AssetId } from '../enum/AssetId'

/**
 * Enemy ship class.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Enemy extends Entity implements Renderable, Movable, Collideable, SpawnAble {
  contextId: ContextId
  velocity: Vector2
  speed: number
  leftEdge: number
  rightEdge: number
  bottomEdge: number
  sprite: HTMLImageElement
  percentFire: number
  chance: number
  alive: boolean
  bulletPool: Pool
  collidesWith: AssetId[]
  type: AssetId
  colliding: boolean
  explosionSound: Sound
  game: GameState

  constructor (
    width: number,
    height: number,
    sprite: HTMLImageElement,
    type: AssetId,
    bulletPool: Pool,
    settings: Settings,
    sound: Sound,
    game: GameState
  ) {
    super(new Vector2(0, 0), new Dimension(width, height), settings)
    this.velocity = new Vector2(0, 0)
    this.sprite = sprite
    this.percentFire = 0.001
    this.chance = 0
    this.alive = false
    this.type = type
    this.collidesWith = []
    this.collidesWith.push(AssetId.PLAYER_BULLET)
    this.colliding = false
    this.bulletPool = bulletPool
    this.contextId = ContextId.MAIN
    this.explosionSound = sound
    this.game = game
  }

  init (): void {
    this.position.set(0, 0)
    this.velocity.set(0, 0)
    this.speed = 0
    this.alive = false
    this.colliding = false
  }

  fire (): void {
    this.bulletPool.get(Math.floor(this.position.x + this.dimension.width / 2), Math.floor(this.position.y + this.dimension.height), -200)
  }

  render (ctx: CanvasRenderingContext2D): void {
    if (this.alive) {
      ctx.drawImage(this.sprite, this.position.x, this.position.y)
    }
  }

  clear (ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(this.position.x - 1, this.position.y, this.dimension.width + 1, this.dimension.height)
  }

  move (dt: number): void {
    if (!this.colliding) {
      if (this.alive) {
        this.position.addVector(this.velocity)
        if (this.position.x <= this.leftEdge) {
          this.velocity.x = this.speed
        } else if (this.position.x >= this.rightEdge + this.dimension.width) {
          this.velocity.x = -this.speed
        } else if (this.position.y >= this.bottomEdge) {
          this.speed = 1.5
          this.velocity.y = 0
          this.position.y -= 5
          this.velocity.x = -this.speed
        }
        this.chance = Math.floor(Math.random() * 101)
        if (this.chance / 100 < this.percentFire) {
          this.fire()
        }
      }
    } else {
      this.game.scorePoints()
      this.explosionSound.play()
      this.alive = false
    }
  }

  spawn (x: number, y: number, speed: number): void {
    this.position.set(x, y)
    this.velocity.set(0, speed)
    this.speed = speed
    this.alive = true
    this.leftEdge = this.position.x - 180
    this.rightEdge = this.position.x + 180
    this.bottomEdge = this.position.y + 280
  }

  isCollideAbleWith (other: Collideable): boolean {
    return this.collidesWith.includes(other.type)
  }
}
