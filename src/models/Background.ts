import Vector2 from '../lib/math/Vector2'
import { EntityType } from '../lib/interfaces/ICollideAble'
import IRenderable from '../lib/interfaces/IRenderable'
import { ContextId } from '../enum/ContextId'
import IMovable from '../lib/interfaces/IMovable'
import Entity from '../lib/entity/Entity'
import Dimension from '../lib/geometry/Dimension'
import Settings from '../config/Settings'

export default class Background extends Entity implements IRenderable, IMovable {
  velocity: Vector2
  acceleration: Vector2
  contextId: ContextId
  speed: number
  type: EntityType
  sprite: any

  /**
   *
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   * @param sprite
   * @param {Settings} settings
   */
  constructor (x: number, y: number, width: number, height: number, sprite: any, settings: Settings) {
    super(new Vector2(x, y), new Dimension(width, height), settings)
    this.speed = 1
    this.sprite = sprite
    this.type = EntityType.BACKGROUND
    this.contextId = ContextId.BACKGROUND
  }

  reset (): void {
    this.position.set(0, 0)
  }

  move (dt: number): void {
    this.position.y += this.speed
    if (this.position.y >= this.dimension.height) {
      this.position.y = 0
    }
  }

  /**
   *
   */
  render (ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.sprite, this.position.x, this.position.y)
    ctx.drawImage(this.sprite, this.position.x, this.position.y - this.dimension.height)
  }

  clear (): void {
  }
}
