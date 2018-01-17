import Point from '../../lib/vector/Point'

export enum Direction {
  NORTH = 'North', EAST = 'East', SOUTH = 'South', WEST = 'West'
}

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
