"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vector2_1 = require("../vector/Vector2");
var HitBox = (function () {
    function HitBox(x, y, width, height) {
        this.position = new Vector2_1.Vector2(x, y);
        this.width = width;
        this.height = height;
    }
    return HitBox;
}());
exports.HitBox = HitBox;
//# sourceMappingURL=HitBox.js.map