import { Vector2 } from '../lib/vector/Vector2'

export class Snake {
  startPosition: Vector2
  segmentPositions: Vector2[]
  segmentWidth: number
  segmentHeight: number

  constructor (x: number, y: number, width: number, height: number) {
    this.startPosition = new Vector2(x, y)
    this.segmentPositions = []
    this.segmentWidth = width
    this.segmentHeight = height
  }

  addTail (x, y) {
    this.segmentPositions.push(new Vector2(x, y))
  }

  move () {

  }
}
