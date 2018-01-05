import { Vector2 } from '../../lib/vector/Vector2'

export default class Pen {
  radius: number
  opacity: number
  position: Vector2

  constructor (radius: number, opacity = 0) {
    this.radius = radius
    this.opacity = opacity
    this.position = new Vector2(0, 0)
  }

  draw (context: CanvasRenderingContext2D, mousePosition): void {
    context.beginPath()
    context.arc(mousePosition.x, mousePosition.y, this.radius, 0, 2 * Math.PI)
    context.stroke()
  }
}
