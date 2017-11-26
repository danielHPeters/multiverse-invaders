"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vector2_1 = require("../../lib/vector/Vector2");
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
//# sourceMappingURL=Enemy.js.map