"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssetManager_1 = require("../client/AssetManager");
var Game_1 = require("./Game");
var InputManager_1 = require("../client/InputManager");
var assetManager = new AssetManager_1.AssetManager();
var inputManager = new InputManager_1.InputManager();
assetManager.queueDownload('background', 'assets/textures/background.png', AssetManager_1.AssetType.SPRITE);
assetManager.queueDownload('ship', 'assets/sprites/ship.png', AssetManager_1.AssetType.SPRITE);
assetManager.queueDownload('bullet', 'assets/sprites/bullet.png', AssetManager_1.AssetType.SPRITE);
assetManager.queueDownload('enemy', 'assets/sprites/enemy.png', AssetManager_1.AssetType.SPRITE);
assetManager.queueDownload('bulletEnemy', 'assets/sprites/bullet_enemy.png', AssetManager_1.AssetType.SPRITE);
assetManager.downloadAll(function () {
    var game = new Game_1.Game(assetManager, inputManager);
    document.getElementById('game-over').addEventListener('click', function () {
        game.restart();
    });
});
//# sourceMappingURL=app.js.map