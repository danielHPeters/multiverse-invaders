import AssetManager from '../lib/client/AssetManager'
import Bullet from './Bullet'
import Enemy from './Enemy'
import { EntityType } from '../lib/interfaces/ICollideAble'
import { AssetId } from '../enum/AssetId'
import Settings from '../config/Settings'
import IRenderable from '../lib/interfaces/IRenderable'
import { ContextId } from '../enum/ContextId'
import IMovable from '../lib/interfaces/IMovable'
import Vector2 from '../lib/math/Vector2'

/**
 *
 */
export default class Pool implements IRenderable, IMovable {
  velocity: Vector2
  acceleration: Vector2
  contextId: ContextId
  assetManager: AssetManager
  maxSize: number
  type: EntityType
  assetId: AssetId
  pool: any[]
  subPool: Pool
  settings: Settings

  /**
   *
   * @param {AssetManager} assetManager
   * @param {number} maxSize
   * @param {EntityType} type
   * @param {AssetId} asId
   * @param {Settings} settings
   * @param {Pool} pool
   */
  constructor (assetManager: AssetManager, maxSize: number, type: EntityType, asId: AssetId, settings: Settings, pool: Pool = null) {
    this.assetManager = assetManager
    this.maxSize = maxSize
    this.type = type
    this.assetId = asId
    this.pool = []
    this.subPool = pool
    this.settings = settings
    this.contextId = ContextId.MAIN
    this.init()
  }

  /**
   *
   */
  init (): void {
    let sprite = this.assetManager.getSprite(this.assetId)
    if (this.type === EntityType.ENEMY) {
      for (let i = 0; i < this.maxSize; i++) {
        this.pool[i] = new Enemy(0, 0, sprite.width, sprite.height, 0, sprite, this.type, this.subPool, this.settings)
      }
    } else {
      for (let i = 0; i < this.maxSize; i++) {
        this.pool[i] = new Bullet(0, 0, sprite.width, sprite.height, 0, sprite, this.type, this.settings)
      }
    }
  }

  /**
   *
   * @param {number} x
   * @param {number} y
   * @param {number} speed
   */
  get (x: number, y: number, speed: number): void {
    let lastElement = this.pool[this.maxSize - 1]
    if (!lastElement.alive) {
      lastElement.spawn(x, y, speed)
      this.pool.unshift(this.pool.pop())
    }
  }

  /**
   *
   * @param {number} x1
   * @param {number} y1
   * @param {number} speed1
   * @param {number} x2
   * @param {number} y2
   * @param {number} speed2
   */
  getTwo (x1: number, y1: number, speed1: number, x2: number, y2: number, speed2: number): void {
    if (!this.pool[this.maxSize - 1].alive &&
      !this.pool[this.maxSize - 2].alive) {
      this.get(x1, y1, speed1)
      this.get(x2, y2, speed2)
    }
  }

  /**
   *
   */
  render (ctx: CanvasRenderingContext2D): void {
    for (let i = 0; i < this.pool.length; i++) {
      // Only draw until we find a bullet that is not alive
      if (this.pool[i].alive) {
        this.pool[i].render(ctx)
        this.pool[i].reset()
        this.pool.push((this.pool.splice(i, 1))[0])
      } else {
        break
      }
    }
  }

  move (dt: number): void {
    this.pool.forEach(object => object.move(dt))
  }

  clearAll (): void {
    this.pool.forEach(object => object.reset())
  }

  getPool (): IMovable[] {
    let objects = []
    this.pool.forEach(object => {
      if (object.alive) {
        objects.push(object)
      }
    })
    return objects
  }

  clear (ctx: CanvasRenderingContext2D): void {
    this.pool.forEach(object => object.clear(ctx))
  }
}
