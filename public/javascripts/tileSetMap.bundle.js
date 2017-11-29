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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
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
    EntityType["MAP"] = "map";
    EntityType["GAME_OVER"] = "gameOver";
    EntityType["LASER"] = "laser";
    EntityType["MAIN_THEME"] = "shockWave";
    EntityType["EXPLOSION_I"] = "explosion1";
    EntityType["EXPLOSION_II"] = "explosion2";
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
var Observable_1 = __webpack_require__(5);
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
var SpriteSheet_1 = __webpack_require__(4);
var AssetType;
(function (AssetType) {
    AssetType["SPRITE"] = "SPRITE";
    AssetType["SPRITE_SHEET"] = "SPRITE_SHEET";
    AssetType["AUDIO"] = "AUDIO";
})(AssetType = exports.AssetType || (exports.AssetType = {}));
var AssetManager = (function () {
    function AssetManager() {
        this.cache = {
            sprites: {},
            spriteSheets: {},
            audio: {}
        };
        this.downloadCount = 0;
        this.queue = [];
        this.initAudioContext();
    }
    AssetManager.prototype.initAudioContext = function () {
        try {
            window.AudioContext = window.AudioContext || webkitAudioContext;
            this.audioContext = new AudioContext();
        }
        catch (e) {
            console.log('Web Audio API is not supported in this browser');
        }
    };
    AssetManager.prototype.done = function () {
        return this.downloadCount === this.queue.length;
    };
    AssetManager.prototype.queueDownload = function (id, path, type) {
        this.queue.push({
            id: id, path: path, type: type
        });
    };
    AssetManager.prototype.loadAudio = function (item, callback) {
        var _this = this;
        var request = new XMLHttpRequest();
        request.open('GET', item.path, true);
        request.responseType = 'arraybuffer';
        request.addEventListener('load', function () {
            _this.audioContext.decodeAudioData(request.response, function (buffer) {
                _this.cache.audio[item.id] = buffer;
                _this.downloadCount += 1;
                if (_this.done()) {
                    callback();
                }
            }, function (error) { console.log('Error with decoding audio data' + error); });
        });
        request.send();
    };
    AssetManager.prototype.loadSprite = function (item, callback) {
        var _this = this;
        var sprite = new Image();
        sprite.addEventListener('load', function () {
            _this.downloadCount++;
            if (_this.done()) {
                callback();
            }
        });
        sprite.src = item.path;
        this.cache.sprites[item.id] = sprite;
    };
    AssetManager.prototype.loadSpriteSheet = function (item, callback) {
        var _this = this;
        var spriteSheet = new Image();
        spriteSheet.addEventListener('load', function () {
            _this.cache.spriteSheets[item.id] = new SpriteSheet_1.SpriteSheet(spriteSheet, item.opts.frameWidth || 0, item.opts.frameHeight || 0);
            _this.downloadCount += 1;
            if (_this.done()) {
                callback();
            }
        });
        spriteSheet.src = item.path;
    };
    AssetManager.prototype.downloadAll = function (callback) {
        var _this = this;
        this.queue.forEach(function (item) {
            if (item.type === AssetType.AUDIO) {
                _this.loadAudio(item, callback);
            }
            else if (item.type === AssetType.SPRITE) {
                _this.loadSprite(item, callback);
            }
            else if (item.type === AssetType.SPRITE_SHEET) {
                _this.loadSpriteSheet(item, callback);
            }
        });
    };
    AssetManager.prototype.getSound = function (id) {
        var sound = this.audioContext.createBufferSource();
        sound.buffer = this.cache.audio[id];
        sound.connect(this.audioContext.destination);
        return sound;
    };
    AssetManager.prototype.getSprite = function (id) {
        return this.cache.sprites[id];
    };
    AssetManager.prototype.getSpriteSheet = function (id) {
        return this.cache.spriteSheet[id];
    };
    return AssetManager;
}());
exports.AssetManager = AssetManager;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SpriteSheet = (function () {
    function SpriteSheet(image, frameWidth, frameHeight) {
        this._image = image;
        this._frameWidth = frameWidth;
        this._frameHeight = frameHeight;
        this._framesPerRow = Math.floor(this._image.width / this._frameWidth);
    }
    Object.defineProperty(SpriteSheet.prototype, "image", {
        get: function () {
            return this._image;
        },
        set: function (image) {
            if (!(image instanceof Image)) {
                throw new Error('Param image must be of type Image!');
            }
            this._image = image;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpriteSheet.prototype, "frameWidth", {
        get: function () {
            return this._frameWidth;
        },
        set: function (frameWidth) {
            this._frameWidth = frameWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpriteSheet.prototype, "frameHeight", {
        get: function () {
            return this._frameHeight;
        },
        set: function (frameHeight) {
            this._frameHeight = frameHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpriteSheet.prototype, "framesPerRow", {
        get: function () {
            return this._framesPerRow;
        },
        set: function (framesPerRow) {
            this._framesPerRow = framesPerRow;
        },
        enumerable: true,
        configurable: true
    });
    return SpriteSheet;
}());
exports.SpriteSheet = SpriteSheet;


/***/ }),
/* 5 */
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
/* 6 */
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
            maxVelocity: 15,
            fireDelay: 15,
            friction: 0.7,
            acceleration: 3
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
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TileSetMap_1 = __webpack_require__(19);
var AssetManager_1 = __webpack_require__(3);
var InputManager_1 = __webpack_require__(1);
var Settings_1 = __webpack_require__(6);
var Entity_1 = __webpack_require__(20);
var CollideAble_1 = __webpack_require__(0);
document.addEventListener('DOMContentLoaded', function () { return init(); });
function init() {
    var canvas = document.getElementById('background');
    var canvasPlayer = document.getElementById('player');
    var assetManager = new AssetManager_1.AssetManager();
    var settings = new Settings_1.Settings();
    var inputManager = new InputManager_1.InputManager(settings);
    assetManager.queueDownload(CollideAble_1.EntityType.MAP, 'assets/tilesets/tileset.png', AssetManager_1.AssetType.SPRITE);
    assetManager.queueDownload(CollideAble_1.EntityType.PLAYER, 'assets/sprites/player.png', AssetManager_1.AssetType.SPRITE);
    assetManager.downloadAll(function () {
        var ground = [
            [172, 172, 172, 79, 34, 34, 34, 34, 34, 34, 34, 34, 56, 57, 54, 55, 56, 147, 67, 67, 68, 79, 79, 171, 172, 172, 173, 79, 79, 55, 55, 55],
            [172, 172, 172, 79, 34, 34, 34, 34, 34, 34, 146, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172, 159, 189, 79, 79, 55, 55, 55],
            [172, 172, 172, 79, 79, 34, 34, 34, 34, 34, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 159, 189, 79, 79, 79, 55, 55, 55],
            [188, 188, 188, 79, 79, 79, 79, 34, 34, 34, 36, 172, 172, 143, 142, 157, 79, 79, 79, 79, 79, 79, 187, 159, 189, 79, 79, 79, 55, 55, 55, 55],
            [79, 79, 79, 79, 79, 79, 79, 79, 34, 34, 36, 172, 159, 158, 172, 143, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 39, 51, 51, 51, 55, 55],
            [79, 79, 79, 79, 79, 79, 79, 79, 79, 34, 36, 172, 143, 142, 172, 172, 143, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 55],
            [79, 79, 79, 79, 79, 79, 79, 79, 79, 34, 52, 172, 172, 172, 172, 172, 172, 143, 156, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
            [79, 79, 79, 79, 79, 79, 79, 79, 79, 34, 52, 172, 172, 172, 172, 172, 172, 159, 188, 189, 79, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79],
            [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 188, 158, 172, 172, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 187, 158, 159, 189, 79, 79, 79],
            [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172, 159, 188, 189, 79, 79, 79, 79, 79, 79, 79, 79, 171, 173, 79, 79, 79, 79],
            [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 173, 79, 79, 79, 79],
            [155, 142, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 187, 188, 188, 189, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 173, 79, 79, 79, 79],
            [171, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 173, 79, 79, 79, 79],
            [171, 172, 143, 156, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 187, 189, 79, 79, 79, 79],
            [187, 188, 158, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
            [79, 79, 79, 188, 189, 79, 79, 79, 79, 79, 79, 155, 156, 156, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 156],
            [34, 34, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172],
            [34, 34, 34, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172],
            [34, 34, 34, 34, 79, 79, 79, 79, 79, 79, 155, 172, 172, 159, 189, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172],
            [34, 34, 34, 34, 34, 34, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172, 172]
        ];
        var topLayer = [
            [0, 0, 32, 33, 0, 220, 0, 0, 220, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 69, 0, 0, 0, 0, 0, 32, 33],
            [0, 0, 48, 49, 0, 236, 220, 220, 236, 0, 0, 147, 72, 73, 70, 71, 72, 73, 83, 83, 84, 85, 0, 0, 0, 0, 0, 48, 49],
            [0, 0, 64, 65, 54, 0, 236, 236, 0, 0, 162, 163, 84, 89, 86, 87, 88, 89, 99, 99, 100, 101, 0, 0, 0, 0, 7, 112, 113],
            [0, 0, 80, 81, 70, 54, 55, 50, 0, 0, 0, 179, 100, 105, 102, 103, 104, 105, 0, 0, 0, 0, 0, 0, 16, 22, 23, 39],
            [0, 0, 96, 97, 86, 70, 65, 144, 193, 0, 0, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 49],
            [0, 0, 0, 0, 102, 86, 81, 160, 161, 0, 0, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 65, 174, 175, 67, 66, 54],
            [0, 0, 0, 0, 0, 102, 97, 176, 177, 0, 0, 37, 0, 252, 0, 0, 0, 201, 202, 0, 0, 0, 0, 0, 80, 81, 190, 191, 83, 82, 70, 71],
            [0, 0, 0, 0, 0, 0, 0, 48, 49, 0, 0, 53, 0, 0, 0, 0, 0, 217, 218, 0, 0, 0, 0, 0, 96, 97, 222, 223, 99, 98, 86, 87],
            [201, 202, 0, 0, 0, 0, 0, 64, 65, 66, 68, 69, 0, 0, 0, 0, 0, 233, 234, 0, 0, 0, 0, 0, 238, 239, 0, 0, 238, 239, 102, 103],
            [217, 218, 0, 0, 0, 0, 0, 80, 81, 82, 84, 85, 0, 0, 0, 0, 0, 249, 250, 0, 0, 0, 0, 0, 254, 255, 0, 0, 254, 255],
            [233, 234, 0, 0, 0, 0, 0, 96, 97, 98, 100, 101, 0, 0, 0, 0, 0, 0, 0],
            [249, 250, 0, 0, 201, 202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 238, 239, 0, 0, 238, 239],
            [0, 0, 0, 0, 217, 218, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 254, 255, 0, 0, 254, 255],
            [0, 0, 0, 0, 233, 234, 196, 197, 198],
            [2, 3, 4, 0, 249, 250, 228, 229, 230],
            [18, 19, 20, 8, 0, 0, 244, 245, 246, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 202],
            [0, 35, 40, 24, 25, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 217, 218],
            [0, 0, 0, 40, 41, 20, 8, 9, 0, 0, 0, 0, 0, 0, 0, 16, 17, 18, 19, 20, 21, 0, 0, 0, 0, 0, 0, 0, 233, 234],
            [0, 0, 0, 0, 40, 19, 24, 25, 8, 9, 0, 0, 0, 0, 0, 48, 49, 50, 51, 52, 115, 3, 4, 0, 0, 0, 0, 0, 249, 250],
            [0, 0, 0, 0, 0, 0, 40, 41, 20, 21, 0, 0, 0, 0, 0, 64, 65, 66, 67, 52, 19, 19, 20, 21]
        ];
        var tileMap = new TileSetMap_1.TileSetMap(assetManager.getSprite(CollideAble_1.EntityType.MAP), [ground, topLayer], canvas.getContext('2d'), 32, ground.length, ground[0].length, 16);
        var player = new Entity_1.Entity(190, 250, assetManager.getSprite(CollideAble_1.EntityType.PLAYER), canvasPlayer.getContext('2d'));
        inputManager.register(player);
        tileMap.draw();
        function render() {
            player.move();
            window.requestAnimationFrame(function () { return render(); });
        }
        render();
    });
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TileSetMap = (function () {
    function TileSetMap(image, mapLayers, context, tileSize, tilesPerRow, tilesPerColumn, imageTilesPerRow) {
        this.image = image;
        this.mapLayers = mapLayers;
        this.context = context;
        this.tileSize = tileSize;
        this.tilesPerRow = tilesPerRow;
        this.tilesPerColumn = tilesPerColumn;
        this.imageTilesPerRow = imageTilesPerRow;
    }
    TileSetMap.prototype.drawLayer = function (layer) {
        for (var row = 0; row < this.tilesPerRow; row++) {
            for (var col = 0; col < this.tilesPerColumn; col++) {
                var tile = layer[row][col];
                var tileRow = (tile / this.imageTilesPerRow) | 0;
                var tileCol = (tile % this.imageTilesPerRow) | 0;
                this.context.drawImage(this.image, (tileCol * this.tileSize), (tileRow * this.tileSize), this.tileSize, this.tileSize, (col * this.tileSize), (row * this.tileSize), this.tileSize, this.tileSize);
            }
        }
    };
    TileSetMap.prototype.draw = function () {
        var _this = this;
        this.mapLayers.forEach(function (layer) { return _this.drawLayer(layer); });
    };
    return TileSetMap;
}());
exports.TileSetMap = TileSetMap;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vector2_1 = __webpack_require__(2);
var InputManager_1 = __webpack_require__(1);
var Entity = (function () {
    function Entity(x, y, sprite, context) {
        this.position = new Vector2_1.Vector2(x, y);
        this.velocity = new Vector2_1.Vector2(1, 1);
        this.sprite = sprite;
        this.context = context;
        this.acceleration = new Vector2_1.Vector2(0, 0);
        this.state = {};
    }
    Entity.prototype.move = function () {
        this.context.clearRect(Math.floor(this.position.x), Math.floor(this.position.y), this.sprite.width, this.sprite.height);
        this.acceleration.set(0, 0);
        if (this.state[InputManager_1.Actions.LEFT]) {
            this.acceleration.add(-3, 0);
        }
        if (this.state[InputManager_1.Actions.RIGHT]) {
            this.acceleration.add(3, 0);
        }
        if (this.state[InputManager_1.Actions.UP]) {
            this.acceleration.add(0, -3);
        }
        if (this.state[InputManager_1.Actions.DOWN]) {
            this.acceleration.add(0, 3);
        }
        this.velocity.multiply(0.6);
        this.velocity.addVector(this.acceleration);
        this.velocity.limit(15);
        this.position.addVector(this.velocity);
        this.position.subtractVector(this.acceleration);
        this.context.drawImage(this.sprite, Math.floor(this.position.x), Math.floor(this.position.y), this.sprite.width, this.sprite.height);
    };
    Entity.prototype.update = function (state) {
        this.state = state;
    };
    return Entity;
}());
exports.Entity = Entity;


/***/ })
/******/ ]);