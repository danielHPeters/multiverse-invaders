"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssetType;
(function (AssetType) {
    AssetType["SPRITE"] = "SPRITE";
    AssetType["SPRITE_SHEET"] = "SPRITE_SHEET";
    AssetType["AUDIO"] = "AUDIO";
})(AssetType = exports.AssetType || (exports.AssetType = {}));
var AssetManager = (function () {
    function AssetManager() {
        this.cache = {
            sprites: {}
        };
        this.downloadCount = 0;
        this.queue = [];
    }
    AssetManager.prototype.done = function () {
        return this.downloadCount === this.queue.length;
    };
    AssetManager.prototype.queueDownload = function (id, path, type) {
        this.queue.push({ id: id, path: path, type: type });
    };
    AssetManager.prototype.loadSprite = function (id, path, callback) {
        var _this = this;
        var sprite = new Image();
        sprite.addEventListener('load', function () {
            _this.downloadCount++;
            if (_this.done()) {
                callback();
            }
        });
        sprite.src = path;
        this.cache.sprites[id] = sprite;
    };
    AssetManager.prototype.downloadAll = function (callback) {
        var _this = this;
        this.queue.forEach(function (item) {
            if (item.type === AssetType.SPRITE) {
                _this.loadSprite(item.id, item.path, callback);
            }
        });
    };
    AssetManager.prototype.getSprite = function (id) {
        return this.cache.sprites[id];
    };
    return AssetManager;
}());
exports.AssetManager = AssetManager;
//# sourceMappingURL=AssetManager.js.map