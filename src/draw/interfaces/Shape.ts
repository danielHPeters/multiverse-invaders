import Point from '../Point'
import { Color } from '../Line'

export default interface Shape {
  start: Point
  end: Point
  color: Color

  render (context: CanvasRenderingContext2D): void
}
