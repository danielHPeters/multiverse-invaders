"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vector2_1 = require("../../lib/vector/Vector2");
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
//# sourceMappingURL=Ship.js.map