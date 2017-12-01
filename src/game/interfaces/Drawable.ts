import { Vector2 } from '../../lib/vector/Vector2'

/**
 *
 */
export interface Drawable {
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
