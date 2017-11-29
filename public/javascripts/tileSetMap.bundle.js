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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
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
/* 2 */,
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
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TileSetMap_1 = __webpack_require__(17);
var AssetManager_1 = __webpack_require__(3);
var InputManager_1 = __webpack_require__(1);
var Settings_1 = __webpack_require__(5);
document.addEventListener('DOMContentLoaded', function () { return init(); });
function init() {
    var canvas = document.getElementById('background');
    var assetManager = new AssetManager_1.AssetManager();
    var settings = new Settings_1.Settings();
    var inputManager = new InputManager_1.InputManager(settings);
    assetManager.queueDownload('map', 'assets/tilesets/tileset.png', AssetManager_1.AssetType.SPRITE);
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
        var layer1 = [
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
        var tileMap = new TileSetMap_1.TileSetMap(assetManager.getSprite('map'), [ground, layer1], canvas.getContext('2d'), 32, 20, 32, 16);
        tileMap.draw();
    });
}
//# sourceMappingURL=test.js.map

/***/ }),
/* 17 */
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
        for (var row = 0; row < this.imageTilesPerRow; row++) {
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


/***/ })
/******/ ]);