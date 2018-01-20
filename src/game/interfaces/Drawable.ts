import Vector2 from '../../lib/math/Vector2'

/**
 * Interface for game objects which will be drawn onto the canvas.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default interface Drawable {
  position: Vector2
  speed: number
  width: number
  height: number
  canvasWidth: number
  canvasHeight: number
  context: any
  sprite: any

  draw (xView?: number, yView?: number, prevXView?: number, prevYView?: number): void
}
