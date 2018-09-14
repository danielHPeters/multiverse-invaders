import Vector2 from '../lib/math/Vector2'
import Collideable from '../lib/interfaces/Collideable'
import Entity from '../lib/entity/Entity'
import Settings from '../config/Settings'
import Renderable from '../lib/interfaces/Renderable'
import Movable from '../lib/interfaces/Movable'
import Dimension from '../lib/geometry/Dimension'
import { ContextId } from '../enum/ContextId'
import SpawnAble from '../lib/interfaces/SpawnAble'
import { AssetId } from '../enum/AssetId'

/**
 * Bullet class.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Bullet extends Entity implements Renderable, Movable, Collideable, SpawnAble {
  contextId: ContextId
  speed: number
  sprite: HTMLImageElement
  alive: boolean
  collidesWith
  type: AssetId
  colliding: boolean

  constructor (width: number, height: number, sprite: HTMLImageElement, type: AssetId, settings: Settings) {
    super(new Vector2(0, 0), new Dimension(width, height), settings)
    this.speed = 0
    this.sprite = sprite
    this.alive = false
    this.type = type
    this.colliding = false
    this.collidesWith = []
    if (this.type === AssetId.PLAYER_BULLET) {
      this.collidesWith.push(AssetId.ENEMY)
    } else if (this.type === AssetId.ENEMY_BULLET) {
      this.collidesWith.push(AssetId.PLAYER)
    }
    this.settings = settings
    this.contextId = ContextId.MAIN
  }

  init (): void {
    this.position.set(0, 0)
    this.speed = 0
    this.alive = false
    this.colliding = false
  }

  spawn (x: number, y: number, speed: number): void {
    this.position.set(x, y)
    this.speed = speed
    this.alive = true
  }

  render (ctx: CanvasRenderingContext2D): void {
    if ((this.type === AssetId.PLAYER_BULLET && this.position.y <= 0 - this.dimension.height) ||
      (this.type === AssetId.ENEMY_BULLET && this.position.y >= this.settings.gameSize.height)) {
      this.alive = false
    } else {
      ctx.drawImage(this.sprite, this.position.x, this.position.y)
    }
  }

  clear (ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(this.position.x - 1, this.position.y - 1, this.dimension.width + 1, this.dimension.height + 1)
  }

  move (dt: number): void {
    if ((this.type === AssetId.PLAYER_BULLET && this.position.y <= 0 - this.dimension.height) ||
      (this.type === AssetId.ENEMY_BULLET && this.position.y >= this.settings.gameSize.height) ||
      this.colliding) {
      this.alive = false
      this.colliding = false
    } else {
      this.position.y -= Math.floor(this.speed * dt)
    }
  }

  isCollideAbleWith (other: Collideable): boolean {
    return this.collidesWith.includes(other.type.toString())
  }
}
