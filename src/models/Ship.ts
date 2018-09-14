import Vector2 from '../lib/math/Vector2'
import Pool from './Pool'
import Observer from '../lib/observer/Observer'
import Collideable from '../lib/interfaces/Collideable'
import { Actions } from '../lib/client/InputManager'
import AssetManager, { AssetType } from '../lib/client/AssetManager'
import Sound from '../lib/audio/Sound'
import { AssetId } from '../enum/AssetId'
import Entity from '../lib/entity/Entity'
import Settings from '../config/Settings'
import Movable from '../lib/interfaces/Movable'
import Renderable from '../lib/interfaces/Renderable'
import Dimension from '../lib/geometry/Dimension'
import { ContextId } from '../enum/ContextId'

/**
 * Player ship model class.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Ship extends Entity implements Renderable, Movable, Observer, Collideable {
  acceleration: Vector2
  sprite: any
  bulletPool: Pool
  counter: number
  collidesWith
  type: AssetId
  colliding: boolean
  velocity: Vector2
  state
  maxTop: number
  startPosition
  settings: Settings
  laserSound: Sound
  assetManager: AssetManager
  contextId: ContextId
  alive: boolean

  constructor (width: number, height: number, assetManager: AssetManager, pool: Pool, settings: Settings) {
    super(new Vector2(0, 0), new Dimension(width, height), settings)
    this.startPosition = new Vector2(0, 0)
    this.acceleration = new Vector2(0, 0)
    this.velocity = new Vector2(0, 0)
    this.sprite = assetManager.getSprite(AssetId.PLAYER)
    this.type = AssetId.PLAYER
    this.bulletPool = pool
    this.counter = 0
    this.collidesWith = []
    this.collidesWith.push(AssetId.ENEMY_BULLET)
    this.colliding = false
    this.state = {}
    this.settings = settings
    this.assetManager = assetManager
    this.maxTop = Math.floor(this.settings.gameSize.height / 4 * 3)
    this.laserSound = assetManager.getSound(AssetId.LASER, AssetType.AUDIO)
    this.contextId = ContextId.SHIP
    this.alive = false
  }

  /**
   *
   */
  init (): void {
    const startX = this.settings.gameSize.width / 2 - this.assetManager.getSprite(AssetId.PLAYER).width
    const startY = this.settings.gameSize.height / 4 * 3 + this.assetManager.getSprite(AssetId.PLAYER).height * 2
    this.position.setVector(new Vector2(startX, startY))
    this.velocity.set(0, 0)
    this.colliding = false
    this.alive = true
  }

  /**
   *
   */
  fire (): void {
    this.bulletPool.getTwo(
      Math.floor(this.position.x) + 12, Math.floor(this.position.y), 200,
      Math.floor(this.position.x) + 66, Math.floor(this.position.y), 200
    )
    this.laserSound.play()
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  render (ctx: CanvasRenderingContext2D): void {
    if (!this.colliding) {
      ctx.drawImage(this.sprite, Math.floor(this.position.x), Math.floor(this.position.y))
    }
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  clear (ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(Math.floor(this.position.x), Math.floor(this.position.y), this.dimension.width, this.dimension.height)
  }

  /**
   *
   * @param {number} dt
   */
  move (dt: number): void {
    if (!this.colliding) {
      this.counter++
      this.acceleration.set(0, 0)
      if (this.state[Actions.LEFT]) {
        this.acceleration.add(-this.settings.player.acceleration, 0)
      }
      if (this.state[Actions.RIGHT]) {
        this.acceleration.add(this.settings.player.acceleration, 0)
      }
      if (this.state[Actions.UP]) {
        this.acceleration.add(0, -this.settings.player.acceleration)
      }
      if (this.state[Actions.DOWN]) {
        this.acceleration.add(0, this.settings.player.acceleration)
      }
      this.velocity.multiply(this.settings.player.friction)
      this.velocity.addVector(this.acceleration)
      this.velocity.limit(this.settings.player.maxVelocity)
      const vel = this.velocity.clone()
      vel.multiply(dt)
      this.position.addVector(vel)
      if (this.position.x <= 0) {
        this.position.x = 0
        this.velocity.x += -1
      }
      if (this.position.x >= this.settings.gameSize.width - this.dimension.width) {
        this.position.x = this.settings.gameSize.width - this.dimension.width
      }
      if (this.position.y <= this.maxTop) {
        this.position.y = this.maxTop
      }
      if (this.position.y >= this.settings.gameSize.height - this.dimension.height) {
        this.position.y = this.settings.gameSize.height - this.dimension.height
      }

      if (this.state[Actions.SHOOT] && this.counter >= this.settings.player.fireDelay) {
        this.fire()
        this.counter = 0
      }
    }
  }

  /**
   *
   * @param state
   */
  update (state: any): void {
    this.state = state
  }

  /**
   *
   * @param {Collideable} other
   * @returns {boolean}
   */
  isCollideAbleWith (other: Collideable): boolean {
    return this.collidesWith.includes(other.type.toString())
  }
}
