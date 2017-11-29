"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vector2_1 = require("../../lib/vector/Vector2");
var CollideAble_1 = require("../interfaces/CollideAble");
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
        this.type = CollideAble_1.EntityType.BACKGROUND;
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
//# sourceMappingURL=Background.js.map