"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("../lib/Observable");
var Actions;
(function (Actions) {
    Actions["UP"] = "UP";
    Actions["DOWN"] = "DOWN";
    Actions["LEFT"] = "LEFT";
    Actions["RIGHT"] = "RIGHT";
    Actions["SHOOT"] = "SHOOT";
})(Actions = exports.Actions || (exports.Actions = {}));
var InputManager = (function (_super) {
    __extends(InputManager, _super);
    function InputManager(settings) {
        var _this = _super.call(this) || this;
        _this.inputMap = settings.keyBoard;
        _this.init();
        return _this;
    }
    InputManager.prototype.init = function () {
        var _this = this;
        window.addEventListener('keydown', function (event) {
            _this.state[_this.inputMap[event.key]] = true;
            _this.notify();
        });
        window.addEventListener('keyup', function (event) {
            _this.state[_this.inputMap[event.key]] = false;
            _this.notify();
        });
    };
    InputManager.prototype.reset = function () {
        var _this = this;
        Object.keys(this.state).forEach(function (key) { return _this.state[key] = false; });
    };
    return InputManager;
}(Observable_1.Observable));
exports.InputManager = InputManager;
//# sourceMappingURL=InputManager.js.map