import Shape from '../interfaces/Shape'
import Line, { Color } from '../Line'
import Point from '../Point'
import Rectangle from '../Rectangle'
import Triangle from '../Triangle'
import Circle from '../Circle'

export enum ShapeType {
  LINE, RECTANGLE, TRIANGLE, CIRCLE
}

export default class ShapeFactory {
  static create (shapeType: ShapeType, start: Point, end: Point, color: Color): Shape {
    let shape
    switch (shapeType) {
      case ShapeType.LINE:
        shape = new Line(start, end, color)
        break
      case ShapeType.RECTANGLE:
        shape = new Rectangle(start, end, color)
        break
      case ShapeType.TRIANGLE:
        shape = new Triangle(start, end, color)
        break
      case ShapeType.CIRCLE:
        shape = new Circle(start, end, color)
        break
      default:
        throw new Error('Invalid Shape Type!')
    }
    return shape
  }
}
