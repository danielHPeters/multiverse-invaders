import AssetManager from '../lib/client/AssetManager'
import Bullet from './Bullet'
import Enemy from './Enemy'
import SpaceGame from '../application/SpaceGame'
import { EntityType } from '../lib/interfaces/ICollideAble'
import IDrawable from '../lib/interfaces/IDrawable'
import { AssetId } from '../enum/AssetId'

/**
 *
 */
export default class Pool {
  assetManager: AssetManager
  context: any
  canvasWidth: number
  canvasHeight: number
  maxSize: number
  type: EntityType
  assetId: AssetId
  pool: any[]
  subPool: Pool
  game: SpaceGame

  /**
   *
   * @param {AssetManager} assetManager
   * @param {a} context
   * @param {number} canvasWidth
   * @param {number} canvasHeight
   * @param {number} maxSize
   * @param {string} type
   * @param {AssetId} asId
   * @param {Pool} pool
   * @param {SpaceGame} game
   */
  constructor (assetManager: AssetManager, context: any, canvasWidth: number, canvasHeight: number, maxSize: number, type: EntityType, asId: AssetId, pool: Pool = null, game: SpaceGame = null) {
    this.assetManager = assetManager
    this.context = context
    this.canvasWidth = canvasWidth
    this.canvasHeight = canvasHeight
    this.maxSize = maxSize
    this.type = type
    this.assetId = asId
    this.pool = []
    this.subPool = pool
    this.game = game
    this.init()
  }

  /**
   *
   */
  init (): void {
    if (this.type === EntityType.ENEMY) {
      let sprite = this.assetManager.getSprite(this.assetId)
      for (let i = 0; i < this.maxSize; i++) {
        this.pool[i] = new Enemy(
          0,
          0,
          sprite.width,
          sprite.height,
          this.canvasWidth,
          this.canvasHeight,
          0,
          this.context,
          sprite,
          this.type,
          this.subPool,
          this.game
        )
      }
    } else {
      for (let i = 0; i < this.maxSize; i++) {
        let sprite = this.assetManager.getSprite(this.assetId)
        this.pool[i] = new Bullet(
          0,
          0,
          sprite.width,
          sprite.height,
          this.canvasWidth,
          this.canvasHeight,
          0,
          this.context,
          sprite,
          this.type
        )
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
  render (): void {
    for (let i = 0; i < this.pool.length; i++) {
      // Only draw until we find a bullet that is not alive
      if (this.pool[i].alive) {
        if (this.pool[i].draw()) {
          this.pool[i].clear()
          this.pool.push((this.pool.splice(i, 1))[0])
        }
      } else {
        break
      }
    }
  }

  clearAll (): void {
    this.pool.forEach(object => object.clear())
  }

  getPool (): IDrawable[] {
    let objects = []
    this.pool.forEach(object => {
      if (object.alive) {
        objects.push(object)
      }
    })
    return objects
  }
}
