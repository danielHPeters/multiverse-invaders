import Point from '../../lib/vector/Point'

/**
 * Direction enum.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export enum Direction {
  NORTH = 'North', EAST = 'East', SOUTH = 'South', WEST = 'West'
}

/**
 * Location status enum.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export enum Status {
  START = 'start',
  VALID = 'valid',
  INVALID = 'invalid',
  BLOCKED = 'blocked',
  UNKNOWN = 'unknown',
  OBSTACLE = 'obstacle',
  EMPTY = 'empty',
  VISITED = 'visited',
  GOAL = 'goal'
}

/**
 * Location on the grid.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Location {
  position: Point
  path
  status: Status

  constructor (position: Point, path = [], status = Status.UNKNOWN) {
    this.position = position
    this.path = path
    this.status = status
  }
}
