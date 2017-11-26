"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ajax = (function () {
    function Ajax() {
    }
    Ajax.createAndSendRequest = function (data, url, callback) {
        var xHttp = new XMLHttpRequest();
        xHttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                callback();
            }
        };
        xHttp.open('POST', url);
        xHttp.setRequestHeader('Content-Type', 'application/json');
        xHttp.send(JSON.stringify(data));
    };
    return Ajax;
}());
exports.Ajax = Ajax;
//# sourceMappingURL=Ajax.js.map