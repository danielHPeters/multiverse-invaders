import Vector2 from '../lib/math/Vector2'

/**
 * Player snake class for snake models.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Snake {
  startPosition: Vector2
  segmentPositions: Vector2[]
  segmentWidth: number
  segmentHeight: number

  /**
   * Default constructor.
   *
   * @param {number} x Starting x position on canvas
   * @param {number} y Starting y position on canvas
   * @param {number} width Width of an individual snake segment
   * @param {number} height Height of an individual snake segment
   */
  constructor (x: number, y: number, width: number, height: number) {
    this.startPosition = new Vector2(x, y)
    this.segmentPositions = []
    this.segmentWidth = width
    this.segmentHeight = height
  }

  /**
   * Add a tail segment.
   *
   * @param x X coordinate on canvas
   * @param y Y coordinate on canvas
   */
  addTail (x, y): void {
    this.segmentPositions.push(new Vector2(x, y))
  }

  /**
   * Move the snake.
   */
  move (): void {

  }
}
