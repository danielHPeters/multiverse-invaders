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
/******/ 	return __webpack_require__(__webpack_require__.s = 56);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = __webpack_require__(6);
var Actions;
(function (Actions) {
    Actions["UP"] = "UP";
    Actions["DOWN"] = "DOWN";
    Actions["LEFT"] = "LEFT";
    Actions["RIGHT"] = "RIGHT";
    Actions["SHOOT"] = "SHOOT";
    Actions["RESTART"] = "RESTART";
    Actions["ROTATE_LEFT"] = "R-LEFT";
    Actions["ROTATE_RIGHT"] = "R-RIGHT";
})(Actions = exports.Actions || (exports.Actions = {}));
class InputManager extends Observable_1.default {
    constructor(settings) {
        super();
        this.inputMap = settings.keyBoard;
        this.init();
        this.initializeTouchHandler();
        this.touches = {
            start: [],
            move: []
        };
    }
    init() {
        window.addEventListener('keydown', event => {
            let key = event.key !== ' ' ? event.key : 'space';
            this.state[this.inputMap[key]] = true;
            this.notify();
        });
        window.addEventListener('keyup', event => {
            let key = event.key !== ' ' ? event.key : 'space';
            this.state[this.inputMap[key]] = false;
            this.notify();
        });
    }
    initializeTouchHandler() {
        let button = document.getElementById('move');
        let el = button ? button : window;
        el.addEventListener('touchstart', handleTouchStart, false);
        el.addEventListener('touchmove', handleTouchMove, false);
        el.addEventListener('touchend', handleTouchEnd, false);
        el.addEventListener('contextmenu', event => {
            event.preventDefault();
            return false;
        });
        let start = [];
        let move = [];
        let touchstartX = 0;
        let touchstartY = 0;
        let toucheMoveX = 0;
        let touchMoveY = 0;
        let thisInstance = this;
        function handleTouchStart(evt) {
            evt.preventDefault();
            start = evt.touches;
            touchstartX = evt.touches[0].pageX;
            touchstartY = evt.touches[0].pageY;
        }
        function handleTouchMove(evt) {
            thisInstance.reset();
            evt.preventDefault();
            move = evt.changedTouches;
            toucheMoveX = evt.touches[0].pageX;
            touchMoveY = evt.touches[0].pageY;
            for (let i = 0; i < evt.touches.length; i++) {
                if (move[i].pageX < start[i].pageX) {
                    thisInstance.state[thisInstance.inputMap['a']] = true;
                }
                if (move[i].pageX > start[i].pageX) {
                    thisInstance.state[thisInstance.inputMap['d']] = true;
                }
                if (move[i].pageY < start[i].pageY) {
                    thisInstance.state[thisInstance.inputMap['w']] = true;
                }
                if (move[i].pageY > start[i].pageY) {
                    thisInstance.state[thisInstance.inputMap['s']] = true;
                }
                thisInstance.notify();
            }
        }
        function handleTouchEnd(evt) {
            evt.preventDefault();
            thisInstance.reset();
        }
    }
    shoot() {
        this.state[this.inputMap['space']] = true;
    }
    cancelShoot() {
        this.state[this.inputMap['space']] = false;
    }
    reset() {
        this.state[this.inputMap['w']] = false;
        this.state[this.inputMap['a']] = false;
        this.state[this.inputMap['s']] = false;
        this.state[this.inputMap['d']] = false;
    }
}
exports.default = InputManager;


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static addVector(v1, v2) {
        return new Vector2(v1.x + v2.x, v1.y + v2.y);
    }
    static subtractVector(v1, v2) {
        return new Vector2(v1.x - v2.x, v1.y - v2.y);
    }
    static multiply(vector, scalar) {
        return new Vector2(vector.x * scalar, vector.y * scalar);
    }
    static divide(vector, scalar) {
        if (scalar === 0) {
            throw new Error('cannot divide vector by scalar with value "0"');
        }
        return new Vector2(vector.x / scalar, vector.y / scalar);
    }
    set x(x) {
        this._x = x;
    }
    set y(y) {
        this._y = y;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    set(x, y) {
        this.x = x;
        this.y = y;
    }
    setVector(vector) {
        this.x = vector.x;
        this.y = vector.y;
    }
    add(x, y) {
        this.x += x;
        this.y += y;
    }
    addVector(vector) {
        this.x += vector.x;
        this.y += vector.y;
    }
    subtract(x, y) {
        this.x -= x;
        this.y -= y;
    }
    subtractVector(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
    }
    multiply(scalar) {
        this.x *= scalar;
        this.y *= scalar;
    }
    divide(scalar) {
        if (scalar === 0) {
            throw new Error('cannot divide vector by "0"');
        }
        this.x /= scalar;
        this.y /= scalar;
    }
    mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    negative() {
        return new Vector2(-this.x, -this.y);
    }
    normalize() {
        let magnitude = this.mag();
        if (magnitude !== 0) {
            this.divide(magnitude);
        }
    }
    limit(max) {
        if (Math.floor(this.mag()) > max) {
            this.normalize();
            this.multiply(max);
        }
    }
    distanceTo(vector) {
        return Math.sqrt(Math.pow(vector.x - this.x, 2) + Math.pow(vector.y - this.y, 2));
    }
    dot(vector) {
        return this.x * vector.x + this.y * vector.y;
    }
    floor() {
        this.x = Math.floor(this.x);
        this.x = Math.floor(this.x);
    }
    clone() {
        return new Vector2(this.x, this.y);
    }
}
exports.default = Vector2;


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EntityType;
(function (EntityType) {
    EntityType["PLAYER"] = "ship";
    EntityType["ENEMY"] = "enemy";
    EntityType["ENEMY_BULLET"] = "bulletEnemy";
    EntityType["PLAYER_BULLET"] = "bullet";
    EntityType["BACKGROUND"] = "background";
    EntityType["MAP"] = "map";
    EntityType["GAME_OVER"] = "gameOver";
    EntityType["LASER"] = "laser";
    EntityType["MAIN_THEME"] = "shockWave";
    EntityType["EXPLOSION_I"] = "explosion1";
    EntityType["EXPLOSION_II"] = "explosion2";
    EntityType["BOX"] = "box";
    EntityType["ARENA"] = "arena";
})(EntityType = exports.EntityType || (exports.EntityType = {}));


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Tetris_1 = __webpack_require__(57);
const InputManager_1 = __webpack_require__(0);
const Settings_1 = __webpack_require__(7);
const Piece_1 = __webpack_require__(60);
const settings = new Settings_1.default();
const inputManager = new InputManager_1.default(settings);
const canvas = document.getElementById('tetris');
const tetris = new Tetris_1.default(canvas);
tetris.addPlayer('p1', 'Daniel', new Piece_1.default(tetris.arena.matrix.mArray[0].length / 2, 0));
inputManager.register(tetris.players[0]);
tetris.start();


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = __webpack_require__(58);
const Arena_1 = __webpack_require__(59);
const colors = [
    null,
    '#FF0D72',
    '#0DC2FF',
    '#0DFF72',
    '#F538FF',
    '#FF8E0D',
    '#FFE138',
    '#3877FF'
];
class Tetris {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.playing = false;
        this.arena = new Arena_1.default();
        this.players = [];
        this.lastTime = 0;
        this.context.scale(20, 20);
    }
    addPlayer(playerId, playerName, piece) {
        this.players.push(new Player_1.default(playerId, playerName, piece, this.arena));
    }
    start() {
        this.playing = true;
        this.run();
    }
    drawMatrix(context, matrix, offset) {
        matrix.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    context.fillStyle = colors[value];
                    context.fillRect(x + offset.x, y + offset.y, 1, 1);
                }
            });
        });
    }
    animationCallback(timeStamp) {
        const deltaTime = timeStamp - this.lastTime;
        this.lastTime = timeStamp;
        this.update(deltaTime);
        this.render();
        requestAnimationFrame(this.animationCallback.bind(this));
    }
    update(deltaTime) {
        this.players.forEach(player => {
            player.piece.dropCounter += deltaTime;
            if (player.piece.dropCounter > player.piece.dropInterval) {
                player.piece.drop(this.arena, player);
            }
        });
    }
    render() {
        this.context.fillStyle = '#000';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawMatrix(this.context, this.arena.matrix.mArray, this.arena.postition);
        this.drawMatrix(this.context, this.players[0].piece.matrix.mArray, this.players[0].piece.position);
    }
    run() {
        requestAnimationFrame(this.animationCallback.bind(this));
    }
    stop() {
    }
}
exports.default = Tetris;


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const InputManager_1 = __webpack_require__(0);
class Player {
    constructor(id, name, piece, arena) {
        this.id = id;
        this.name = name;
        this.score = 0;
        this.state = {};
        this.piece = piece;
        this.arena = arena;
    }
    update(state) {
        this.state = state;
        this.move(this.arena);
    }
    move(arena) {
        if (this.state[InputManager_1.Actions.LEFT]) {
            this.piece.move(-1);
        }
        if (this.state[InputManager_1.Actions.RIGHT]) {
            this.piece.move(1);
        }
        if (this.state[InputManager_1.Actions.DOWN]) {
            this.piece.drop(arena, this);
        }
        if (this.state[InputManager_1.Actions.ROTATE_LEFT]) {
            this.piece.rotate(arena, this, -1);
        }
        if (this.state[InputManager_1.Actions.ROTATE_RIGHT]) {
            this.piece.rotate(arena, this, 1);
        }
    }
}
exports.default = Player;


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Matrix_1 = __webpack_require__(9);
const Vector2_1 = __webpack_require__(1);
class Arena {
    constructor() {
        this.postition = new Vector2_1.default(0, 0);
        this.init(12, 20);
    }
    init(width, height) {
        const array = [];
        while (height--) {
            array.push(new Array(width).fill(0));
        }
        this.matrix = new Matrix_1.default(array);
    }
    sweep(player) {
        let rowCount = 1;
        outer: for (let y = this.matrix.mArray.length - 1; y > 0; --y) {
            for (let x = 0; x < this.matrix.mArray[y].length; ++x) {
                if (this.matrix.mArray[y][x] === 0) {
                    continue outer;
                }
            }
            const row = this.matrix.mArray.splice(y, 1)[0].fill(0);
            this.matrix.mArray.unshift(row);
            ++y;
            player.score += rowCount * 10;
            rowCount *= 2;
        }
    }
    merge(player) {
        player.piece.matrix.mArray.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    this.matrix.mArray[y + player.piece.position.y][x + player.piece.position.x] = value;
                }
            });
        });
    }
}
exports.default = Arena;


