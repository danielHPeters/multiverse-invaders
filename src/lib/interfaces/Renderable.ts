import { ContextId } from '../../enum/ContextId'

/**
 * Interface for entities who be rendered.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default interface Renderable {
  contextId: ContextId

  /**
   * Render the entity.
   *
   * @param {CanvasRenderingContext2D} ctx Rendering Context
   */
  render (ctx: CanvasRenderingContext2D): void

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  clear (ctx: CanvasRenderingContext2D): void
}
