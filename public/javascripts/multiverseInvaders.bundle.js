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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EntityType;
(function (EntityType) {
    EntityType["PLAYER"] = "ship";
    EntityType["ENEMY"] = "enmey";
    EntityType["ENEMY_BULLET"] = "bulletEnemy";
    EntityType["PLAYER_BULLET"] = "bullet";
    EntityType["BACKGROUND"] = "background";
})(EntityType = exports.EntityType || (exports.EntityType = {}));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(4);
var Actions;
(function (Actions) {
    Actions["UP"] = "UP";
    Actions["DOWN"] = "DOWN";
    Actions["LEFT"] = "LEFT";
    Actions["RIGHT"] = "RIGHT";
    Actions["SHOOT"] = "SHOOT";
})(Actions = exports.Actions || (exports.Actions = {}));
var InputManager = (function (_super) {
    __extends(InputManager, _super);
    function InputManager(settings) {
        var _this = _super.call(this) || this;
        _this.inputMap = settings.keyBoard;
        _this.init();
        return _this;
    }
    InputManager.prototype.init = function () {
        var _this = this;
        window.addEventListener('keydown', function (event) {
            _this.state[_this.inputMap[event.key]] = true;
            _this.notify();
        });
        window.addEventListener('keyup', function (event) {
            _this.state[_this.inputMap[event.key]] = false;
            _this.notify();
        });
    };
    InputManager.prototype.reset = function () {
        var _this = this;
        Object.keys(this.state).forEach(function (key) { return _this.state[key] = false; });
    };
    return InputManager;
}(Observable_1.Observable));
exports.InputManager = InputManager;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vector2 = (function () {
    function Vector2(x, y) {
        this.x = x;
        this.y = y;
    }
    Vector2.addVector = function (v1, v2) {
        return new Vector2(v1.x + v2.x, v1.y + v2.y);
    };
    Vector2.subtractVector = function (v1, v2) {
        return new Vector2(v1.x - v2.x, v1.y - v2.y);
    };
    Vector2.multiply = function (vector, scalar) {
        return new Vector2(vector.x * scalar, vector.y * scalar);
    };
    Vector2.divide = function (vector, scalar) {
        if (scalar === 0) {
            throw new Error('cannot divide vector by scalar with value "0"');
        }
        return new Vector2(vector.x / scalar, vector.y / scalar);
    };
    Object.defineProperty(Vector2.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: true,
        configurable: true
    });
    Vector2.prototype.set = function (x, y) {
        this.x = x;
        this.y = y;
    };
    Vector2.prototype.setVector = function (vector) {
        this.x = vector.x;
        this.y = vector.y;
    };
    Vector2.prototype.add = function (x, y) {
        this.x += x;
        this.y += y;
    };
    Vector2.prototype.addVector = function (vector) {
        this.x += vector.x;
        this.y += vector.y;
    };
    Vector2.prototype.subtract = function (x, y) {
        this.x -= x;
        this.y -= y;
    };
    Vector2.prototype.subtractVector = function (vector) {
        this.x -= vector.x;
        this.y -= vector.y;
    };
    Vector2.prototype.multiply = function (scalar) {
        this.x *= scalar;
        this.y *= scalar;
    };
    Vector2.prototype.divide = function (scalar) {
        if (scalar === 0) {
            throw new Error('cannot divide vector by "0"');
        }
        this.x /= scalar;
        this.y /= scalar;
    };
    Vector2.prototype.mag = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Vector2.prototype.negative = function () {
        return new Vector2(-this.x, -this.y);
    };
    Vector2.prototype.normalize = function () {
        var magnitude = this.mag();
        if (magnitude !== 0) {
            this.divide(magnitude);
        }
    };
    Vector2.prototype.limit = function (max) {
        if (Math.floor(this.mag()) > max) {
            this.normalize();
            this.multiply(max);
        }
    };
    Vector2.prototype.distanceTo = function (vector) {
        return Math.sqrt(Math.pow(vector.x - this.x, 2) + Math.pow(vector.y - this.y, 2));
    };
    Vector2.prototype.dot = function (vector) {
        return this.x * vector.x + this.y * vector.y;
    };
    Vector2.prototype.clone = function () {
        return new Vector2(this.x, this.y);
    };
    return Vector2;
}());
exports.Vector2 = Vector2;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AssetType;
(function (AssetType) {
    AssetType["SPRITE"] = "SPRITE";
    AssetType["SPRITE_SHEET"] = "SPRITE_SHEET";
    AssetType["AUDIO"] = "AUDIO";
})(AssetType = exports.AssetType || (exports.AssetType = {}));
var AssetManager = (function () {
    function AssetManager() {
        this.cache = {
            sprites: {}
        };
        this.downloadCount = 0;
        this.queue = [];
    }
    AssetManager.prototype.done = function () {
        return this.downloadCount === this.queue.length;
    };
    AssetManager.prototype.queueDownload = function (id, path, type) {
        this.queue.push({ id: id, path: path, type: type });
    };
    AssetManager.prototype.loadSprite = function (id, path, callback) {
        var _this = this;
        var sprite = new Image();
        sprite.addEventListener('load', function () {
            _this.downloadCount++;
            if (_this.done()) {
                callback();
            }
        });
        sprite.src = path;
        this.cache.sprites[id] = sprite;
    };
    AssetManager.prototype.downloadAll = function (callback) {
        var _this = this;
        this.queue.forEach(function (item) {
            if (item.type === AssetType.SPRITE) {
                _this.loadSprite(item.id, item.path, callback);
            }
        });
    };
    AssetManager.prototype.getSprite = function (id) {
        return this.cache.sprites[id];
    };
    return AssetManager;
}());
exports.AssetManager = AssetManager;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable = (function () {
    function Observable() {
        this._observers = [];
        this._state = {};
    }
    Observable.prototype.register = function (observer) {
        this._observers.push(observer);
    };
    Observable.prototype.unRegister = function (observer) {
        this._observers = this._observers.filter(function (obs) {
            return obs !== observer;
        });
    };
    Observable.prototype.notify = function () {
        var _this = this;
        this._observers.forEach(function (observer) {
            observer.update(_this._state);
        });
    };
    Object.defineProperty(Observable.prototype, "observers", {
        get: function () {
            return this._observers;
        },
        set: function (observers) {
            this._observers = observers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Observable.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (state) {
            this._state = state;
        },
        enumerable: true,
        configurable: true
    });
    return Observable;
}());
exports.Observable = Observable;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InputManager_1 = __webpack_require__(1);
var Settings = (function () {
    function Settings() {
        this.keyBoard = {
            'w': InputManager_1.Actions.UP,
            's': InputManager_1.Actions.DOWN,
            'a': InputManager_1.Actions.LEFT,
            'd': InputManager_1.Actions.RIGHT,
            ' ': InputManager_1.Actions.SHOOT
        };
        this.player = {
            maxVelocity: 10,
            fireDelay: 15,
            friction: 0.7,
            acceleration: 2
        };
    }
    Settings.prototype.findKey = function (value) {
        var _this = this;
        return Object.keys(this.keyBoard).filter(function (key) { return _this.keyBoard[key] === value; })[0];
    };
    Settings.prototype.setKey = function (newKey, action) {
        var oldKey = this.findKey(action);
        if (newKey !== oldKey) {
            console.log('old:' + oldKey, ' new: ' + newKey + ' value: ' + action);
            this.keyBoard[newKey] = this.keyBoard[oldKey];
            delete this.keyBoard[oldKey];
        }
    };
    return Settings;
}());
exports.Settings = Settings;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vector2_1 = __webpack_require__(2);
var HitBox = (function () {
    function HitBox(x, y, width, height) {
        this.position = new Vector2_1.Vector2(x, y);
        this.width = width;
        this.height = height;
    }
    return HitBox;
}());
exports.HitBox = HitBox;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AssetManager_1 = __webpack_require__(3);
var Game_1 = __webpack_require__(8);
var InputManager_1 = __webpack_require__(1);
var Settings_1 = __webpack_require__(5);
var SettingsMenu_1 = __webpack_require__(15);
var CollideAble_1 = __webpack_require__(0);
var assetManager = new AssetManager_1.AssetManager();
var canvases = {
    background: document.getElementById('background'),
    ship: document.getElementById('ship'),
    main: document.getElementById('main')
};
var settings = new Settings_1.Settings();
var inputManager = new InputManager_1.InputManager(settings);
var settingsMenu = new SettingsMenu_1.SettingsMenu(document.getElementById('settings-menu'), settings);
assetManager.queueDownload(CollideAble_1.EntityType.BACKGROUND, 'assets/textures/background.png', AssetManager_1.AssetType.SPRITE);
assetManager.queueDownload(CollideAble_1.EntityType.PLAYER, 'assets/sprites/ship.png', AssetManager_1.AssetType.SPRITE);
assetManager.queueDownload(CollideAble_1.EntityType.PLAYER_BULLET, 'assets/sprites/bullet.png', AssetManager_1.AssetType.SPRITE);
assetManager.queueDownload(CollideAble_1.EntityType.ENEMY, 'assets/sprites/enemy.png', AssetManager_1.AssetType.SPRITE);
assetManager.queueDownload(CollideAble_1.EntityType.ENEMY_BULLET, 'assets/sprites/bullet_enemy.png', AssetManager_1.AssetType.SPRITE);
assetManager.downloadAll(function () {
    var game = new Game_1.Game(assetManager, inputManager, settings, canvases);
    document.getElementById('game-over').addEventListener('click', function () {
        game.restart();
    });
    document.getElementById('settings').addEventListener('click', function () {
        console.log('settings');
        settingsMenu.toggleShow();
        game.togglePause();
    });
});


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Background_1 = __webpack_require__(9);
var Ship_1 = __webpack_require__(10);
var Pool_1 = __webpack_require__(11);
var QuadTree_1 = __webpack_require__(14);
var HitBox_1 = __webpack_require__(6);
var CollideAble_1 = __webpack_require__(0);
var Game = (function () {
    function Game(assetManager, inputManager, settings, canvases) {
        this.playing = false;
        this.paused = false;
        this.window = window;
        this.assetManager = assetManager;
        this.inputManager = inputManager;
        this.settings = settings;
        this.canvases = canvases;
        if (this.canvases.background.getContext) {
            this.backgroundContext = this.canvases.background.getContext('2d');
            this.shipContext = this.canvases.ship.getContext('2d');
            this.mainContext = this.canvases.main.getContext('2d');
            this.playerScore = 0;
            this.background = new Background_1.Background(0, 0, this.canvases.background.width, this.canvases.background.height, this.backgroundContext, this.assetManager.getSprite(CollideAble_1.EntityType.BACKGROUND));
            this.shipStartX = this.canvases.ship.width / 2 - assetManager.getSprite(CollideAble_1.EntityType.PLAYER).width;
            this.shipStartY = this.canvases.ship.height / 4 * 3 + assetManager.getSprite(CollideAble_1.EntityType.PLAYER).height * 2;
            this.ship = new Ship_1.Ship(this.shipStartX, this.shipStartY, assetManager.getSprite(CollideAble_1.EntityType.PLAYER).width, assetManager.getSprite(CollideAble_1.EntityType.PLAYER).height, this.canvases.ship.width, this.canvases.ship.height, this.shipContext, assetManager.getSprite(CollideAble_1.EntityType.PLAYER), new Pool_1.Pool(assetManager, this.mainContext, this.canvases.main.width, this.canvases.main.height, 80, CollideAble_1.EntityType.PLAYER_BULLET), settings.player);
            this.enemyBulletPool = new Pool_1.Pool(assetManager, this.mainContext, this.canvases.main.width, this.canvases.main.height, 50, CollideAble_1.EntityType.ENEMY_BULLET);
            this.enemyPool = new Pool_1.Pool(assetManager, this.mainContext, this.canvases.main.width, this.canvases.main.height, 30, CollideAble_1.EntityType.ENEMY, this.enemyBulletPool, this);
            this.spawnWave();
            inputManager.register(this.ship);
            this.quadTree = new QuadTree_1.QuadTree(new HitBox_1.HitBox(0, 0, this.canvases.main.width, this.canvases.main.height));
            this.start();
        }
    }
    Game.prototype.togglePause = function () {
        this.paused = !this.paused;
    };
    Game.prototype.spawnWave = function () {
        var height = this.assetManager.getSprite(CollideAble_1.EntityType.ENEMY).height;
        var width = this.assetManager.getSprite(CollideAble_1.EntityType.ENEMY).width;
        var x = 100;
        var y = -height;
        var spacer = y * 1.5;
        for (var i = 1; i <= 18; i++) {
            this.enemyPool.get(x, y, 2);
            x += width + 25;
            if (i % 6 === 0) {
                x = 100;
                y += spacer;
            }
        }
    };
    Game.prototype.detectCollision = function () {
        var objects = [];
        this.quadTree.getAllObjects(objects);
        for (var i = 0; i < objects.length; i++) {
            var obj = [];
            this.quadTree.findObjects(obj, objects[i]);
            for (var j = 0; j < obj.length; j++) {
                if (objects[i].isCollideAbleWith(obj[j]) &&
                    (objects[i].position.x < obj[j].position.x + obj[j].width &&
                        objects[i].position.x + objects[i].width > obj[j].position.x &&
                        objects[i].position.y < obj[j].position.y + obj[j].height &&
                        objects[i].position.y + objects[i].height > obj[j].position.y)) {
                    objects[i].colliding = true;
                    obj[j].colliding = true;
                }
            }
        }
    };
    Game.prototype.render = function () {
        var _this = this;
        if (this.playing) {
            if (!this.paused) {
                document.getElementById('score').innerHTML = this.playerScore.toString();
                this.quadTree.clear();
                this.quadTree.insert(this.ship);
                this.quadTree.insert(this.ship.pool.getPool());
                this.quadTree.insert(this.enemyPool.getPool());
                this.quadTree.insert(this.enemyBulletPool.getPool());
                this.detectCollision();
                if (this.enemyPool.getPool().length === 0) {
                    this.spawnWave();
                }
                if (this.ship.alive()) {
                    this.background.draw();
                    this.ship.move();
                    this.ship.pool.render();
                    this.enemyPool.render();
                    this.enemyBulletPool.render();
                }
                else {
                    this.playing = false;
                    this.gameOver();
                }
            }
            window.requestAnimationFrame(function () { return _this.render(); });
        }
    };
    Game.prototype.scorePoints = function () {
        this.playerScore += 10;
    };
    Game.prototype.start = function () {
        this.playing = true;
        this.render();
        this.ship.draw();
    };
    Game.prototype.gameOver = function () {
        document.getElementById('game-over').style.display = 'block';
    };
    Game.prototype.restart = function () {
        document.getElementById('game-over').style.display = 'none';
        this.backgroundContext.clearRect(0, 0, this.canvases.background.width, this.canvases.background.height);
        this.shipContext.clearRect(0, 0, this.canvases.ship.width, this.canvases.ship.height);
        this.mainContext.clearRect(0, 0, this.canvases.main.width, this.canvases.main.height);
        this.inputManager.reset();
        this.quadTree.clear();
        this.background.reset();
        this.playerScore = 0;
        this.ship.reset();
        this.enemyBulletPool.clearAll();
        this.enemyPool.clearAll();
        this.ship.pool.clearAll();
        this.start();
    };
    return Game;
}());
exports.Game = Game;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vector2_1 = __webpack_require__(2);
var CollideAble_1 = __webpack_require__(0);
var Background = (function () {
    function Background(x, y, width, height, context, sprite) {
        this.position = new Vector2_1.Vector2(x, y);
        this.speed = 1;
        this.width = width;
        this.height = height;
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.context = context;
        this.sprite = sprite;
        this.type = CollideAble_1.EntityType.BACKGROUND;
    }
    Background.prototype.reset = function () {
        this.position.set(0, 0);
    };
    Background.prototype.draw = function () {
        this.position.y += this.speed;
        this.context.drawImage(this.sprite, this.position.x, this.position.y);
        this.context.drawImage(this.sprite, this.position.x, this.position.y - this.height);
        if (this.position.y >= this.height) {
            this.position.y = 0;
        }
    };
    return Background;
}());
exports.Background = Background;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vector2_1 = __webpack_require__(2);
var CollideAble_1 = __webpack_require__(0);
var InputManager_1 = __webpack_require__(1);
var Ship = (function () {
    function Ship(x, y, width, height, canvasWidth, canvasHeight, context, sprite, pool, settings) {
        this.position = new Vector2_1.Vector2(x, y);
        this.startPosition = new Vector2_1.Vector2(x, y);
        this.acceleration = new Vector2_1.Vector2(0, 0);
        this.velocity = new Vector2_1.Vector2(0, 0);
        this.width = width;
        this.height = height;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.context = context;
        this.sprite = sprite;
        this.type = CollideAble_1.EntityType.PLAYER;
        this.pool = pool;
        this.counter = 0;
        this.collidesWith = [];
        this.collidesWith.push(CollideAble_1.EntityType.ENEMY_BULLET);
        this.colliding = false;
        this.state = {};
        this.settings = settings;
        this.maxTop = Math.floor(this.canvasHeight / 4 * 3);
    }
    Ship.prototype.reset = function () {
        this.position.setVector(this.startPosition);
        this.velocity.set(0, 0);
        this.colliding = false;
    };
    Ship.prototype.move = function () {
        if (!this.colliding) {
            this.counter++;
            this.context.clearRect(Math.floor(this.position.x), Math.floor(this.position.y), this.width, this.height);
            this.acceleration.set(0, 0);
            if (this.state[InputManager_1.Actions.LEFT]) {
                this.acceleration.add(-this.settings.acceleration, 0);
            }
            if (this.state[InputManager_1.Actions.RIGHT]) {
                this.acceleration.add(this.settings.acceleration, 0);
            }
            if (this.state[InputManager_1.Actions.UP]) {
                this.acceleration.add(0, -this.settings.acceleration);
            }
            if (this.state[InputManager_1.Actions.DOWN]) {
                this.acceleration.add(0, this.settings.acceleration);
            }
            this.velocity.multiply(this.settings.friction);
            this.velocity.addVector(this.acceleration);
            this.velocity.limit(this.settings.maxVelocity);
            this.position.addVector(this.velocity);
            this.position.subtractVector(this.acceleration);
            if (this.position.x <= 0) {
                this.position.x = 0;
                this.velocity.x += -1;
            }
            if (this.position.x >= this.canvasWidth - this.width) {
                this.position.x = this.canvasWidth - this.width;
            }
            if (this.position.y <= this.maxTop) {
                this.position.y = this.maxTop;
            }
            if (this.position.y >= this.canvasHeight - this.height) {
                this.position.y = this.canvasHeight - this.height;
            }
            this.draw();
            if (this.state[InputManager_1.Actions.SHOOT] && this.counter >= this.settings.fireDelay && !this.colliding) {
                this.fire();
                this.counter = 0;
            }
        }
    };
    Ship.prototype.alive = function () {
        return !this.colliding;
    };
    Ship.prototype.draw = function () {
        this.context.drawImage(this.sprite, Math.floor(this.position.x), Math.floor(this.position.y));
    };
    Ship.prototype.update = function (state) {
        this.state = state;
    };
    Ship.prototype.fire = function () {
        this.pool.getTwo(Math.floor(this.position.x) + 6, Math.floor(this.position.y), 3, Math.floor(this.position.x) + 33, Math.floor(this.position.y), 3);
    };
    Ship.prototype.isCollideAbleWith = function (other) {
        return this.collidesWith.includes(other.type);
    };
    return Ship;
}());
exports.Ship = Ship;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Bullet_1 = __webpack_require__(12);
var Enemy_1 = __webpack_require__(13);
var CollideAble_1 = __webpack_require__(0);
var Pool = (function () {
    function Pool(assetManager, context, canvasWidth, canvasHeight, maxSize, type, pool, game) {
        if (pool === void 0) { pool = null; }
        if (game === void 0) { game = null; }
        this.assetManager = assetManager;
        this.context = context;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.maxSize = maxSize;
        this.type = type;
        this.pool = [];
        this.subPool = pool;
        this.game = game;
        this.init();
    }
    Pool.prototype.init = function () {
        if (this.type === CollideAble_1.EntityType.ENEMY) {
            for (var i = 0; i < this.maxSize; i++) {
                this.pool[i] = new Enemy_1.Enemy(0, 0, this.assetManager.getSprite(this.type).width, this.assetManager.getSprite(this.type).height, this.canvasWidth, this.canvasHeight, 0, this.context, this.assetManager.getSprite(this.type), this.type, this.subPool, this.game);
            }
        }
        else {
            for (var i = 0; i < this.maxSize; i++) {
                this.pool[i] = new Bullet_1.Bullet(0, 0, this.assetManager.getSprite(this.type).width, this.assetManager.getSprite(this.type).height, this.canvasWidth, this.canvasHeight, 0, this.context, this.assetManager.getSprite(this.type), this.type);
            }
        }
    };
    Pool.prototype.get = function (x, y, speed) {
        var lastElement = this.pool[this.maxSize - 1];
        if (!lastElement.alive) {
            lastElement.spawn(x, y, speed);
            this.pool.unshift(this.pool.pop());
        }
    };
    Pool.prototype.getTwo = function (x1, y1, speed1, x2, y2, speed2) {
        if (!this.pool[this.maxSize - 1].alive &&
            !this.pool[this.maxSize - 2].alive) {
            this.get(x1, y1, speed1);
            this.get(x2, y2, speed2);
        }
    };
    Pool.prototype.render = function () {
        for (var i = 0; i < this.pool.length; i++) {
            if (this.pool[i].alive) {
                if (this.pool[i].draw()) {
                    this.pool[i].clear();
                    this.pool.push((this.pool.splice(i, 1))[0]);
                }
            }
            else {
                break;
            }
        }
    };
    Pool.prototype.clearAll = function () {
        this.pool.forEach(function (object) { return object.clear(); });
    };
    Pool.prototype.getPool = function () {
        var objects = [];
        this.pool.forEach(function (object) {
            if (object.alive) {
                objects.push(object);
            }
        });
        return objects;
    };
    return Pool;
}());
exports.Pool = Pool;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vector2_1 = __webpack_require__(2);
var CollideAble_1 = __webpack_require__(0);
var Bullet = (function () {
    function Bullet(x, y, width, height, canvasWidth, canvasHeight, speed, context, sprite, type) {
        this.position = new Vector2_1.Vector2(x, y);
        this.speed = speed;
        this.width = width;
        this.height = height;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.context = context;
        this.sprite = sprite;
        this.alive = false;
        this.type = type;
        this.colliding = false;
        this.collidesWith = [];
        if (this.type === CollideAble_1.EntityType.PLAYER_BULLET) {
            this.collidesWith.push(CollideAble_1.EntityType.ENEMY);
        }
        else if (this.type === CollideAble_1.EntityType.ENEMY_BULLET) {
            this.collidesWith.push(CollideAble_1.EntityType.PLAYER);
        }
    }
    Bullet.prototype.spawn = function (x, y, speed) {
        this.position.set(x, y);
        this.speed = speed;
        this.alive = true;
    };
    Bullet.prototype.draw = function () {
        this.context.clearRect(this.position.x - 1, this.position.y - 1, this.width + 1, this.height + 1);
        this.position.y -= this.speed;
        if (this.colliding) {
            return true;
        }
        else if (this.type === CollideAble_1.EntityType.PLAYER_BULLET && this.position.y <= 0 - this.height) {
            return true;
        }
        else if (this.type === CollideAble_1.EntityType.ENEMY_BULLET && this.position.y >= this.canvasHeight) {
            return true;
        }
        else {
            this.context.drawImage(this.sprite, this.position.x, this.position.y);
            return false;
        }
    };
    Bullet.prototype.clear = function () {
        this.position.set(0, 0);
        this.speed = 0;
        this.alive = false;
        this.colliding = false;
    };
    Bullet.prototype.isCollideAbleWith = function (other) {
        return this.collidesWith.includes(other.type);
    };
    return Bullet;
}());
exports.Bullet = Bullet;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vector2_1 = __webpack_require__(2);
var CollideAble_1 = __webpack_require__(0);
var Enemy = (function () {
    function Enemy(x, y, width, height, canvasWidth, canvasHeight, speed, context, sprite, type, bulletPool, game) {
        this.position = new Vector2_1.Vector2(x, y);
        this.width = width;
        this.height = height;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.speed = speed;
        this.context = context;
        this.sprite = sprite;
        this.percentFire = 0.001;
        this.chance = 0;
        this.alive = false;
        this.type = type;
        this.collidesWith = [];
        this.collidesWith.push(CollideAble_1.EntityType.PLAYER_BULLET);
        this.colliding = false;
        this.bulletPool = bulletPool;
        this.game = game;
    }
    Enemy.prototype.spawn = function (x, y, speed) {
        this.position.x = x;
        this.position.y = y;
        this.speed = speed;
        this.speedX = 0;
        this.speedY = speed;
        this.alive = true;
        this.leftEdge = this.position.x - 90;
        this.rightEdge = this.position.x + 90;
        this.bottomEdge = this.position.y + 140;
    };
    Enemy.prototype.draw = function () {
        this.context.clearRect(this.position.x - 1, this.position.y, this.width + 1, this.height);
        this.position.x += this.speedX;
        this.position.y += this.speedY;
        if (this.position.x <= this.leftEdge) {
            this.speedX = this.speed;
        }
        else if (this.position.x >= this.rightEdge + this.width) {
            this.speedX = -this.speed;
        }
        else if (this.position.y >= this.bottomEdge) {
            this.speed = 1.5;
            this.speedY = 0;
            this.position.y -= 5;
            this.speedX = -this.speed;
        }
        if (!this.colliding) {
            this.context.drawImage(this.sprite, this.position.x, this.position.y);
            this.chance = Math.floor(Math.random() * 101);
            if (this.chance / 100 < this.percentFire) {
                this.fire();
            }
            return false;
        }
        else {
            this.game.scorePoints();
            return true;
        }
    };
    Enemy.prototype.fire = function () {
        this.bulletPool.get(Math.floor(this.position.x + this.width / 2), Math.floor(this.position.y + this.height), -2.5);
    };
    Enemy.prototype.clear = function () {
        this.position.x = 0;
        this.position.y = 0;
        this.speed = 0;
        this.speedX = 0;
        this.speedY = 0;
        this.alive = false;
        this.colliding = false;
    };
    Enemy.prototype.isCollideAbleWith = function (other) {
        return this.collidesWith.includes(other.type);
    };
    return Enemy;
}());
exports.Enemy = Enemy;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HitBox_1 = __webpack_require__(6);
var QuadTree = (function () {
    function QuadTree(hitBox, level) {
        if (hitBox === void 0) { hitBox = new HitBox_1.HitBox(0, 0, 0, 0); }
        if (level === void 0) { level = 0; }
        this.level = level;
        this.maxObjects = 10;
        this.maxLevels = 5;
        this.hitBox = hitBox;
        this.objects = [];
        this.nodes = [];
    }
    QuadTree.prototype.clear = function () {
        this.objects = [];
        this.nodes.forEach(function (node) { return node.clear(); });
        this.nodes = [];
    };
    QuadTree.prototype.getAllObjects = function (returnedObjects) {
        this.nodes.forEach(function (node) { return node.getAllObjects(returnedObjects); });
        this.objects.forEach(function (object) { return returnedObjects.push(object); });
        return returnedObjects;
    };
    QuadTree.prototype.findObjects = function (returnedObjects, object) {
        if (typeof object === 'undefined') {
            console.log('UNDEFINED OBJECT');
            return;
        }
        var index = this.getIndex(object);
        if (index !== -1 && this.nodes.length) {
            this.nodes[index].findObjects(returnedObjects, object);
        }
        this.objects.forEach(function (obj) { return returnedObjects.push(obj); });
        return returnedObjects;
    };
    QuadTree.prototype.insert = function (object) {
        var _this = this;
        if (typeof object === 'undefined') {
            return;
        }
        if (object instanceof Array) {
            object.forEach(function (element) { return _this.insert(element); });
            return;
        }
        if (this.nodes.length > 0) {
            var index = this.getIndex(object);
            if (index !== -1) {
                this.nodes[index].insert(object);
                return;
            }
        }
        this.objects.push(object);
        if (this.objects.length > this.maxObjects && this.level < this.maxLevels) {
            if (typeof this.nodes[0] === 'undefined') {
                this.split();
            }
            var i = 0;
            while (i < this.objects.length) {
                var index = this.getIndex(this.objects[i]);
                if (index !== -1) {
                    this.nodes[index].insert((this.objects.splice(i, 1))[0]);
                }
                else {
                    i++;
                }
            }
        }
    };
    QuadTree.prototype.getIndex = function (object) {
        var index = -1;
        var verticalMidpoint = this.hitBox.position.x + this.hitBox.width / 2;
        var horizontalMidpoint = this.hitBox.position.y + this.hitBox.height / 2;
        var topQuadrant = (object.position.y < horizontalMidpoint && object.position.y + object.height < horizontalMidpoint);
        var bottomQuadrant = (object.position.y > horizontalMidpoint);
        if (object.position.x < verticalMidpoint && object.position.x + object.width < verticalMidpoint) {
            if (topQuadrant) {
                index = 1;
            }
            else if (bottomQuadrant) {
                index = 2;
            }
        }
        else if (object.position.x > verticalMidpoint) {
            if (topQuadrant) {
                index = 0;
            }
            else if (bottomQuadrant) {
                index = 3;
            }
        }
        return index;
    };
    QuadTree.prototype.split = function () {
        var subWidth = (this.hitBox.width / 2) | 0;
        var subHeight = (this.hitBox.height / 2) | 0;
        this.nodes[0] = new QuadTree(new HitBox_1.HitBox(this.hitBox.position.x + subWidth, this.hitBox.position.y, subWidth, subHeight), this.level + 1);
        this.nodes[1] = new QuadTree(new HitBox_1.HitBox(this.hitBox.position.x, this.hitBox.position.y, subWidth, subHeight), this.level + 1);
        this.nodes[2] = new QuadTree(new HitBox_1.HitBox(this.hitBox.position.x, this.hitBox.position.y + subHeight, subWidth, subHeight), this.level + 1);
        this.nodes[3] = new QuadTree(new HitBox_1.HitBox(this.hitBox.position.x + subWidth, this.hitBox.position.y + subHeight, subWidth, subHeight), this.level + 1);
    };
    return QuadTree;
}());
exports.QuadTree = QuadTree;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InputManager_1 = __webpack_require__(1);
var SettingsMenu = (function () {
    function SettingsMenu(element, settings) {
        this.element = element;
        this.settings = settings;
        this.showing = false;
        this.init();
    }
    SettingsMenu.prototype.init = function () {
        var _this = this;
        var title = document.createElement('h4');
        var playerTitle = document.createElement('h4');
        var form = document.createElement('form');
        var submit = document.createElement('input');
        var playerForm = document.createElement('form');
        var playerSubmit = document.createElement('input');
        title.appendChild(document.createTextNode('Keyboard'));
        playerTitle.appendChild(document.createTextNode('Player Settings'));
        form.setAttribute('id', 'keyboardSettings');
        form.setAttribute('method', 'post');
        playerForm.setAttribute('id', 'playerSettings');
        playerForm.setAttribute('method', 'post');
        submit.setAttribute('type', 'submit');
        submit.setAttribute('value', 'Save');
        playerSubmit.setAttribute('type', 'submit');
        playerSubmit.setAttribute('value', 'Save');
        this.element.appendChild(title);
        this.element.appendChild(form);
        Object.keys(this.settings.keyBoard).forEach(function (setting) { return _this.addEntry(setting, form); });
        form.appendChild(submit);
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            _this.settings.setKey(document.getElementById(InputManager_1.Actions.UP).value, InputManager_1.Actions.UP);
            _this.settings.setKey(document.getElementById(InputManager_1.Actions.DOWN).value, InputManager_1.Actions.DOWN);
            _this.settings.setKey(document.getElementById(InputManager_1.Actions.LEFT).value, InputManager_1.Actions.LEFT);
            _this.settings.setKey(document.getElementById(InputManager_1.Actions.RIGHT).value, InputManager_1.Actions.RIGHT);
            _this.settings.setKey(document.getElementById(InputManager_1.Actions.SHOOT).value, InputManager_1.Actions.SHOOT);
            _this.clear();
        });
        this.element.appendChild(document.createElement('hr'));
        this.element.appendChild(playerTitle);
        this.element.appendChild(playerForm);
        Object.keys(this.settings.player).forEach(function (setting) { return _this.addPlayerSettingEntry(setting, playerForm); });
        playerForm.appendChild(playerSubmit);
        playerForm.addEventListener('submit', function (event) {
            event.preventDefault();
            _this.settings.player.acceleration = Number(document.getElementById('acceleration').value);
            _this.settings.player.maxVelocity = Number(document.getElementById('maxVelocity').value);
            _this.settings.player.friction = Number(document.getElementById('friction').value);
            _this.settings.player.fireDelay = Number(document.getElementById('fireDelay').value);
            _this.clear();
        });
    };
    SettingsMenu.prototype.clear = function () {
        while (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild);
        }
        this.init();
    };
    SettingsMenu.prototype.addPlayerSettingEntry = function (setting, element) {
        var label = document.createElement('label');
        var input = document.createElement('input');
        var row = document.createElement('div');
        label.setAttribute('for', setting);
        label.appendChild(document.createTextNode(setting + ':'));
        input.setAttribute('id', setting);
        input.setAttribute('type', 'number');
        input.setAttribute('name', setting);
        input.setAttribute('value', this.settings.player[setting]);
        row.classList.add('row');
        row.appendChild(label);
        row.appendChild(input);
        element.appendChild(row);
    };
    SettingsMenu.prototype.addEntry = function (setting, element) {
        var row = document.createElement('div');
        var label = document.createElement('label');
        var input = document.createElement('input');
        row.classList.add('row');
        label.setAttribute('for', this.settings.keyBoard[setting]);
        label.appendChild(document.createTextNode(this.settings.keyBoard[setting] + ':'));
        input.setAttribute('id', this.settings.keyBoard[setting]);
        input.setAttribute('type', 'text');
        input.setAttribute('name', this.settings.keyBoard[setting]);
        input.setAttribute('value', setting);
        row.appendChild(label);
        row.appendChild(input);
        element.appendChild(row);
    };
    SettingsMenu.prototype.toggleShow = function () {
        if (this.showing) {
            this.element.style.display = 'none';
            this.showing = false;
        }
        else {
            this.element.style.display = 'block';
            this.showing = true;
        }
    };
    return SettingsMenu;
}());
exports.SettingsMenu = SettingsMenu;


/***/ })
/******/ ]);