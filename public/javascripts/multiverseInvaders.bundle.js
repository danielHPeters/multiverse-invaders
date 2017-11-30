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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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
const Observable_1 = __webpack_require__(7);
var Actions;
(function (Actions) {
    Actions["UP"] = "UP";
    Actions["DOWN"] = "DOWN";
    Actions["LEFT"] = "LEFT";
    Actions["RIGHT"] = "RIGHT";
    Actions["SHOOT"] = "SHOOT";
})(Actions = exports.Actions || (exports.Actions = {}));
class InputManager extends Observable_1.Observable {
    constructor(settings) {
        super();
        this.inputMap = settings.keyBoard;
        this.init();
    }
    init() {
        window.addEventListener('keydown', event => {
            this.state[this.inputMap[event.key]] = true;
            this.notify();
        });
        window.addEventListener('keyup', event => {
            this.state[this.inputMap[event.key]] = false;
            this.notify();
        });
    }
    reset() {
        Object.keys(this.state).forEach(key => this.state[key] = false);
    }
}
exports.InputManager = InputManager;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const SpriteSheet_1 = __webpack_require__(5);
const Sound_1 = __webpack_require__(6);
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
    loadAudio(item, callback) {
        let request = new XMLHttpRequest();
        request.open('GET', item.path, true);
        request.responseType = 'arraybuffer';
        request.addEventListener('load', () => {
            let audioData = request.response;
            this.audioContext.decodeAudioData(audioData).then(buffer => {
                this.cache.audio[item.id] = buffer;
                this.downloadCount += 1;
                if (this.done()) {
                    callback();
                }
            }, error => { console.log('Error with decoding audio data' + error); });
        });
        request.send();
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
                this.loadAudio(item, callback);
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
/* 5 */
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
            throw new Error('Param image must be of type Image!');
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
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
            ' ': InputManager_1.Actions.SHOOT
        };
        this.player = {
            maxVelocity: 15,
            fireDelay: 15,
            friction: 0.7,
            acceleration: 3
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AssetManager_1 = __webpack_require__(3);
const Game_1 = __webpack_require__(12);
const InputManager_1 = __webpack_require__(2);
const Settings_1 = __webpack_require__(10);
const SettingsMenu_1 = __webpack_require__(18);
const CollideAble_1 = __webpack_require__(0);
const assetManager = new AssetManager_1.AssetManager();
const canvases = {
    background: document.getElementById('background'),
    ship: document.getElementById('ship'),
    main: document.getElementById('main')
};
const settings = new Settings_1.Settings();
const inputManager = new InputManager_1.InputManager(settings);
const settingsMenu = new SettingsMenu_1.SettingsMenu(document.getElementById('settings-menu'), settings, assetManager);
assetManager.queueDownload(CollideAble_1.EntityType.BACKGROUND, 'assets/textures/background.png', AssetManager_1.AssetType.SPRITE);
assetManager.queueDownload(CollideAble_1.EntityType.PLAYER, 'assets/sprites/ship.png', AssetManager_1.AssetType.SPRITE);
assetManager.queueDownload(CollideAble_1.EntityType.PLAYER_BULLET, 'assets/sprites/bullet.png', AssetManager_1.AssetType.SPRITE);
assetManager.queueDownload(CollideAble_1.EntityType.ENEMY, 'assets/sprites/enemy.png', AssetManager_1.AssetType.SPRITE);
assetManager.queueDownload(CollideAble_1.EntityType.ENEMY_BULLET, 'assets/sprites/bullet_enemy.png', AssetManager_1.AssetType.SPRITE);
assetManager.queueDownload(CollideAble_1.EntityType.MAIN_THEME, 'assets/audio/kick_shock.wav', AssetManager_1.AssetType.AUDIO);
assetManager.queueDownload(CollideAble_1.EntityType.LASER, 'assets/audio/laser.wav', AssetManager_1.AssetType.AUDIO);
assetManager.queueDownload(CollideAble_1.EntityType.EXPLOSION_I, 'assets/audio/explosion.wav', AssetManager_1.AssetType.AUDIO);
assetManager.queueDownload(CollideAble_1.EntityType.GAME_OVER, 'assets/audio/game_over.wav', AssetManager_1.AssetType.AUDIO);
assetManager.downloadAll(() => {
    const game = new Game_1.Game(assetManager, inputManager, settings, canvases);
    settingsMenu.init();
    document.getElementById('game-over').addEventListener('click', () => game.restart());
    document.getElementById('settings').addEventListener('click', () => {
        settingsMenu.toggleShow();
        game.togglePause();
    });
});


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Background_1 = __webpack_require__(13);
const AssetManager_1 = __webpack_require__(3);
const Ship_1 = __webpack_require__(14);
const Pool_1 = __webpack_require__(15);
const QuadTree_1 = __webpack_require__(8);
const HitBox_1 = __webpack_require__(4);
const CollideAble_1 = __webpack_require__(0);
const CollisionManager_1 = __webpack_require__(9);
class Game {
    constructor(assetManager, inputManager, settings, canvases) {
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
            this.ship = new Ship_1.Ship(this.shipStartX, this.shipStartY, assetManager.getSprite(CollideAble_1.EntityType.PLAYER).width, assetManager.getSprite(CollideAble_1.EntityType.PLAYER).height, this.canvases.ship.width, this.canvases.ship.height, this.shipContext, assetManager, new Pool_1.Pool(assetManager, this.mainContext, this.canvases.main.width, this.canvases.main.height, 80, CollideAble_1.EntityType.PLAYER_BULLET), settings.player);
            this.enemyBulletPool = new Pool_1.Pool(assetManager, this.mainContext, this.canvases.main.width, this.canvases.main.height, 50, CollideAble_1.EntityType.ENEMY_BULLET);
            this.enemyPool = new Pool_1.Pool(assetManager, this.mainContext, this.canvases.main.width, this.canvases.main.height, 30, CollideAble_1.EntityType.ENEMY, this.enemyBulletPool, this);
            this.spawnWave();
            inputManager.register(this.ship);
            this.quadTree = new QuadTree_1.QuadTree(new HitBox_1.HitBox(0, 0, this.canvases.main.width, this.canvases.main.height));
            this.collisionManager = new CollisionManager_1.CollisionManager(this.quadTree);
            this.backgroundAudio = this.assetManager.getSound(CollideAble_1.EntityType.MAIN_THEME, AssetManager_1.AssetType.AUDIO_LOOP);
            this.backgroundAudio.play(true);
            this.start();
        }
    }
    togglePause() {
        this.paused = !this.paused;
    }
    spawnWave() {
        const height = this.assetManager.getSprite(CollideAble_1.EntityType.ENEMY).height;
        const width = this.assetManager.getSprite(CollideAble_1.EntityType.ENEMY).width;
        let x = 100;
        let y = -height;
        const spacer = y * 1.5;
        for (let i = 1; i <= 18; i++) {
            this.enemyPool.get(x, y, 2);
            x += width + 25;
            if (i % 6 === 0) {
                x = 100;
                y += spacer;
            }
        }
    }
    render() {
        if (this.playing) {
            if (!this.paused) {
                document.getElementById('score').innerHTML = this.playerScore.toString();
                this.quadTree.clear();
                this.quadTree.insert(this.ship);
                this.quadTree.insert(this.ship.pool.getPool());
                this.quadTree.insert(this.enemyPool.getPool());
                this.quadTree.insert(this.enemyBulletPool.getPool());
                this.collisionManager.detectCollision();
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
            window.requestAnimationFrame(() => this.render());
        }
    }
    scorePoints() {
        this.playerScore += 10;
    }
    start() {
        this.playing = true;
        this.render();
        this.ship.draw();
    }
    gameOver() {
        this.backgroundAudio.stop();
        document.getElementById('game-over').style.display = 'block';
        this.gameOverAudio = this.assetManager.getSound(CollideAble_1.EntityType.GAME_OVER, AssetManager_1.AssetType.AUDIO_LOOP);
        this.gameOverAudio.play(true);
    }
    restart() {
        this.gameOverAudio.stop();
        this.backgroundAudio.play(true);
        document.getElementById('game-over').style.display = 'none';
        this.backgroundContext.clearRect(0, 0, this.canvases.background.width, this.canvases.background.height);
        this.shipContext.clearRect(0, 0, this.canvases.ship.width, this.canvases.ship.height);
        this.mainContext.clearRect(0, 0, this.canvases.main.width, this.canvases.main.height);
        this.quadTree.clear();
        this.background.reset();
        this.playerScore = 0;
        this.ship.reset();
        this.enemyBulletPool.clearAll();
        this.enemyPool.clearAll();
        this.ship.pool.clearAll();
        this.start();
    }
}
exports.Game = Game;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vector2_1 = __webpack_require__(1);
const CollideAble_1 = __webpack_require__(0);
class Background {
    constructor(x, y, width, height, context, sprite) {
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
    reset() {
        this.position.set(0, 0);
    }
    draw() {
        this.position.y += this.speed;
        this.context.drawImage(this.sprite, this.position.x, this.position.y);
        this.context.drawImage(this.sprite, this.position.x, this.position.y - this.height);
        if (this.position.y >= this.height) {
            this.position.y = 0;
        }
    }
}
exports.Background = Background;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vector2_1 = __webpack_require__(1);
const CollideAble_1 = __webpack_require__(0);
const InputManager_1 = __webpack_require__(2);
const AssetManager_1 = __webpack_require__(3);
class Ship {
    constructor(x, y, width, height, canvasWidth, canvasHeight, context, assetManager, pool, settings) {
        this.position = new Vector2_1.Vector2(x, y);
        this.startPosition = new Vector2_1.Vector2(x, y);
        this.acceleration = new Vector2_1.Vector2(0, 0);
        this.velocity = new Vector2_1.Vector2(0, 0);
        this.width = width;
        this.height = height;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.context = context;
        this.sprite = assetManager.getSprite(CollideAble_1.EntityType.PLAYER);
        this.type = CollideAble_1.EntityType.PLAYER;
        this.pool = pool;
        this.counter = 0;
        this.collidesWith = [];
        this.collidesWith.push(CollideAble_1.EntityType.ENEMY_BULLET);
        this.colliding = false;
        this.state = {};
        this.settings = settings;
        this.maxTop = Math.floor(this.canvasHeight / 4 * 3);
        this.assetManager = assetManager;
    }
    reset() {
        this.position.setVector(this.startPosition);
        this.velocity.set(0, 0);
        this.colliding = false;
    }
    move() {
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
    }
    alive() {
        return !this.colliding;
    }
    draw() {
        this.context.drawImage(this.sprite, Math.floor(this.position.x), Math.floor(this.position.y));
    }
    update(state) {
        this.state = state;
    }
    fire() {
        this.pool.getTwo(Math.floor(this.position.x) + 6, Math.floor(this.position.y), 3, Math.floor(this.position.x) + 33, Math.floor(this.position.y), 3);
        let laser = this.assetManager.getSound(CollideAble_1.EntityType.LASER, AssetManager_1.AssetType.AUDIO);
        laser.play();
    }
    isCollideAbleWith(other) {
        return this.collidesWith.includes(other.type.toString());
    }
}
exports.Ship = Ship;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Bullet_1 = __webpack_require__(16);
const Enemy_1 = __webpack_require__(17);
const CollideAble_1 = __webpack_require__(0);
class Pool {
    constructor(assetManager, context, canvasWidth, canvasHeight, maxSize, type, pool = null, game = null) {
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
    init() {
        if (this.type === CollideAble_1.EntityType.ENEMY) {
            let sprite = this.assetManager.getSprite(this.type);
            for (let i = 0; i < this.maxSize; i++) {
                this.pool[i] = new Enemy_1.Enemy(0, 0, sprite.width, sprite.height, this.canvasWidth, this.canvasHeight, 0, this.context, sprite, this.type, this.subPool, this.game);
            }
        }
        else {
            for (let i = 0; i < this.maxSize; i++) {
                let sprite = this.assetManager.getSprite(this.type);
                this.pool[i] = new Bullet_1.Bullet(0, 0, sprite.width, sprite.height, this.canvasWidth, this.canvasHeight, 0, this.context, sprite, this.type);
            }
        }
    }
    get(x, y, speed) {
        let lastElement = this.pool[this.maxSize - 1];
        if (!lastElement.alive) {
            lastElement.spawn(x, y, speed);
            this.pool.unshift(this.pool.pop());
        }
    }
    getTwo(x1, y1, speed1, x2, y2, speed2) {
        if (!this.pool[this.maxSize - 1].alive &&
            !this.pool[this.maxSize - 2].alive) {
            this.get(x1, y1, speed1);
            this.get(x2, y2, speed2);
        }
    }
    render() {
        for (let i = 0; i < this.pool.length; i++) {
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
    }
    clearAll() {
        this.pool.forEach(object => object.clear());
    }
    getPool() {
        let objects = [];
        this.pool.forEach(object => {
            if (object.alive) {
                objects.push(object);
            }
        });
        return objects;
    }
}
exports.Pool = Pool;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vector2_1 = __webpack_require__(1);
const CollideAble_1 = __webpack_require__(0);
class Bullet {
    constructor(x, y, width, height, canvasWidth, canvasHeight, speed, context, sprite, type) {
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
    spawn(x, y, speed) {
        this.position.set(x, y);
        this.speed = speed;
        this.alive = true;
    }
    draw() {
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
    }
    clear() {
        this.position.set(0, 0);
        this.speed = 0;
        this.alive = false;
        this.colliding = false;
    }
    isCollideAbleWith(other) {
        return this.collidesWith.includes(other.type.toString());
    }
}
exports.Bullet = Bullet;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vector2_1 = __webpack_require__(1);
const CollideAble_1 = __webpack_require__(0);
const AssetManager_1 = __webpack_require__(3);
class Enemy {
    constructor(x, y, width, height, canvasWidth, canvasHeight, speed, context, sprite, type, bulletPool, game) {
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
    spawn(x, y, speed) {
        this.position.x = x;
        this.position.y = y;
        this.speed = speed;
        this.speedX = 0;
        this.speedY = speed;
        this.alive = true;
        this.leftEdge = this.position.x - 90;
        this.rightEdge = this.position.x + 90;
        this.bottomEdge = this.position.y + 140;
    }
    draw() {
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
            let sound = this.game.assetManager.getSound(CollideAble_1.EntityType.EXPLOSION_I, AssetManager_1.AssetType.AUDIO);
            sound.play();
            return true;
        }
    }
    fire() {
        this.bulletPool.get(Math.floor(this.position.x + this.width / 2), Math.floor(this.position.y + this.height), -2.5);
    }
    clear() {
        this.position.x = 0;
        this.position.y = 0;
        this.speed = 0;
        this.speedX = 0;
        this.speedY = 0;
        this.alive = false;
        this.colliding = false;
    }
    isCollideAbleWith(other) {
        return this.collidesWith.includes(other.type.toString());
    }
}
exports.Enemy = Enemy;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const InputManager_1 = __webpack_require__(2);
class SettingsMenu {
    constructor(element, settings, assetManager) {
        this.element = element;
        this.settings = settings;
        this.assetManager = assetManager;
        this.showing = false;
    }
    init() {
        let title = document.createElement('h4');
        let playerTitle = document.createElement('h4');
        let form = document.createElement('form');
        let submit = document.createElement('input');
        let playerForm = document.createElement('form');
        let playerSubmit = document.createElement('input');
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
        Object.keys(this.settings.keyBoard).forEach(setting => this.addEntry(setting, form));
        form.appendChild(submit);
        form.addEventListener('submit', event => {
            event.preventDefault();
            this.settings.setKey(document.getElementById(InputManager_1.Actions.UP).value, InputManager_1.Actions.UP);
            this.settings.setKey(document.getElementById(InputManager_1.Actions.DOWN).value, InputManager_1.Actions.DOWN);
            this.settings.setKey(document.getElementById(InputManager_1.Actions.LEFT).value, InputManager_1.Actions.LEFT);
            this.settings.setKey(document.getElementById(InputManager_1.Actions.RIGHT).value, InputManager_1.Actions.RIGHT);
            this.settings.setKey(document.getElementById(InputManager_1.Actions.SHOOT).value, InputManager_1.Actions.SHOOT);
            this.clear();
        });
        this.element.appendChild(document.createElement('hr'));
        this.element.appendChild(playerTitle);
        this.element.appendChild(playerForm);
        Object.keys(this.settings.player).forEach(setting => this.addPlayerSettingEntry(setting, playerForm));
        playerForm.appendChild(playerSubmit);
        playerForm.addEventListener('submit', event => {
            event.preventDefault();
            this.settings.player.acceleration = Number(document.getElementById('acceleration').value);
            this.settings.player.maxVelocity = Number(document.getElementById('maxVelocity').value);
            this.settings.player.friction = Number(document.getElementById('friction').value);
            this.settings.player.fireDelay = Number(document.getElementById('fireDelay').value);
            this.clear();
        });
        let divider = document.createElement('hr');
        let div = document.createElement('div');
        let audioTitle = document.createElement('h4');
        let audioLabel = document.createElement('label');
        let audioSlide = document.createElement('input');
        div.classList.add('row');
        audioTitle.appendChild(document.createTextNode('Audio Settings'));
        audioLabel.appendChild(document.createTextNode('Master Volume:'));
        audioLabel.setAttribute('for', 'masterVolume');
        audioSlide.setAttribute('id', 'masterVolume');
        audioSlide.setAttribute('type', 'range');
        audioSlide.setAttribute('min', '0');
        audioSlide.setAttribute('max', '1');
        audioSlide.setAttribute('step', '0.1');
        audioSlide.addEventListener('change', event => this.assetManager.adjustMasterVolume(Number(audioSlide.value)));
        div.appendChild(audioLabel);
        div.appendChild(audioSlide);
        this.element.appendChild(divider);
        this.element.appendChild(audioTitle);
        this.element.appendChild(div);
        let ambientDiv = document.createElement('div');
        let ambientLabel = document.createElement('label');
        let ambientSlide = document.createElement('input');
        ambientDiv.classList.add('row');
        ambientLabel.appendChild(document.createTextNode('Ambient Volume:'));
        ambientLabel.setAttribute('for', 'ambientVolume');
        ambientSlide.setAttribute('id', 'ambientVolume');
        ambientSlide.setAttribute('type', 'range');
        ambientSlide.setAttribute('min', '0');
        ambientSlide.setAttribute('max', '1');
        ambientSlide.setAttribute('step', '0.1');
        ambientSlide.addEventListener('change', event => this.assetManager.adjustAmbientVolume(Number(ambientSlide.value)));
        ambientDiv.appendChild(ambientLabel);
        ambientDiv.appendChild(ambientSlide);
        this.element.appendChild(ambientDiv);
        let effectsDiv = document.createElement('div');
        let effectsLabel = document.createElement('label');
        let effectsSlide = document.createElement('input');
        effectsDiv.classList.add('row');
        effectsLabel.appendChild(document.createTextNode('Effects Volume:'));
        effectsLabel.setAttribute('for', 'effectsVolume');
        effectsSlide.setAttribute('id', 'effectsVolume');
        effectsSlide.setAttribute('type', 'range');
        effectsSlide.setAttribute('min', '0');
        effectsSlide.setAttribute('max', '1');
        effectsSlide.setAttribute('step', '0.1');
        effectsSlide.addEventListener('change', event => this.assetManager.adjustEffectsVolume(Number(effectsSlide.value)));
        effectsDiv.appendChild(effectsLabel);
        effectsDiv.appendChild(effectsSlide);
        this.element.appendChild(effectsDiv);
    }
    clear() {
        while (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild);
        }
        this.init();
    }
    addPlayerSettingEntry(setting, element) {
        let label = document.createElement('label');
        let input = document.createElement('input');
        let row = document.createElement('div');
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
    }
    addEntry(setting, element) {
        let row = document.createElement('div');
        let label = document.createElement('label');
        let input = document.createElement('input');
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
    }
    toggleShow() {
        if (this.showing) {
            this.element.style.display = 'none';
            this.showing = false;
        }
        else {
            this.element.style.display = 'block';
            this.showing = true;
        }
    }
}
exports.SettingsMenu = SettingsMenu;


/***/ })
/******/ ]);