/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Observable {
    constructor() {
        this._observers = [];
        this._state = {};
    }
    register(observer) {
        this._observers.push(observer);
    }
    unRegister(observer) {
        this._observers = this._observers.filter(obs => {
            return obs !== observer;
        });
    }
    notify() {
        this._observers.forEach(observer => {
            observer.update(this._state);
        });
    }
    get observers() {
        return this._observers;
    }
    set observers(observers) {
        this._observers = observers;
    }
    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }
}
exports.default = Observable;


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Matrix_1 = __webpack_require__(9);
const Vector2_1 = __webpack_require__(1);
const CollideAble_1 = __webpack_require__(2);
const MatrixCollisionManager_1 = __webpack_require__(61);
exports.types = {
    I: [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0]
    ],
    L: [
        [0, 2, 0],
        [0, 2, 0],
        [0, 2, 2]
    ],
    J: [
        [0, 3, 0],
        [0, 3, 0],
        [3, 3, 0]
    ],
    O: [
        [4, 4],
        [4, 4]
    ],
    Z: [
        [5, 5, 0],
        [0, 5, 5],
        [0, 0, 0]
    ],
    S: [
        [0, 6, 6],
        [6, 6, 0],
        [0, 0, 0]
    ],
    T: [
        [0, 7, 0],
        [7, 7, 7],
        [0, 0, 0]
    ]
};
class Piece {
    constructor(x, y) {
        this.position = new Vector2_1.default(x, y);
        this.matrix = new Matrix_1.default([[0]]);
        this.setRandom();
        this.collidesWith = [];
        this.collidesWith.push(CollideAble_1.EntityType.ARENA);
        this.colliding = false;
        this.dropCounter = 0;
        this.dropInterval = 1000;
    }
    move(offset) {
        this.position.add(offset, 0);
    }
    rotate(arena, player, direction) {
        const pos = player.piece.position.x;
        let offset = 1;
        this.matrix.rotate(direction);
        while (MatrixCollisionManager_1.default.detectCollision(arena, player)) {
            player.piece.position.x += offset;
            offset = -(offset + (offset > 0 ? 1 : -1));
            if (offset > player.piece.matrix.mArray[0].length) {
                player.piece.matrix.rotate(-direction);
                player.piece.position.x = pos;
                return;
            }
        }
    }
    drop(arena, player) {
        this.position.add(0, 1);
        if (MatrixCollisionManager_1.default.detectCollision(arena, player)) {
            this.position.add(0, -1);
            arena.merge(player);
            this.reset(arena, player);
            arena.sweep(player);
        }
        this.dropCounter = 0;
    }
    isCollideAbleWith(other) {
        return this.collidesWith.includes(other.type.toString());
    }
    setRandom() {
        const pieces = 'TJLOSZI';
        this.matrix.set(exports.types[pieces[pieces.length * Math.random() | 0]]);
    }
    reset(arena, player) {
        this.setRandom();
        this.position.set((arena.matrix.mArray[0].length / 2 | 0) - (this.matrix.mArray[0].length / 2 | 0), 0);
        if (MatrixCollisionManager_1.default.detectCollision(arena, player)) {
            arena.matrix.mArray.forEach(row => row.fill(0));
            player.score = 0;
        }
    }
}
exports.default = Piece;


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class MatrixCollisionManager {
    static detectCollision(arena, player) {
        const arenaMatrix = arena.matrix.mArray;
        const m = player.piece.matrix.mArray;
        const o = player.piece.position;
        for (let y = 0; y < m.length; ++y) {
            for (let x = 0; x < m[y].length; ++x) {
                if (m[y][x] !== 0 &&
                    (arenaMatrix[y + o.y] &&
                        arenaMatrix[y + o.y][x + o.x]) !== 0) {
                    return true;
                }
            }
        }
        return false;
    }
}
exports.default = MatrixCollisionManager;


