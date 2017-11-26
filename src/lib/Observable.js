"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable = (function () {
    function Observable() {
        this._observers = [];
        this._state = {};
    }
    Observable.prototype.register = function (observer) {
        this._observers.push(observer);
    };
    Observable.prototype.unRegister = function (observer) {
        this._observers = this._observers.filter(function (obs) {
            return obs !== observer;
        });
    };
    Observable.prototype.notify = function () {
        var _this = this;
        this._observers.forEach(function (observer) {
            observer.update(_this._state);
        });
    };
    Object.defineProperty(Observable.prototype, "observers", {
        get: function () {
            return this._observers;
        },
        set: function (observers) {
            this._observers = observers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Observable.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (state) {
            this._state = state;
        },
        enumerable: true,
        configurable: true
    });
    return Observable;
}());
exports.Observable = Observable;
//# sourceMappingURL=Observable.js.map