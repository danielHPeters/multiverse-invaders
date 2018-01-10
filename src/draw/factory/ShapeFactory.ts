import Shape from '../interfaces/Shape'
import Line, { Color } from '../geometry/Line'
import Point from '../geometry/Point'
import Rectangle from '../geometry/Rectangle'
import Triangle from '../geometry/Triangle'
import Circle from '../geometry/Circle'
import Smiley from '../geometry/Smiley'

export enum ShapeType {
  LINE, RECTANGLE, TRIANGLE, CIRCLE, SMILEY
}

export default class ShapeFactory {
  static create (shapeType: ShapeType, start: Point, end: Point, color: Color, fill: boolean): Shape {
    let shape
    switch (shapeType) {
      case ShapeType.LINE:
        shape = new Line(start, end, color, fill)
        break
      case ShapeType.RECTANGLE:
        shape = new Rectangle(start, end, color, fill)
        break
      case ShapeType.TRIANGLE:
        shape = new Triangle(start, end, color, fill)
        break
      case ShapeType.CIRCLE:
        shape = new Circle(start, end, color, fill)
        break
      case ShapeType.SMILEY:
        shape = new Smiley(start, end, color, fill)
        break
      default:
        throw new Error('Invalid Shape Type!')
    }
    return shape
  }
}
