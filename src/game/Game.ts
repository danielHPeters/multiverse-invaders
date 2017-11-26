import { Background } from './entities/Background'
import { AssetManager } from '../client/AssetManager'
import { InputManager } from '../client/InputManager'
import { Ship } from './entities/Ship'
import { Pool } from './structures/Pool'
import { QuadTree } from '../lib/collision/QuadTree'
import { HitBox } from '../lib/collision/HitBox'

/**
 *
 */
export class Game {
  background: Background
  ship: Ship
  enemyPool: Pool
  enemyBulletPool: Pool
  backgroundCanvas
  shipCanvas
  mainCanvas
  backgroundContext
  shipContext
  mainContext
  playing: boolean
  window
  assetManager: AssetManager
  inputManager: InputManager
  quadTree: QuadTree
  playerScore: number
  shipStartX: number
  shipStartY: number

  /**
   *
   * @param {AssetManager} assetManager
   * @param {InputManager} inputManager
   */
  constructor (assetManager: AssetManager, inputManager: InputManager) {
    this.playing = false
    this.window = window
    this.assetManager = assetManager
    this.inputManager = inputManager
    this.backgroundCanvas = document.getElementById('background')
    this.shipCanvas = document.getElementById('ship')
    this.mainCanvas = document.getElementById('main')

    if (this.backgroundCanvas.getContext) {
      this.backgroundContext = this.backgroundCanvas.getContext('2d')
      this.shipContext = this.shipCanvas.getContext('2d')
      this.mainContext = this.mainCanvas.getContext('2d')
      this.playerScore = 0
      this.background = new Background(
        0,
        0,
        this.backgroundCanvas.width,
        this.backgroundCanvas.height,
        this.backgroundContext,
        this.assetManager.getSprite('background')
      )
      this.shipStartX = this.shipCanvas.width / 2 - assetManager.getSprite('ship').width
      this.shipStartY = this.shipCanvas.height / 4 * 3 + assetManager.getSprite('ship').height * 2
      this.ship = new Ship(
        this.shipStartX,
        this.shipStartY,
        assetManager.getSprite('ship').width,
        assetManager.getSprite('ship').height,
        this.shipCanvas.width,
        this.shipCanvas.height,
        6,
        this.shipContext,
        assetManager.getSprite('ship'),
        new Pool(assetManager, this.mainContext, this.mainCanvas.width, this.mainCanvas.height, 30, 'bullet')
      )
      this.enemyBulletPool = new Pool(assetManager, this.mainContext, this.mainCanvas.width, this.mainCanvas.height, 50, 'bulletEnemy')
      this.enemyPool = new Pool(assetManager, this.mainContext, this.mainCanvas.width, this.mainCanvas.height, 30, 'enemy', this.enemyBulletPool, this)
      this.spawnWave()
      inputManager.register(this.ship)
      this.quadTree = new QuadTree(new HitBox(0, 0, this.mainCanvas.width, this.mainCanvas.height))
      this.start()
    }
  }

  /**
   *
   */
  spawnWave (): void {
    const height = this.assetManager.getSprite('enemy').height
    const width = this.assetManager.getSprite('enemy').width
    let x = 100
    let y = -height
    const spacer = y * 1.5
    for (let i = 1; i <= 18; i++) {
      this.enemyPool.get(x, y, 2)
      x += width + 25
      if (i % 6 === 0) {
        x = 100
        y += spacer
      }
    }
  }

  detectCollision (): void {
    let objects = []
    this.quadTree.getAllObjects(objects)

    for (let i = 0; i < objects.length; i++) {
      let obj = []
      this.quadTree.findObjects(obj, objects[i])

      for (let j = 0; j < obj.length; j++) {
        // DETECT COLLISION ALGORITHM
        if (objects[i].isCollideAbleWith(obj[j]) &&
          (objects[i].position.x < obj[j].position.x + obj[j].width &&
            objects[i].position.x + objects[i].width > obj[j].position.x &&
            objects[i].position.y < obj[j].position.y + obj[j].height &&
            objects[i].position.y + objects[i].height > obj[j].position.y)) {
          objects[i].colliding = true
          obj[j].colliding = true
        }
      }
    }
  }

  /**
   *
   */
  render (): void {
    if (this.playing) {
      document.getElementById('score').innerHTML = this.playerScore.toString()
      this.quadTree.clear()
      this.quadTree.insert(this.ship)
      this.quadTree.insert(this.ship.pool.getPool())
      this.quadTree.insert(this.enemyPool.getPool())
      this.quadTree.insert(this.enemyBulletPool.getPool())
      this.detectCollision()

      // Spawn new wave if all enemies are destroyed.
      if (this.enemyPool.getPool().length === 0) {
        this.spawnWave()
      }

      if (this.ship.alive()) {
        window.requestAnimationFrame(() => this.render())
        this.background.draw()
        this.ship.move()
        this.ship.pool.render()
        this.enemyPool.render()
        this.enemyBulletPool.render()
      } else {
        this.playing = false
        this.gameOver()
      }
    }
  }

  scorePoints () {
    this.playerScore += 10
  }

  /**
   *
   */
  start (): void {
    this.playing = true
    this.render()
    this.ship.draw()
  }

  gameOver () {
    document.getElementById('game-over').style.display = 'block'
  }

  restart (): void {
    document.getElementById('game-over').style.display = 'none'
    this.backgroundContext.clearRect(0, 0, this.backgroundCanvas.width, this.backgroundCanvas.height)
    this.shipContext.clearRect(0, 0, this.shipCanvas.width, this.shipCanvas.height)
    this.mainContext.clearRect(0, 0, this.mainCanvas.width, this.mainCanvas.height)
    this.inputManager.reset()
    this.quadTree.clear()
    this.background.reset()
    this.playerScore = 0
    this.ship.reset()
    this.enemyBulletPool.clearAll()
    this.enemyPool.clearAll()
    this.ship.pool.clearAll()
    this.start()
  }
}
