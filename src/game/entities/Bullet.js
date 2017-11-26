"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vector2_1 = require("../../lib/vector/Vector2");
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
//# sourceMappingURL=Bullet.js.map