import Vector2 from '../lib/math/Vector2'
import Pool from './Pool'
import ICollideAble, { EntityType } from '../lib/interfaces/ICollideAble'
import Sound from '../lib/audio/Sound'
import Settings from '../config/Settings'
import IRenderable from '../lib/interfaces/IRenderable'
import IMovable from '../lib/interfaces/IMovable'
import Entity from '../lib/entity/Entity'
import Dimension from '../lib/geometry/Dimension'
import { ContextId } from '../enum/ContextId'
import ISpawnAble from '../lib/interfaces/ISpawnAble'
import IGameState from '../lib/interfaces/IGameState'

/**
 * Enemy ship class.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Enemy extends Entity implements IRenderable, IMovable, ICollideAble, ISpawnAble {
  contextId: ContextId
  velocity: Vector2
  speed: number
  leftEdge: number
  rightEdge: number
  bottomEdge: number
  sprite: any
  percentFire: number
  chance: number
  alive: boolean
  bulletPool: Pool
  collidesWith
  type: EntityType
  colliding: boolean
  explosionSound: Sound
  game: IGameState

  constructor (width: number, height: number, sprite, type: EntityType, bulletPool: Pool, settings: Settings, sound: Sound, game: IGameState) {
    super(new Vector2(0, 0), new Dimension(width, height), settings)
    this.velocity = new Vector2(0, 0)
    this.sprite = sprite
    this.percentFire = 0.001
    this.chance = 0
    this.alive = false
    this.type = type
    this.collidesWith = []
    this.collidesWith.push(EntityType.PLAYER_BULLET)
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

  isCollideAbleWith (other: ICollideAble): boolean {
    return this.collidesWith.includes(other.type.toString())
  }
}
