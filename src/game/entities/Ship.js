"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vector2_1 = require("../../lib/vector/Vector2");
var CollideAble_1 = require("../interfaces/CollideAble");
var InputManager_1 = require("../../client/InputManager");
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
//# sourceMappingURL=Ship.js.map