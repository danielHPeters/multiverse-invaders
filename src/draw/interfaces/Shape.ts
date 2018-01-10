import Point from '../geometry/Point'
import { Color } from '../geometry/Line'

export default interface Shape {
  start: Point
  end: Point
  color: Color
  fill: boolean

  render (context: CanvasRenderingContext2D): void
}
