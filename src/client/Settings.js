"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InputManager_1 = require("./InputManager");
var Settings = (function () {
    function Settings() {
        this.keyBoard = {
            'w': InputManager_1.Actions.UP,
            's': InputManager_1.Actions.DOWN,
            'a': InputManager_1.Actions.LEFT,
            'd': InputManager_1.Actions.RIGHT,
            ' ': InputManager_1.Actions.SHOOT
        };
        this.player = {
            maxVelocity: 10,
            fireDelay: 15,
            friction: 0.7,
            acceleration: 2
        };
    }
    Settings.prototype.findKey = function (value) {
        var _this = this;
        return Object.keys(this.keyBoard).filter(function (key) { return _this.keyBoard[key] === value; })[0];
    };
    Settings.prototype.setKey = function (newKey, action) {
        var oldKey = this.findKey(action);
        if (newKey !== oldKey) {
            console.log('old:' + oldKey, ' new: ' + newKey + ' value: ' + action);
            this.keyBoard[newKey] = this.keyBoard[oldKey];
            delete this.keyBoard[oldKey];
        }
    };
    return Settings;
}());
exports.Settings = Settings;
//# sourceMappingURL=Settings.js.map