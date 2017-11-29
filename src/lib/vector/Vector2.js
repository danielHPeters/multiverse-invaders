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
//# sourceMappingURL=Vector2.js.map