import Vector2 from '../lib/math/Vector2'
import IRenderable from '../lib/interfaces/IRenderable'
import { ContextId } from '../enum/ContextId'
import IMovable from '../lib/interfaces/IMovable'
import Entity from '../lib/entity/Entity'
import Dimension from '../lib/geometry/Dimension'
import Settings from '../config/Settings'

/**
 * Shifting background.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Background extends Entity implements IRenderable, IMovable {
  contextId: ContextId
  speed: number
  sprite: HTMLImageElement

  constructor (width: number, height: number, sprite: HTMLImageElement, settings: Settings) {
    super(new Vector2(0, 0), new Dimension(width, height), settings)
    this.speed = 1
    this.sprite = sprite
    this.contextId = ContextId.BACKGROUND
  }

  /**
   * Initialize.
   */
  init (): void {
    this.position.set(0, 0)
  }

  render (ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.sprite, this.position.x, this.position.y)
    ctx.drawImage(this.sprite, this.position.x, this.position.y - this.dimension.height)
  }

  /**
   * Update position.
   *
   * @param dt Delta Time
   */
  move (dt: number): void {
    this.position.y += this.speed
    if (this.position.y >= this.dimension.height) {
      this.position.y = 0
    }
  }

  /**
   * Clear the background.
   */
  clear (): void {
    // Not applicable
  }
}
