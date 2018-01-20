import { Status } from './Location'
import Point from '../../lib/math/Point'
import PathFinding from './PathFinding'
import Visualisation from './gui/Visualization'

const algorithm = new PathFinding()
algorithm.init(8, 4)
algorithm.grid[0][0] = Status.START
algorithm.grid[2][2] = Status.GOAL

algorithm.grid[1][1] = Status.OBSTACLE
algorithm.grid[1][2] = Status.OBSTACLE

algorithm.grid[2][1] = Status.OBSTACLE
algorithm.grid[3][1] = Status.OBSTACLE
algorithm.grid[4][1] = Status.OBSTACLE

console.log(algorithm.findShortestPath(new Point(0, 0)))

const gui = new Visualisation(algorithm.grid, document.getElementById('grid'))

gui.init()
