"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HitBox_1 = require("./HitBox");
var QuadTree = (function () {
    function QuadTree(hitBox, level) {
        if (hitBox === void 0) { hitBox = new HitBox_1.HitBox(0, 0, 0, 0); }
        if (level === void 0) { level = 0; }
        this.level = level;
        this.maxObjects = 10;
        this.maxLevels = 5;
        this.hitBox = hitBox;
        this.objects = [];
        this.nodes = [];
    }
    QuadTree.prototype.clear = function () {
        this.objects = [];
        this.nodes.forEach(function (node) { return node.clear(); });
        this.nodes = [];
    };
    QuadTree.prototype.getAllObjects = function (returnedObjects) {
        this.nodes.forEach(function (node) { return node.getAllObjects(returnedObjects); });
        this.objects.forEach(function (object) { return returnedObjects.push(object); });
        return returnedObjects;
    };
    QuadTree.prototype.findObjects = function (returnedObjects, object) {
        if (typeof object === 'undefined') {
            console.log('UNDEFINED OBJECT');
            return;
        }
        var index = this.getIndex(object);
        if (index !== -1 && this.nodes.length) {
            this.nodes[index].findObjects(returnedObjects, object);
        }
        this.objects.forEach(function (obj) { return returnedObjects.push(obj); });
        return returnedObjects;
    };
    QuadTree.prototype.insert = function (object) {
        var _this = this;
        if (typeof object === 'undefined') {
            return;
        }
        if (object instanceof Array) {
            object.forEach(function (element) { return _this.insert(element); });
            return;
        }
        if (this.nodes.length > 0) {
            var index = this.getIndex(object);
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
            var i = 0;
            while (i < this.objects.length) {
                var index = this.getIndex(this.objects[i]);
                if (index !== -1) {
                    this.nodes[index].insert((this.objects.splice(i, 1))[0]);
                }
                else {
                    i++;
                }
            }
        }
    };
    QuadTree.prototype.getIndex = function (object) {
        var index = -1;
        var verticalMidpoint = this.hitBox.position.x + this.hitBox.width / 2;
        var horizontalMidpoint = this.hitBox.position.y + this.hitBox.height / 2;
        var topQuadrant = (object.position.y < horizontalMidpoint && object.position.y + object.height < horizontalMidpoint);
        var bottomQuadrant = (object.position.y > horizontalMidpoint);
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
    };
    QuadTree.prototype.split = function () {
        var subWidth = (this.hitBox.width / 2) | 0;
        var subHeight = (this.hitBox.height / 2) | 0;
        this.nodes[0] = new QuadTree(new HitBox_1.HitBox(this.hitBox.position.x + subWidth, this.hitBox.position.y, subWidth, subHeight), this.level + 1);
        this.nodes[1] = new QuadTree(new HitBox_1.HitBox(this.hitBox.position.x, this.hitBox.position.y, subWidth, subHeight), this.level + 1);
        this.nodes[2] = new QuadTree(new HitBox_1.HitBox(this.hitBox.position.x, this.hitBox.position.y + subHeight, subWidth, subHeight), this.level + 1);
        this.nodes[3] = new QuadTree(new HitBox_1.HitBox(this.hitBox.position.x + subWidth, this.hitBox.position.y + subHeight, subWidth, subHeight), this.level + 1);
    };
    return QuadTree;
}());
exports.QuadTree = QuadTree;
//# sourceMappingURL=QuadTree.js.map