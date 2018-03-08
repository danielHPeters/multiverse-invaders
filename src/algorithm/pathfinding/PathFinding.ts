import Location, { Direction, Status } from './Location'
import Point from '../../lib/math/Point'

/**
 * Path finding algorithm class.
 *
 * @version 1.0
 */
export default class PathFinding {
  grid

  constructor () {
    this.grid = []
  }

  /**
   *
   * @param {number} height
   * @param {number} width
   */
  public init (height: number, width: number): void {
    for (let i = 0; i < height; i++) {
      this.grid[i] = []
      for (let j = 0; j < width; j++) {
        this.grid[i][j] = Status.EMPTY
      }
    }
  }

  /**
   *
   * @param {Point} startPoint
   * @returns {Location | boolean}
   */
  public findShortestPath (startPoint: Point): Location | boolean {
    let startLocation = new Location(startPoint, [], Status.START)
    let queue = [startLocation]
    let found = false

    while (queue.length > 0 && !found) {
      let currentLocation = queue.shift()

      Object.keys(Direction).filter(key => isNaN(Number(Direction[key]))).forEach(key => {
        if (!found) {
          const newLocation = this.exploreDirection(currentLocation, Direction[key], this.grid)
          if (newLocation.status === Status.GOAL) {
            found = newLocation.path
          } else if (newLocation.status === Status.VALID) {
            queue.push(newLocation)
          }
        } else {
          console.log(found)
        }
      })
    }

    return found
  }

  /**
   *
   * @param {Location} location
   * @param grid
   * @returns {Status}
   */
  private getLocationStatus (location: Location, grid): Status {
    let gridSize = grid.length
    let top = location.position.y
    let left = location.position.x

    if (left < 0 || left >= gridSize || top < 0 || top >= gridSize) {
      // location is not on the grid--return false
      return Status.INVALID
    } else if (grid[top][left] === Status.GOAL) {
      return Status.GOAL
    } else if (grid[top][left] !== Status.EMPTY) {
      // location is either an obstacle or has been visited
      return Status.BLOCKED
    } else {
      return Status.VALID
    }
  }

  /**
   *
   * @param {Location} currentLocation
   * @param {Direction} direction
   * @param grid
   * @returns {Location}
   */
  private exploreDirection (currentLocation: Location, direction: Direction, grid): Location {
    let newPath = currentLocation.path.slice()
    let x = currentLocation.position.x
    let y = currentLocation.position.y

    newPath.push(direction)

    switch (direction) {
      case Direction.NORTH:
        y -= 1
        break
      case Direction.EAST:
        x += 1
        break
      case Direction.SOUTH:
        y += 1
        break
      case Direction.WEST:
        x -= 1
        break
      default:
        throw new Error('Internal Application error.')
    }

    let newLocation = new Location(new Point(x, y), newPath)
    newLocation.status = this.getLocationStatus(newLocation, grid)

    // If this new location is valid, mark it as 'Visited'
    if (newLocation.status === Status.VALID) {
      grid[newLocation.position.y][newLocation.position.x] = Status.VISITED
    }

    return newLocation
  }
}
