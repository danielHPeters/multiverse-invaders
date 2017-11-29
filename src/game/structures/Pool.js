"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bullet_1 = require("../entities/Bullet");
var Enemy_1 = require("../entities/Enemy");
var CollideAble_1 = require("../interfaces/CollideAble");
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
//# sourceMappingURL=Pool.js.map