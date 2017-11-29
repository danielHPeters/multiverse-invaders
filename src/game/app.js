"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssetManager_1 = require("../client/AssetManager");
var Game_1 = require("./Game");
var InputManager_1 = require("../client/InputManager");
var Settings_1 = require("../client/Settings");
var SettingsMenu_1 = require("../client/SettingsMenu");
var CollideAble_1 = require("./interfaces/CollideAble");
var assetManager = new AssetManager_1.AssetManager();
var canvases = {
    background: document.getElementById('background'),
    ship: document.getElementById('ship'),
    main: document.getElementById('main')
};
var settings = new Settings_1.Settings();
var inputManager = new InputManager_1.InputManager(settings);
var settingsMenu = new SettingsMenu_1.SettingsMenu(document.getElementById('settings-menu'), settings);
assetManager.queueDownload(CollideAble_1.EntityType.BACKGROUND, 'assets/textures/background.png', AssetManager_1.AssetType.SPRITE);
assetManager.queueDownload(CollideAble_1.EntityType.PLAYER, 'assets/sprites/ship.png', AssetManager_1.AssetType.SPRITE);
assetManager.queueDownload(CollideAble_1.EntityType.PLAYER_BULLET, 'assets/sprites/bullet.png', AssetManager_1.AssetType.SPRITE);
assetManager.queueDownload(CollideAble_1.EntityType.ENEMY, 'assets/sprites/enemy.png', AssetManager_1.AssetType.SPRITE);
assetManager.queueDownload(CollideAble_1.EntityType.ENEMY_BULLET, 'assets/sprites/bullet_enemy.png', AssetManager_1.AssetType.SPRITE);
assetManager.downloadAll(function () {
    var game = new Game_1.Game(assetManager, inputManager, settings, canvases);
    document.getElementById('game-over').addEventListener('click', function () {
        game.restart();
    });
    document.getElementById('settings').addEventListener('click', function () {
        console.log('settings');
        settingsMenu.toggleShow();
        game.togglePause();
    });
});
//# sourceMappingURL=app.js.map