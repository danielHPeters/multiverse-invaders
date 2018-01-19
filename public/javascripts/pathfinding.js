/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction["NORTH"] = "North";
    Direction["EAST"] = "East";
    Direction["SOUTH"] = "South";
    Direction["WEST"] = "West";
})(Direction = exports.Direction || (exports.Direction = {}));
var Status;
(function (Status) {
    Status["START"] = "start";
    Status["VALID"] = "valid";
    Status["INVALID"] = "invalid";
    Status["BLOCKED"] = "blocked";
    Status["UNKNOWN"] = "unknown";
    Status["OBSTACLE"] = "obstacle";
    Status["EMPTY"] = "empty";
    Status["VISITED"] = "visited";
    Status["GOAL"] = "goal";
})(Status = exports.Status || (exports.Status = {}));
class Location {
    constructor(position, path = [], status = Status.UNKNOWN) {
        this.position = position;
        this.path = path;
        this.status = status;
    }
}
exports.default = Location;


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Location_1 = __webpack_require__(16);
const Point_1 = __webpack_require__(5);
const PathFinding_1 = __webpack_require__(46);
const Visualization_1 = __webpack_require__(47);
const algorithm = new PathFinding_1.default();
algorithm.init(8, 4);
algorithm.grid[0][0] = Location_1.Status.START;
algorithm.grid[2][2] = Location_1.Status.GOAL;
algorithm.grid[1][1] = Location_1.Status.OBSTACLE;
algorithm.grid[1][2] = Location_1.Status.OBSTACLE;
algorithm.grid[2][1] = Location_1.Status.OBSTACLE;
algorithm.grid[3][1] = Location_1.Status.OBSTACLE;
algorithm.grid[4][1] = Location_1.Status.OBSTACLE;
console.log(algorithm.findShortestPath(new Point_1.default(0, 0)));
const gui = new Visualization_1.default(algorithm.grid, document.getElementById('grid'));
gui.init();


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Location_1 = __webpack_require__(16);
const Point_1 = __webpack_require__(5);
class PathFinding {
    constructor() {
        this.grid = [];
    }
    init(height, width) {
        for (let i = 0; i < height; i++) {
            this.grid[i] = [];
            for (let j = 0; j < width; j++) {
                this.grid[i][j] = Location_1.Status.EMPTY;
            }
        }
    }
    findShortestPath(startPoint) {
        let startLocation = new Location_1.default(startPoint, [], Location_1.Status.START);
        let queue = [startLocation];
        let found = false;
        while (queue.length > 0 && !found) {
            let currentLocation = queue.shift();
            Object.keys(Location_1.Direction).filter(key => isNaN(Number(Location_1.Direction[key]))).forEach(key => {
                if (!found) {
                    const newLocation = this.exploreDirection(currentLocation, Location_1.Direction[key], this.grid);
                    if (newLocation.status === Location_1.Status.GOAL) {
                        found = newLocation.path;
                    }
                    else if (newLocation.status === Location_1.Status.VALID) {
                        queue.push(newLocation);
                    }
                }
                else {
                    console.log(found);
                }
            });
        }
        return found;
    }
    getLocationStatus(location, grid) {
        let gridSize = grid.length;
        let top = location.position.y;
        let left = location.position.x;
        if (left < 0 || left >= gridSize || top < 0 || top >= gridSize) {
            return Location_1.Status.INVALID;
        }
        else if (grid[top][left] === Location_1.Status.GOAL) {
            return Location_1.Status.GOAL;
        }
        else if (grid[top][left] !== Location_1.Status.EMPTY) {
            return Location_1.Status.BLOCKED;
        }
        else {
            return Location_1.Status.VALID;
        }
    }
    exploreDirection(currentLocation, direction, grid) {
        let newPath = currentLocation.path.slice();
        let x = currentLocation.position.x;
        let y = currentLocation.position.y;
        newPath.push(direction);
        switch (direction) {
            case Location_1.Direction.NORTH:
                y -= 1;
                break;
            case Location_1.Direction.EAST:
                x += 1;
                break;
            case Location_1.Direction.SOUTH:
                y += 1;
                break;
            case Location_1.Direction.WEST:
                x -= 1;
                break;
            default:
                throw new Error('Internal Application error.');
        }
        let newLocation = new Location_1.default(new Point_1.default(x, y), newPath);
        newLocation.status = this.getLocationStatus(newLocation, grid);
        if (newLocation.status === Location_1.Status.VALID) {
            grid[newLocation.position.y][newLocation.position.x] = Location_1.Status.VISITED;
        }
        return newLocation;
    }
}
exports.default = PathFinding;


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Visualisation {
    constructor(grid, element) {
        this.grid = grid;
        this.element = element;
    }
    init() {
        this.grid.forEach((row) => {
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('row');
            this.element.appendChild(rowDiv);
            row.forEach((column) => {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.classList.add(column);
                rowDiv.appendChild(cell);
            });
        });
    }
    clear() {
        while (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild);
        }
    }
}
exports.default = Visualisation;


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    set(x, y) {
        this.x = x;
        this.y = y;
    }
    setPoint(point) {
        this.x = point.x;
        this.y = point.y;
    }
    clone() {
        return new Point(this.x, this.y);
    }
}
exports.default = Point;


/***/ })

/******/ });
//# sourceMappingURL=pathfinding.js.map