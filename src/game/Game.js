"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Background_1 = require("./entities/Background");
var Ship_1 = require("./entities/Ship");
var Pool_1 = require("./structures/Pool");
var QuadTree_1 = require("../lib/collision/QuadTree");
var HitBox_1 = require("../lib/collision/HitBox");
var Game = (function () {
    function Game(assetManager, inputManager) {
        this.playing = false;
        this.window = window;
        this.assetManager = assetManager;
        this.inputManager = inputManager;
        this.backgroundCanvas = document.getElementById('background');
        this.shipCanvas = document.getElementById('ship');
        this.mainCanvas = document.getElementById('main');
        if (this.backgroundCanvas.getContext) {
            this.backgroundContext = this.backgroundCanvas.getContext('2d');
            this.shipContext = this.shipCanvas.getContext('2d');
            this.mainContext = this.mainCanvas.getContext('2d');
            this.playerScore = 0;
            this.background = new Background_1.Background(0, 0, this.backgroundCanvas.width, this.backgroundCanvas.height, this.backgroundContext, this.assetManager.getSprite('background'));
            this.shipStartX = this.shipCanvas.width / 2 - assetManager.getSprite('ship').width;
            this.shipStartY = this.shipCanvas.height / 4 * 3 + assetManager.getSprite('ship').height * 2;
            this.ship = new Ship_1.Ship(this.shipStartX, this.shipStartY, assetManager.getSprite('ship').width, assetManager.getSprite('ship').height, this.shipCanvas.width, this.shipCanvas.height, 6, this.shipContext, assetManager.getSprite('ship'), new Pool_1.Pool(assetManager, this.mainContext, this.mainCanvas.width, this.mainCanvas.height, 30, 'bullet'));
            this.enemyBulletPool = new Pool_1.Pool(assetManager, this.mainContext, this.mainCanvas.width, this.mainCanvas.height, 50, 'bulletEnemy');
            this.enemyPool = new Pool_1.Pool(assetManager, this.mainContext, this.mainCanvas.width, this.mainCanvas.height, 30, 'enemy', this.enemyBulletPool, this);
            this.spawnWave();
            inputManager.register(this.ship);
            this.quadTree = new QuadTree_1.QuadTree(new HitBox_1.HitBox(0, 0, this.mainCanvas.width, this.mainCanvas.height));
            this.start();
        }
    }
    Game.prototype.spawnWave = function () {
        var height = this.assetManager.getSprite('enemy').height;
        var width = this.assetManager.getSprite('enemy').width;
        var x = 100;
        var y = -height;
        var spacer = y * 1.5;
        for (var i = 1; i <= 18; i++) {
            this.enemyPool.get(x, y, 2);
            x += width + 25;
            if (i % 6 === 0) {
                x = 100;
                y += spacer;
            }
        }
    };
    Game.prototype.detectCollision = function () {
        var objects = [];
        this.quadTree.getAllObjects(objects);
        for (var i = 0; i < objects.length; i++) {
            var obj = [];
            this.quadTree.findObjects(obj, objects[i]);
            for (var j = 0; j < obj.length; j++) {
                if (objects[i].isCollideAbleWith(obj[j]) &&
                    (objects[i].position.x < obj[j].position.x + obj[j].width &&
                        objects[i].position.x + objects[i].width > obj[j].position.x &&
                        objects[i].position.y < obj[j].position.y + obj[j].height &&
                        objects[i].position.y + objects[i].height > obj[j].position.y)) {
                    objects[i].colliding = true;
                    obj[j].colliding = true;
                }
            }
        }
    };
    Game.prototype.render = function () {
        var _this = this;
        if (this.playing) {
            document.getElementById('score').innerHTML = this.playerScore.toString();
            this.quadTree.clear();
            this.quadTree.insert(this.ship);
            this.quadTree.insert(this.ship.pool.getPool());
            this.quadTree.insert(this.enemyPool.getPool());
            this.quadTree.insert(this.enemyBulletPool.getPool());
            this.detectCollision();
            if (this.enemyPool.getPool().length === 0) {
                this.spawnWave();
            }
            if (this.ship.alive()) {
                window.requestAnimationFrame(function () { return _this.render(); });
                this.background.draw();
                this.ship.move();
                this.ship.pool.render();
                this.enemyPool.render();
                this.enemyBulletPool.render();
            }
            else {
                this.playing = false;
                this.gameOver();
            }
        }
    };
    Game.prototype.scorePoints = function () {
        this.playerScore += 10;
    };
    Game.prototype.start = function () {
        this.playing = true;
        this.render();
        this.ship.draw();
    };
    Game.prototype.gameOver = function () {
        document.getElementById('game-over').style.display = 'block';
    };
    Game.prototype.restart = function () {
        document.getElementById('game-over').style.display = 'none';
        this.backgroundContext.clearRect(0, 0, this.backgroundCanvas.width, this.backgroundCanvas.height);
        this.shipContext.clearRect(0, 0, this.shipCanvas.width, this.shipCanvas.height);
        this.mainContext.clearRect(0, 0, this.mainCanvas.width, this.mainCanvas.height);
        this.inputManager.reset();
        this.quadTree.clear();
        this.background.reset();
        this.playerScore = 0;
        this.ship.reset();
        this.enemyBulletPool.clearAll();
        this.enemyPool.clearAll();
        this.ship.pool.clearAll();
        this.start();
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=Game.js.map