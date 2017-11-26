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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vector2 = (function () {
    function Vector2(x, y) {
        this.x = x;
        this.y = y;
    }
    Vector2.add = function (v1, v2) {
        return new Vector2(v1.x + v2.x, v1.y + v2.y);
    };
    Vector2.subtract = function (v1, v2) {
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
    Vector2.prototype.add = function (vector) {
        this.x += vector.x;
        this.y += vector.y;
    };
    Vector2.prototype.subtract = function (vector) {
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
        if (this.mag() > max) {
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vector2_1 = __webpack_require__(0);
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AssetManager_1 = __webpack_require__(3);
var Game_1 = __webpack_require__(4);
var InputManager_1 = __webpack_require__(11);
var assetManager = new AssetManager_1.AssetManager();
var inputManager = new InputManager_1.InputManager();
assetManager.queueDownload('background', 'assets/textures/background.png', AssetManager_1.AssetType.SPRITE);
assetManager.queueDownload('ship', 'assets/sprites/ship.png', AssetManager_1.AssetType.SPRITE);
assetManager.queueDownload('bullet', 'assets/sprites/bullet.png', AssetManager_1.AssetType.SPRITE);
assetManager.queueDownload('enemy', 'assets/sprites/enemy.png', AssetManager_1.AssetType.SPRITE);
assetManager.queueDownload('bulletEnemy', 'assets/sprites/bullet_enemy.png', AssetManager_1.AssetType.SPRITE);
assetManager.downloadAll(function () {
    var game = new Game_1.Game(assetManager, inputManager);
    document.getElementById('game-over').addEventListener('click', function () {
        game.restart();
    });
});


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
var Background_1 = __webpack_require__(5);
var Ship_1 = __webpack_require__(6);
var Pool_1 = __webpack_require__(7);
var QuadTree_1 = __webpack_require__(10);
var HitBox_1 = __webpack_require__(1);
var Game = (function () {
    function Game(assetManager, inputManager) {
        this.playing = false;
        this.window = window;
        this.assetManager = assetManager;
        this.inputManager = inputManager;
        this.backgroundCanvas = document.getElementById('background');
        this.shipCanvas = document.getElementById('ship');
        this.mainCanvas = document.getElementById('main');
        if (this.backgroundCanvas.getContext) {
            this.backgroundContext = this.backgroundCanvas.getContext('2d');
            this.shipContext = this.shipCanvas.getContext('2d');
            this.mainContext = this.mainCanvas.getContext('2d');
            this.playerScore = 0;
            this.background = new Background_1.Background(0, 0, this.backgroundCanvas.width, this.backgroundCanvas.height, this.backgroundContext, this.assetManager.getSprite('background'));
            this.shipStartX = this.shipCanvas.width / 2 - assetManager.getSprite('ship').width;
            this.shipStartY = this.shipCanvas.height / 4 * 3 + assetManager.getSprite('ship').height * 2;
            this.ship = new Ship_1.Ship(this.shipStartX, this.shipStartY, assetManager.getSprite('ship').width, assetManager.getSprite('ship').height, this.shipCanvas.width, this.shipCanvas.height, 6, this.shipContext, assetManager.getSprite('ship'), new Pool_1.Pool(assetManager, this.mainContext, this.mainCanvas.width, this.mainCanvas.height, 30, 'bullet'));
            this.enemyBulletPool = new Pool_1.Pool(assetManager, this.mainContext, this.mainCanvas.width, this.mainCanvas.height, 50, 'bulletEnemy');
            this.enemyPool = new Pool_1.Pool(assetManager, this.mainContext, this.mainCanvas.width, this.mainCanvas.height, 30, 'enemy', this.enemyBulletPool, this);
            this.spawnWave();
            inputManager.register(this.ship);
            this.quadTree = new QuadTree_1.QuadTree(new HitBox_1.HitBox(0, 0, this.mainCanvas.width, this.mainCanvas.height));
            this.start();
        }
    }
    Game.prototype.spawnWave = function () {
        var height = this.assetManager.getSprite('enemy').height;
        var width = this.assetManager.getSprite('enemy').width;
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
                window.requestAnimationFrame(function () { return _this.render(); });
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
        this.backgroundContext.clearRect(0, 0, this.backgroundCanvas.width, this.backgroundCanvas.height);
        this.shipContext.clearRect(0, 0, this.shipCanvas.width, this.shipCanvas.height);
        this.mainContext.clearRect(0, 0, this.mainCanvas.width, this.mainCanvas.height);
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vector2_1 = __webpack_require__(0);
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
        this.type = 'background';
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vector2_1 = __webpack_require__(0);
var Ship = (function () {
    function Ship(x, y, width, height, canvasWidth, canvasHeight, speed, context, sprite, pool) {
        this.position = new Vector2_1.Vector2(x, y);
        this.velocity = new Vector2_1.Vector2(0, 0);
        this.speed = speed;
        this.width = width;
        this.height = height;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.context = context;
        this.sprite = sprite;
        this.type = 'ship';
        this.pool = pool;
        this.fireRate = 15;
        this.counter = 0;
        this.collidesWith = [];
        this.collidesWith.push('bulletEnemy');
        this.colliding = false;
        this.friction = 0.6;
        this.state = {};
        this.maxTop = Math.floor(this.canvasHeight / 4 * 3);
        this.startPosition = new Vector2_1.Vector2(x, y);
    }
    Ship.prototype.reset = function () {
        this.position.setVector(this.startPosition);
        this.velocity.set(0, 0);
        this.colliding = false;
    };
    Ship.prototype.move = function () {
        this.counter++;
        if (this.state['a'] || this.state['d'] || this.state['w'] || this.state['s']) {
            this.context.clearRect(Math.floor(this.position.x), Math.floor(this.position.y), this.width, this.height);
            if (this.state['a']) {
                if (this.velocity.x > -this.speed) {
                    this.velocity.x--;
                }
            }
            if (this.state['d']) {
                if (this.velocity.x < this.speed) {
                    this.velocity.x++;
                }
            }
            if (this.state['w']) {
                if (this.velocity.y > -this.speed) {
                    this.velocity.y--;
                }
            }
            if (this.state['s']) {
                if (this.velocity.y < this.speed) {
                    this.velocity.y++;
                }
            }
            this.velocity.multiply(this.friction);
            this.position.add(this.velocity);
            if (this.position.x <= 0) {
                this.position.x = 0;
                this.velocity.x *= -1;
            }
            if (this.position.x >= this.canvasWidth - this.width) {
                this.position.x = this.canvasWidth - this.width;
                this.velocity.x *= -1;
            }
            if (this.position.y <= this.maxTop) {
                this.position.y = this.maxTop;
                this.velocity.y *= -1;
            }
            if (this.position.y >= this.canvasHeight - this.height) {
                this.position.y = this.canvasHeight - this.height;
                this.velocity.y *= -1;
            }
            if (!this.colliding) {
                this.draw();
            }
        }
        if (this.state[' '] && this.counter >= this.fireRate && !this.colliding) {
            this.fire();
            this.counter = 0;
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Bullet_1 = __webpack_require__(8);
var Enemy_1 = __webpack_require__(9);
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
        if (this.type === 'enemy') {
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vector2_1 = __webpack_require__(0);
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
        if (this.type === 'bullet') {
            this.collidesWith.push('enemy');
        }
        else if (this.type === 'bulletEnemy') {
            this.collidesWith.push('ship');
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
        else if (this.type === 'bullet' && this.position.y <= 0 - this.height) {
            return true;
        }
        else if (this.type === 'bulletEnemy' && this.position.y >= this.canvasHeight) {
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vector2_1 = __webpack_require__(0);
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
        this.collidesWith.push('bullet');
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HitBox_1 = __webpack_require__(1);
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
/* 11 */
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
var Observable_1 = __webpack_require__(12);
var InputManager = (function (_super) {
    __extends(InputManager, _super);
    function InputManager() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    InputManager.prototype.init = function () {
        var _this = this;
        window.addEventListener('keydown', function (event) {
            _this.state[event.key] = true;
            _this.notify();
        });
        window.addEventListener('keyup', function (event) {
            _this.state[event.key] = false;
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
/* 12 */
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


/***/ })
/******/ ]);