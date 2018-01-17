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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
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
    EntityType["BOX"] = "BOX";
})(EntityType = exports.EntityType || (exports.EntityType = {}));


/***/ }),
/* 1 */
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
exports.Vector2 = Vector2;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = __webpack_require__(9);
var Actions;
(function (Actions) {
    Actions["UP"] = "UP";
    Actions["DOWN"] = "DOWN";
    Actions["LEFT"] = "LEFT";
    Actions["RIGHT"] = "RIGHT";
    Actions["SHOOT"] = "SHOOT";
    Actions["RESTART"] = "RESTART";
})(Actions = exports.Actions || (exports.Actions = {}));
class InputManager extends Observable_1.Observable {
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
exports.InputManager = InputManager;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const SpriteSheet_1 = __webpack_require__(6);
const Sound_1 = __webpack_require__(7);
const Ajax_1 = __webpack_require__(8);
var AssetType;
(function (AssetType) {
    AssetType["SPRITE"] = "SPRITE";
    AssetType["SPRITE_SHEET"] = "SPRITE_SHEET";
    AssetType["AUDIO"] = "AUDIO";
    AssetType["AUDIO_LOOP"] = "LOOP";
})(AssetType = exports.AssetType || (exports.AssetType = {}));
class AssetManager {
    constructor() {
        this.cache = {
            sprites: {},
            spriteSheets: {},
            audio: {}
        };
        this.downloadCount = 0;
        this.queue = [];
        this.initAudioContext();
    }
    initAudioContext() {
        try {
            window.AudioContext = window.AudioContext || webkitAudioContext;
            this.audioContext = new AudioContext();
            this.masterGain = this.audioContext.createGain();
            this.effectsGain = this.audioContext.createGain();
            this.ambientGain = this.audioContext.createGain();
            this.masterGain.gain.value = 1;
            this.masterGain.connect(this.audioContext.destination);
            this.effectsGain.connect(this.masterGain);
            this.ambientGain.connect(this.masterGain);
            this.ambientGain.gain.value = 1;
            this.effectsGain.gain.value = 1;
        }
        catch (e) {
            console.log('Web Audio API is not supported in this browser');
        }
    }
    adjustMasterVolume(value) {
        this.masterGain.gain.value = value;
    }
    adjustAmbientVolume(value) {
        this.ambientGain.gain.value = value;
    }
    adjustEffectsVolume(value) {
        this.effectsGain.gain.value = value;
    }
    done() {
        return this.downloadCount === this.queue.length;
    }
    queueDownload(id, path, type, opts = null) {
        this.queue.push({
            id: id,
            path: path,
            type: type,
            opts: opts
        });
    }
    loadAudioFromUrl(item, callback) {
        Ajax_1.Ajax.create({
            method: 'GET',
            url: item.path,
            responseType: 'arraybuffer'
        }, response => {
            this.decodeAudio(response, item.id, callback);
        });
    }
    decodeAudio(data, id, callback) {
        this.audioContext.decodeAudioData(data).then(buffer => {
            this.cache.audio[id] = buffer;
            this.downloadCount += 1;
            if (this.done()) {
                callback();
            }
        }, error => { console.log('Error with decoding audio data' + error); });
    }
    loadSprite(item, callback) {
        let sprite = new Image();
        sprite.addEventListener('load', () => {
            this.downloadCount++;
            if (this.done()) {
                callback();
            }
        });
        sprite.src = item.path;
        this.cache.sprites[item.id] = sprite;
    }
    loadSpriteSheet(item, callback) {
        let spriteSheet = new Image();
        spriteSheet.addEventListener('load', () => {
            this.cache.spriteSheets[item.id] = new SpriteSheet_1.SpriteSheet(spriteSheet, item.opts.frameWidth || 0, item.opts.frameHeight || 0);
            this.downloadCount += 1;
            if (this.done()) {
                callback();
            }
        });
        spriteSheet.src = item.path;
    }
    downloadAll(callback) {
        this.queue.forEach(item => {
            if (item.type === AssetType.AUDIO) {
                this.loadAudioFromUrl(item, callback);
            }
            else if (item.type === AssetType.SPRITE) {
                this.loadSprite(item, callback);
            }
            else if (item.type === AssetType.SPRITE_SHEET) {
                this.loadSpriteSheet(item, callback);
            }
        });
    }
    getSound(id, type) {
        let gain;
        if (type === AssetType.AUDIO) {
            gain = this.effectsGain;
        }
        else {
            gain = this.ambientGain;
        }
        return new Sound_1.Sound(this.audioContext, gain, this.cache.audio[id]);
    }
    getSprite(id) {
        return this.cache.sprites[id];
    }
    getSpriteSheet(id) {
        return this.cache.spriteSheets[id];
    }
}
exports.AssetManager = AssetManager;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vector2_1 = __webpack_require__(1);
const CollideAble_1 = __webpack_require__(0);
class HitBox {
    constructor(x, y, width, height) {
        this.position = new Vector2_1.Vector2(x, y);
        this.width = width;
        this.height = height;
        this.colliding = false;
        this.collidesWith = [];
        this.type = CollideAble_1.EntityType.BOX;
        this.collidesWith.push(CollideAble_1.EntityType.PLAYER);
    }
    isCollideAbleWith(other) {
        return this.collidesWith.includes(other.type.toString());
    }
}
exports.HitBox = HitBox;


/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class SpriteSheet {
    constructor(image, frameWidth, frameHeight) {
        this._image = image;
        this._frameWidth = frameWidth;
        this._frameHeight = frameHeight;
        this._framesPerRow = Math.floor(this._image.width / this._frameWidth);
    }
    get image() {
        return this._image;
    }
    set image(image) {
        if (!(image instanceof Image)) {
            throw new Error('Param tileSetImage must be of type Image!');
        }
        this._image = image;
    }
    get frameWidth() {
        return this._frameWidth;
    }
    set frameWidth(frameWidth) {
        this._frameWidth = frameWidth;
    }
    get frameHeight() {
        return this._frameHeight;
    }
    set frameHeight(frameHeight) {
        this._frameHeight = frameHeight;
    }
    get framesPerRow() {
        return this._framesPerRow;
    }
    set framesPerRow(framesPerRow) {
        this._framesPerRow = framesPerRow;
    }
}
exports.SpriteSheet = SpriteSheet;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Sound {
    constructor(audioContext, masterGain, buffer) {
        this.audioContext = audioContext;
        this.masterGain = masterGain;
        this.buffer = buffer;
        this.gainNode = this.audioContext.createGain();
        this.gainNode.gain.value = 0.2;
        this.gainNode.connect(this.masterGain);
        this.playing = false;
    }
    play(loop = false) {
        this.source = this.audioContext.createBufferSource();
        this.source.buffer = this.buffer;
        this.source.loop = loop;
        this.source.connect(this.gainNode);
        this.source.start(0);
    }
    stop() {
        this.source.stop(0);
    }
}
exports.Sound = Sound;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Ajax {
    static create(opts, callback) {
        let xHttp = new XMLHttpRequest();
        xHttp.addEventListener('load', () => {
            callback(xHttp.response);
        });
        xHttp.open(opts.method ? opts.method : Ajax.defaults.method, opts.url ? opts.url : Ajax.defaults.url, opts.async ? opts.async : Ajax.defaults.async);
        if (opts.hasOwnProperty('contentType')) {
            xHttp.setRequestHeader('Content-Type', opts.contentType ? opts.contentType : Ajax.defaults.contentType);
        }
        if (opts.hasOwnProperty('responseType')) {
            xHttp.responseType = opts.responseType;
        }
        if (opts.hasOwnProperty('data') && typeof opts.data === 'object') {
            opts.data = JSON.stringify(opts.data);
        }
        xHttp.send(opts.data ? opts.data : null);
    }
}
Ajax.defaults = {
    url: '',
    method: 'GET',
    contentType: 'text/html',
    async: true,
    data: null
};
exports.Ajax = Ajax;


/***/ }),
/* 9 */
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
exports.Observable = Observable;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const HitBox_1 = __webpack_require__(4);
class QuadTree {
    constructor(hitBox = new HitBox_1.HitBox(0, 0, 0, 0), level = 0) {
        this.level = level;
        this.maxObjects = 10;
        this.maxLevels = 5;
        this.hitBox = hitBox;
        this.objects = [];
        this.nodes = [];
    }
    clear() {
        this.objects = [];
        this.nodes.forEach(node => node.clear());
        this.nodes = [];
    }
    getAllObjects(returnedObjects) {
        this.nodes.forEach(node => node.getAllObjects(returnedObjects));
        this.objects.forEach(object => returnedObjects.push(object));
        return returnedObjects;
    }
    findObjects(returnedObjects, object) {
        if (typeof object === 'undefined') {
            console.log('UNDEFINED OBJECT');
            return;
        }
        let index = this.getIndex(object);
        if (index !== -1 && this.nodes.length) {
            this.nodes[index].findObjects(returnedObjects, object);
        }
        this.objects.forEach(obj => returnedObjects.push(obj));
        return returnedObjects;
    }
    insert(object) {
        if (typeof object === 'undefined') {
            return;
        }
        if (object instanceof Array) {
            object.forEach(element => this.insert(element));
            return;
        }
        if (this.nodes.length > 0) {
            let index = this.getIndex(object);
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
            let i = 0;
            while (i < this.objects.length) {
                let index = this.getIndex(this.objects[i]);
                if (index !== -1) {
                    this.nodes[index].insert((this.objects.splice(i, 1))[0]);
                }
                else {
                    i++;
                }
            }
        }
    }
    getIndex(object) {
        let index = -1;
        let verticalMidpoint = this.hitBox.position.x + this.hitBox.width / 2;
        let horizontalMidpoint = this.hitBox.position.y + this.hitBox.height / 2;
        let topQuadrant = (object.position.y < horizontalMidpoint && object.position.y + object.height < horizontalMidpoint);
        let bottomQuadrant = (object.position.y > horizontalMidpoint);
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
    }
    split() {
        let subWidth = (this.hitBox.width / 2) | 0;
        let subHeight = (this.hitBox.height / 2) | 0;
        this.nodes[0] = new QuadTree(new HitBox_1.HitBox(this.hitBox.position.x + subWidth, this.hitBox.position.y, subWidth, subHeight), this.level + 1);
        this.nodes[1] = new QuadTree(new HitBox_1.HitBox(this.hitBox.position.x, this.hitBox.position.y, subWidth, subHeight), this.level + 1);
        this.nodes[2] = new QuadTree(new HitBox_1.HitBox(this.hitBox.position.x, this.hitBox.position.y + subHeight, subWidth, subHeight), this.level + 1);
        this.nodes[3] = new QuadTree(new HitBox_1.HitBox(this.hitBox.position.x + subWidth, this.hitBox.position.y + subHeight, subWidth, subHeight), this.level + 1);
    }
}
exports.QuadTree = QuadTree;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class CollisionManager {
    constructor(quadTree) {
        this.quadTree = quadTree;
    }
    detectCollision() {
        let objects = [];
        this.quadTree.getAllObjects(objects);
        for (let i = 0; i < objects.length; i++) {
            let obj = [];
            this.quadTree.findObjects(obj, objects[i]);
            for (let j = 0; j < obj.length; j++) {
                if (objects[i].isCollideAbleWith(obj[j]) &&
                    (Math.floor(objects[i].position.x) < Math.floor(obj[j].position.x) + obj[j].width &&
                        Math.floor(objects[i].position.x) + objects[i].width > Math.floor(obj[j].position.x) &&
                        Math.floor(objects[i].position.y) < Math.floor(obj[j].position.y) + obj[j].height &&
                        Math.floor(objects[i].position.y) + objects[i].height > Math.floor(obj[j].position.y))) {
                    objects[i].colliding = true;
                    obj[j].colliding = true;
                }
            }
        }
    }
}
exports.CollisionManager = CollisionManager;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const InputManager_1 = __webpack_require__(2);
class Settings {
    constructor() {
        this.keyBoard = {
            'w': InputManager_1.Actions.UP,
            's': InputManager_1.Actions.DOWN,
            'a': InputManager_1.Actions.LEFT,
            'd': InputManager_1.Actions.RIGHT,
            'space': InputManager_1.Actions.SHOOT,
            'r': InputManager_1.Actions.RESTART
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
exports.Settings = Settings;


/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Rpg_1 = __webpack_require__(26);
document.addEventListener('DOMContentLoaded', () => new Rpg_1.Rpg());


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const QuadTree_1 = __webpack_require__(10);
const Entity_1 = __webpack_require__(27);
const CollisionManager_1 = __webpack_require__(11);
const Area_1 = __webpack_require__(28);
const Camera_1 = __webpack_require__(29);
const InputManager_1 = __webpack_require__(2);
const Settings_1 = __webpack_require__(12);
const AssetManager_1 = __webpack_require__(3);
const TileSetMap_1 = __webpack_require__(31);
const CollideAble_1 = __webpack_require__(0);
const HitBox_1 = __webpack_require__(4);
class Rpg {
    constructor() {
        this.canvas = document.getElementById('background');
        this.canvasPlayer = document.getElementById('player');
        this.assetManager = new AssetManager_1.AssetManager();
        this.settings = new Settings_1.Settings();
        this.inputManager = new InputManager_1.InputManager(this.settings);
        this.init();
    }
    init() {
        this.assetManager.queueDownload(CollideAble_1.EntityType.MAP, 'assets/tilesets/tileset.png', AssetManager_1.AssetType.SPRITE);
        this.assetManager.queueDownload(CollideAble_1.EntityType.PLAYER, 'assets/sprites/player.png', AssetManager_1.AssetType.SPRITE);
        this.assetManager.queueDownload(CollideAble_1.EntityType.BACKGROUND, 'assets/audio/amb_wilderness.mp3', AssetManager_1.AssetType.AUDIO);
        this.assetManager.downloadAll(() => {
            let ground = [
                [172, 172, 172, 79, 34, 34, 34, 34, 34, 34, 34, 34, 56, 57, 54, 55, 56, 147, 67, 67, 68, 79, 79, 171, 172, 172, 173, 79, 79, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55],
                [172, 172, 172, 79, 34, 34, 34, 34, 34, 34, 146, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172, 159, 189, 79, 79, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55],
                [172, 172, 172, 79, 79, 34, 34, 34, 34, 34, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 159, 189, 79, 79, 79, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55],
                [188, 188, 188, 79, 79, 79, 79, 34, 34, 34, 36, 172, 172, 143, 142, 157, 79, 79, 79, 79, 79, 79, 187, 159, 189, 79, 79, 79, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55],
                [79, 79, 79, 79, 79, 79, 79, 79, 34, 34, 36, 172, 159, 158, 172, 143, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 39, 51, 51, 51, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55],
                [79, 79, 79, 79, 79, 79, 79, 79, 79, 34, 36, 172, 143, 142, 172, 172, 143, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55],
                [79, 79, 79, 79, 79, 79, 79, 79, 79, 34, 52, 172, 172, 172, 172, 172, 172, 143, 156, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
                [79, 79, 79, 79, 79, 79, 79, 79, 79, 34, 52, 172, 172, 172, 172, 172, 172, 159, 188, 189, 79, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
                [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 188, 158, 172, 172, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 187, 158, 159, 189, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
                [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172, 159, 188, 189, 79, 79, 79, 79, 79, 79, 79, 79, 171, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
                [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
                [155, 142, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 187, 188, 188, 189, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
                [171, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
                [171, 172, 143, 156, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 187, 189, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
                [187, 188, 158, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
                [79, 79, 79, 188, 189, 79, 79, 79, 79, 79, 79, 155, 156, 156, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 156, 156, 156, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
                [34, 34, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172, 172, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
                [34, 34, 34, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
                [34, 34, 34, 34, 79, 79, 79, 79, 79, 79, 155, 172, 172, 159, 189, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
                [34, 34, 34, 34, 34, 34, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172, 172, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
                [34, 34, 34, 34, 34, 34, 34, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172, 172, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
                [34, 34, 34, 34, 34, 34, 34, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172, 172, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
                [34, 34, 34, 34, 34, 34, 34, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172, 172, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
                [34, 34, 34, 34, 34, 34, 34, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172, 172, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
                [34, 34, 34, 34, 34, 34, 34, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172, 172, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
                [34, 34, 34, 34, 34, 34, 34, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172, 172, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
                [34, 34, 34, 34, 34, 34, 34, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172, 172, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
                [34, 34, 34, 34, 34, 34, 34, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172, 172, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
                [34, 34, 34, 34, 34, 34, 34, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172, 172, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
                [34, 34, 34, 34, 34, 34, 34, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172, 172, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
                [34, 34, 34, 34, 34, 34, 34, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172, 172, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
                [34, 34, 34, 34, 34, 34, 34, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172, 172, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
                [34, 34, 34, 34, 34, 34, 34, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172, 172, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
                [34, 34, 34, 34, 34, 34, 34, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172, 172, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
                [34, 34, 34, 34, 34, 34, 34, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172, 172, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
                [34, 34, 34, 34, 34, 34, 34, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172, 172, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
                [34, 34, 34, 34, 34, 34, 34, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172, 172, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79]
            ];
            let topLayer = [
                [0, 0, 32, 33, 0, 220, 0, 0, 220, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 69, 0, 0, 0, 0, 0, 32, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 48, 49, 0, 236, 220, 220, 236, 0, 0, 147, 72, 73, 70, 71, 72, 73, 83, 83, 84, 85, 0, 0, 0, 0, 0, 48, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 64, 65, 54, 0, 236, 236, 0, 0, 162, 163, 84, 89, 86, 87, 88, 89, 99, 99, 100, 101, 0, 0, 0, 0, 7, 112, 113, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 80, 81, 70, 54, 55, 50, 0, 0, 0, 179, 100, 105, 102, 103, 104, 105, 0, 0, 0, 0, 0, 0, 16, 22, 23, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 96, 97, 86, 70, 65, 144, 193, 0, 0, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 102, 86, 81, 160, 161, 0, 0, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 65, 174, 175, 67, 66, 54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 102, 97, 176, 177, 0, 0, 37, 0, 252, 0, 0, 0, 201, 202, 0, 0, 0, 0, 0, 80, 81, 190, 191, 83, 82, 70, 71, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 48, 49, 0, 0, 53, 0, 0, 0, 0, 0, 217, 218, 0, 0, 0, 0, 0, 96, 97, 222, 223, 99, 98, 86, 87, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [201, 202, 0, 0, 0, 0, 0, 64, 65, 66, 68, 69, 0, 0, 0, 0, 0, 233, 234, 0, 0, 0, 0, 0, 238, 239, 0, 0, 238, 239, 102, 103, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [217, 218, 0, 0, 0, 0, 0, 80, 81, 82, 84, 85, 0, 0, 0, 0, 0, 249, 250, 0, 0, 0, 0, 0, 254, 255, 0, 0, 254, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [233, 234, 0, 0, 0, 0, 0, 96, 97, 98, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [249, 250, 0, 0, 201, 202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 238, 239, 0, 0, 238, 239, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 217, 218, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 254, 255, 0, 0, 254, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 233, 234, 196, 197, 198, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 3, 4, 0, 249, 250, 228, 229, 230, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [18, 19, 20, 8, 0, 0, 244, 245, 246, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 35, 40, 24, 25, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 217, 218, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 40, 41, 20, 8, 9, 0, 0, 0, 0, 0, 0, 0, 16, 17, 18, 19, 20, 21, 0, 0, 0, 0, 0, 0, 0, 233, 234, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 40, 19, 24, 25, 8, 9, 0, 0, 0, 0, 0, 48, 49, 50, 51, 52, 115, 3, 4, 0, 0, 0, 0, 0, 249, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 40, 41, 20, 21, 0, 0, 0, 0, 0, 64, 65, 66, 67, 52, 19, 19, 20, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ];
            this.player = new Entity_1.Entity(350, 370, this.assetManager.getSprite(CollideAble_1.EntityType.PLAYER), this.canvasPlayer.getContext('2d'));
            this.area = new Area_1.Area(new TileSetMap_1.TileSetMap(this.assetManager.getSprite(CollideAble_1.EntityType.MAP), [ground, topLayer], this.canvas.getContext('2d'), 32, ground[0].length, ground.length, 16));
            this.canvas.width = window.innerWidth > this.area.map.width ? this.area.map.width : window.innerWidth;
            this.canvas.height = window.innerHeight > this.area.map.height ? this.area.map.height : window.innerHeight;
            this.canvasPlayer.width = window.innerWidth > this.area.map.width ? this.area.map.width : window.innerWidth;
            this.canvasPlayer.height = window.innerHeight > this.area.map.height ? this.area.map.height : window.innerHeight;
            this.quadTree = new QuadTree_1.QuadTree(new HitBox_1.HitBox(0, 0, this.canvas.width, this.canvas.height));
            this.collisionManager = new CollisionManager_1.CollisionManager(this.quadTree);
            this.camera = new Camera_1.Camera(0, 0, this.canvasPlayer.width, this.canvasPlayer.height, this.area.map.width, this.area.map.height);
            this.area.map.generate();
            this.inputManager.register(this.player);
            this.camera.follow(this.player, this.canvas.width / 2, this.canvas.height / 2);
            let ambient = this.assetManager.getSound(CollideAble_1.EntityType.BACKGROUND, AssetManager_1.AssetType.AUDIO_LOOP);
            ambient.play(true);
            this.run();
        });
    }
    start() {
    }
    stop() {
    }
    update() {
        this.quadTree.clear();
        this.quadTree.insert(this.player);
        this.quadTree.insert(this.area.map.hitBoxes);
        this.collisionManager.detectCollision();
        this.camera.update();
        this.player.move(this.area.map.width, this.area.map.height);
    }
    render() {
        this.player.draw(Math.floor(this.camera.position.x), Math.floor(this.camera.position.y), Math.floor(this.camera.previousPosition.x), Math.floor(this.camera.previousPosition.y));
        this.area.map.draw(Math.floor(this.camera.position.x), Math.floor(this.camera.position.y));
    }
    run() {
        this.update();
        this.render();
        window.requestAnimationFrame(() => this.run());
    }
}
exports.Rpg = Rpg;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vector2_1 = __webpack_require__(1);
const InputManager_1 = __webpack_require__(2);
const CollideAble_1 = __webpack_require__(0);
class Entity {
    constructor(x, y, sprite, context) {
        this.position = new Vector2_1.Vector2(x, y);
        this.velocity = new Vector2_1.Vector2(1, 1);
        this.sprite = sprite;
        this.context = context;
        this.acceleration = new Vector2_1.Vector2(0, 0);
        this.state = {};
        this.colliding = false;
        this.type = CollideAble_1.EntityType.PLAYER;
        this.collidesWith = [];
        this.collidesWith.push(CollideAble_1.EntityType.BOX);
        this.width = sprite.width;
        this.height = sprite.height;
        this.previousPosition = new Vector2_1.Vector2(x, y);
    }
    move(worldWidth, worldHeight) {
        if (!this.colliding) {
            this.previousPosition.setVector(this.position);
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
            if (this.position.x - this.width / 2 < 0) {
                this.position.x = this.width / 2;
            }
            if (this.position.y - this.height / 2 < 0) {
                this.position.y = this.height / 2;
            }
            if (this.position.x + this.width / 2 > worldWidth) {
                this.position.x = worldWidth - this.width / 2;
            }
            if (this.position.y + this.height / 2 > worldHeight) {
                this.position.y = worldHeight - this.height / 2;
            }
        }
        else {
            this.goBack();
        }
    }
    draw(xView, yView, prevXView, prevYView) {
        this.context.clearRect((Math.floor(this.previousPosition.x) - this.width / 2) - prevXView, (Math.floor(this.previousPosition.y) - this.height / 2) - prevYView, this.width, this.height);
        this.context.drawImage(this.sprite, (Math.floor(this.position.x) - this.width / 2) - xView, (Math.floor(this.position.y) - this.height / 2) - yView, this.width, this.height);
    }
    goBack() {
        let temp = this.position.clone();
        this.position.setVector(this.previousPosition);
        this.previousPosition.setVector(temp);
        this.colliding = false;
    }
    update(state) {
        this.state = state;
    }
    isCollideAbleWith(other) {
        return this.collidesWith.includes(other.type.toString());
    }
}
exports.Entity = Entity;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Area {
    constructor(map) {
        this.map = map;
    }
}
exports.Area = Area;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vector2_1 = __webpack_require__(1);
const Rectangle_1 = __webpack_require__(30);
var AXIS;
(function (AXIS) {
    AXIS["NONE"] = "none";
    AXIS["HORIZONTAL"] = "horizontal";
    AXIS["VERTICAL"] = "vertical";
    AXIS["BOTH"] = "both";
})(AXIS = exports.AXIS || (exports.AXIS = {}));
class Camera {
    constructor(x, y, viewWidth, viewHeight, worldWidth, worldHeight) {
        this.position = new Vector2_1.Vector2(x, y);
        this.previousPosition = new Vector2_1.Vector2(x, y);
        this.deadZone = new Vector2_1.Vector2(0, 0);
        this.viewWidth = viewWidth;
        this.viewHeight = viewHeight;
        this.axis = AXIS.BOTH;
        this.following = null;
        this.viewportRect = new Rectangle_1.Rectangle(this.position.x, this.position.y, this.viewWidth, this.viewHeight);
        this.worldRect = new Rectangle_1.Rectangle(0, 0, worldWidth, worldHeight);
    }
    follow(following, xDeadZone, yDeadZone) {
        this.following = following;
        this.deadZone.set(xDeadZone, yDeadZone);
    }
    update() {
        this.previousPosition.setVector(this.position);
        if (this.following != null) {
            if (this.axis === AXIS.HORIZONTAL || this.axis === AXIS.BOTH) {
                if (this.following.position.x - this.position.x + this.deadZone.x > this.viewWidth) {
                    this.position.x = this.following.position.x - (this.viewWidth - this.deadZone.x);
                }
                else if (this.following.position.x - this.deadZone.x < this.position.x) {
                    this.position.x = this.following.position.x - this.deadZone.x;
                }
            }
            if (this.axis === AXIS.VERTICAL || this.axis === AXIS.BOTH) {
                if (this.following.position.y - this.position.y + this.deadZone.y > this.viewHeight) {
                    this.position.y = this.following.position.y - (this.viewHeight - this.deadZone.y);
                }
                else if (this.following.position.y - this.deadZone.y < this.position.y) {
                    this.position.y = this.following.position.y - this.deadZone.y;
                }
            }
        }
        this.viewportRect.set(this.position.x, this.position.y);
        if (!this.viewportRect.within(this.worldRect)) {
            if (this.viewportRect.left < this.worldRect.left) {
                this.position.x = this.worldRect.left;
            }
            if (this.viewportRect.top < this.worldRect.top) {
                this.position.y = this.worldRect.top;
            }
            if (this.viewportRect.right > this.worldRect.right) {
                this.position.x = this.worldRect.right - this.viewWidth;
            }
            if (this.viewportRect.bottom > this.worldRect.bottom) {
                this.position.y = this.worldRect.bottom - this.viewHeight;
            }
        }
    }
}
exports.Camera = Camera;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    constructor(left, top, width, height) {
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.right = this.left + this.width;
        this.bottom = this.top + this.height;
    }
    set(left, top, width, height) {
        this.left = left;
        this.top = top;
        this.width = width || this.width;
        this.height = height || this.height;
        this.right = (this.left + this.width);
        this.bottom = (this.top + this.height);
    }
    within(other) {
        return (other.left <= this.left &&
            other.right >= this.right &&
            other.top <= this.top &&
            other.bottom >= this.bottom);
    }
    overlaps(other) {
        return (this.left < other.right &&
            other.left < this.right &&
            this.top < other.bottom &&
            other.top < this.bottom);
    }
}
exports.Rectangle = Rectangle;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const HitBox_1 = __webpack_require__(4);
class TileSetMap {
    constructor(image, mapLayers, context, tileSize, tilesPerRow, tilesPerColumn, imageTilesPerRow) {
        this.tileSetImage = image;
        this.width = tilesPerRow * tileSize;
        this.height = tilesPerColumn * tileSize;
        this.mapLayers = mapLayers;
        this.context = context;
        this.tileSize = tileSize;
        this.tilesPerRow = tilesPerRow;
        this.tilesPerColumn = tilesPerColumn;
        this.imageTilesPerRow = imageTilesPerRow;
        this.hitBoxes = [];
        console.log(this.width);
        console.log(this.height);
    }
    generate() {
        let ctx = document.createElement('canvas').getContext('2d');
        ctx.canvas.width = this.width;
        ctx.canvas.height = this.height;
        this.mapLayers.forEach(layer => this.generateLayer(ctx, layer));
        this.image = new Image();
        this.image.src = ctx.canvas.toDataURL('image/png');
        ctx = null;
    }
    generateLayer(ctx, layer) {
        for (let row = 0; row < this.tilesPerColumn; row++) {
            for (let col = 0; col < this.tilesPerRow; col++) {
                let tile = layer[row][col];
                if (tile !== 0 && this.mapLayers.indexOf(layer) === this.mapLayers.length - 1) {
                    this.hitBoxes.push(new HitBox_1.HitBox((col * this.tileSize), (row * this.tileSize), this.tileSize, this.tileSize));
                }
                let tileRow = (tile / this.imageTilesPerRow) | 0;
                let tileCol = (tile % this.imageTilesPerRow) | 0;
                ctx.drawImage(this.tileSetImage, (tileCol * this.tileSize), (tileRow * this.tileSize), this.tileSize, this.tileSize, (col * this.tileSize), (row * this.tileSize), this.tileSize, this.tileSize);
            }
        }
    }
    draw(xView, yView) {
        this.context.drawImage(this.image, 0, 0, this.image.width, this.image.height, -xView, -yView, this.image.width, this.image.height);
    }
}
exports.TileSetMap = TileSetMap;


/***/ })
/******/ ]);
//# sourceMappingURL=tileSetMap.js.map