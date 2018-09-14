import AssetManager, { AssetType } from '../lib/client/AssetManager'
import Bullet from './Bullet'
import Enemy from './Enemy'
import { AssetId } from '../enum/AssetId'
import Settings from '../config/Settings'
import Renderable from '../lib/interfaces/Renderable'
import { ContextId } from '../enum/ContextId'
import Movable from '../lib/interfaces/Movable'
import GameState from '../lib/interfaces/GameState'

/**
 *
 */
export default class Pool implements Renderable, Movable {
  contextId: ContextId
  assetManager: AssetManager
  maxSize: number
  type: AssetId
  assetId: AssetId
  pool: any[]
  subPool: Pool
  settings: Settings
  game: GameState

  constructor (assetManager: AssetManager, maxSize: number, type: AssetId, asId: AssetId, settings: Settings, pool: Pool = null, game: GameState = null) {
    this.assetManager = assetManager
    this.maxSize = maxSize
    this.type = type
    this.assetId = asId
    this.pool = []
    this.subPool = pool
    this.settings = settings
    this.contextId = ContextId.MAIN
    this.game = game
    this.init()
  }

  init (): void {
    const sprite = this.assetManager.getSprite(this.assetId)
    if (this.type === AssetId.ENEMY) {
      for (let i = 0; i < this.maxSize; i++) {
        this.pool[i] = new Enemy(
          sprite.width,
          sprite.height, sprite,
          this.type,
          this.subPool,
          this.settings,
          this.assetManager.getSound(AssetId.EXPLOSION_I, AssetType.AUDIO), this.game)
      }
    } else {
      for (let i = 0; i < this.maxSize; i++) {
        this.pool[i] = new Bullet(sprite.width, sprite.height, sprite, this.type, this.settings)
      }
    }
  }

  getPool (): Movable[] {
    return this.pool.filter(object => object.alive)
  }

  get (x: number, y: number, speed: number): void {
    const lastElement = this.pool[this.maxSize - 1]
    if (!lastElement.alive) {
      lastElement.spawn(x, y, speed)
      this.pool.unshift(this.pool.pop())
    }
  }

  getTwo (x1: number, y1: number, speed1: number, x2: number, y2: number, speed2: number): void {
    if (!this.pool[this.maxSize - 1].alive &&
      !this.pool[this.maxSize - 2].alive) {
      this.get(x1, y1, speed1)
      this.get(x2, y2, speed2)
    }
  }

  render (ctx: CanvasRenderingContext2D): void {
    for (let i = 0; i < this.pool.length; i++) {
      // Only draw until we find a bullet that is not alive
      if (this.pool[i].alive) {
        this.pool[i].render(ctx)
      } else {
        this.pool[i].init()
        this.pool.push((this.pool.splice(i, 1))[0])
      }
    }
  }

  clear (ctx: CanvasRenderingContext2D): void {
    this.pool.forEach(object => object.clear(ctx))
  }

  move (dt: number): void {
    this.pool.forEach(object => object.move(dt))
  }
}