/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const InputManager_1 = __webpack_require__(0);
class Settings {
    constructor() {
        this.keyBoard = {
            'w': InputManager_1.Actions.UP,
            's': InputManager_1.Actions.DOWN,
            'a': InputManager_1.Actions.LEFT,
            'd': InputManager_1.Actions.RIGHT,
            'space': InputManager_1.Actions.SHOOT,
            'r': InputManager_1.Actions.RESTART,
            'q': InputManager_1.Actions.ROTATE_LEFT,
            'e': InputManager_1.Actions.ROTATE_RIGHT
        };
        this.player = {
            maxVelocity: 15,
            fireDelay: 15,
            friction: 0.7,
            acceleration: 3
        };
        this.audio = {
            master: 1,
            ambient: 1,
            effects: 1
        };
    }
    findKey(value) {
        return Object.keys(this.keyBoard).filter(key => this.keyBoard[key] === value)[0];
    }
    setKey(newKey, action) {
        let oldKey = this.findKey(action);
        if (newKey !== oldKey) {
            console.log('old:' + oldKey, ' new: ' + newKey + ' value: ' + action);
            this.keyBoard[newKey] = this.keyBoard[oldKey];
            delete this.keyBoard[oldKey];
        }
    }
}
exports.default = Settings;


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Matrix {
    constructor(mArray) {
        this.mArray = mArray;
        this.rows = mArray.length;
        this.columns = mArray[0].length;
    }
    set(array) {
        const length = array[0].length;
        let valid = true;
        for (let i = 1; i < array.length; i++) {
            if (array[i].length !== length) {
                valid = false;
            }
        }
        if (valid) {
            this.rows = array.length;
            this.columns = array[0].length;
            this.mArray = array;
        }
        else {
            throw new Error('The passed matrix array is malformed: ' + array);
        }
    }
    add(matrix) {
        if (this.equals(matrix)) {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.columns; j++) {
                    this.mArray[i][j] += matrix.mArray[i][j];
                }
            }
        }
    }
    subtract(matrix) {
        if (this.equals(matrix)) {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.columns; j++) {
                    this.mArray[i][j] -= matrix.mArray[i][j];
                }
            }
        }
    }
    multiply(matrix) {
        let newArray = [];
        if (this.columns === matrix.rows) {
            for (let i = 0; i < this.rows; i++) {
                newArray[i] = [];
                for (let j = 0; j < matrix.columns; j++) {
                    let val = 0;
                    for (let k = 0; k < this.columns; k++) {
                        val += this.mArray[i][k] * matrix.mArray[k][j];
                    }
                    newArray[i].push(val);
                }
            }
        }
        else {
            return null;
        }
        return new Matrix(newArray);
    }
    multScalar(scalar) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                this.mArray[i][j] *= scalar;
            }
        }
    }
    transpose() {
        let array = [];
        for (let i = 0; i < this.columns; i++) {
            array[i] = [];
            for (let j = 0; j < this.rows; j++) {
                array[i][j] = this.mArray[j][i];
            }
        }
        this.rows = array.length;
        this.columns = array[0].length;
        this.mArray = array;
    }
    rotate(direction) {
        this.transpose();
        if (direction > 0) {
            this.mArray.forEach(row => row.reverse());
        }
        else {
            this.mArray.reverse();
        }
    }
    equals(other) {
        return other.rows === this.rows && other.columns === this.columns;
    }
    clone() {
        let array = [];
        this.mArray.forEach(arr => array.push(arr.slice(0)));
        return new Matrix(Array.from(array));
    }
}
exports.default = Matrix;


/***/ })

/******/ });
//# sourceMappingURL=tetris.js.map