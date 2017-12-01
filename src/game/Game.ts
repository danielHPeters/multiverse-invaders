import { Background } from './entities/Background'
import { AssetManager, AssetType } from '../client/AssetManager'
import { Actions, InputManager } from '../client/InputManager'
import { Ship } from './entities/Ship'
import { Pool } from './structures/Pool'
import { QuadTree } from '../lib/collision/QuadTree'
import { HitBox } from '../lib/collision/HitBox'
import { Settings } from '../client/Settings'
import { EntityType } from './interfaces/CollideAble'
import { CollisionManager } from '../lib/collision/CollisionManager'
import { Sound } from '../client/audio/Sound'
import { Observer } from '../lib/observer/Observer'

/**
 *
 */
export class Game implements Observer {
  background: Background
  ship: Ship
  enemyPool: Pool
  enemyBulletPool: Pool
  backgroundContext
  shipContext
  mainContext
  playing: boolean
  window
  assetManager: AssetManager
  inputManager: InputManager
  collisionManager: CollisionManager
  settings: Settings
  quadTree: QuadTree
  playerScore: number
  shipStartX: number
  shipStartY: number
  paused: boolean
  canvases
  backgroundAudio: Sound
  gameOverAudio: Sound
  animReqID

  /**
   *
   * @param {AssetManager} assetManager
   * @param {InputManager} inputManager
   * @param {Settings} settings
   * @param canvases
   */
  constructor (assetManager: AssetManager, inputManager: InputManager, settings: Settings, canvases) {
    this.playing = false
    this.paused = false
    this.window = window
    this.assetManager = assetManager
    this.inputManager = inputManager
    this.settings = settings
    this.canvases = canvases

    if (this.canvases.background.getContext) {
      this.backgroundContext = this.canvases.background.getContext('2d')
      this.shipContext = this.canvases.ship.getContext('2d')
      this.mainContext = this.canvases.main.getContext('2d')
      this.playerScore = 0
      this.background = new Background(
        0,
        0,
        this.canvases.background.width,
        this.canvases.background.height,
        this.backgroundContext,
        this.assetManager.getSprite(EntityType.BACKGROUND)
      )
      this.shipStartX = this.canvases.ship.width / 2 - assetManager.getSprite(EntityType.PLAYER).width
      this.shipStartY = this.canvases.ship.height / 4 * 3 + assetManager.getSprite(EntityType.PLAYER).height * 2
      this.ship = new Ship(
        this.shipStartX,
        this.shipStartY,
        assetManager.getSprite(EntityType.PLAYER).width,
        assetManager.getSprite(EntityType.PLAYER).height,
        this.canvases.ship.width,
        this.canvases.ship.height,
        this.shipContext,
        assetManager,
        new Pool(assetManager, this.mainContext, this.canvases.main.width, this.canvases.main.height, 80, EntityType.PLAYER_BULLET),
        settings.player
      )
      this.enemyBulletPool = new Pool(assetManager, this.mainContext, this.canvases.main.width, this.canvases.main.height, 50, EntityType.ENEMY_BULLET)
      this.enemyPool = new Pool(assetManager, this.mainContext, this.canvases.main.width, this.canvases.main.height, 30, EntityType.ENEMY, this.enemyBulletPool, this)
      this.spawnWave()
      inputManager.register(this.ship)
      inputManager.register(this)
      this.quadTree = new QuadTree(new HitBox(0, 0, this.canvases.main.width, this.canvases.main.height))
      this.collisionManager = new CollisionManager(this.quadTree)
      this.backgroundAudio = this.assetManager.getSound(EntityType.MAIN_THEME, AssetType.AUDIO_LOOP)
      this.backgroundAudio.play(true)
      this.start()
    }
  }

  togglePause (): void {
    this.paused = !this.paused
  }

  /**
   *
   */
  spawnWave (): void {
    const height = this.assetManager.getSprite(EntityType.ENEMY).height
    const width = this.assetManager.getSprite(EntityType.ENEMY).width
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

  /**
   *
   */
  render (): void {
    if (this.playing) {
      if (!this.paused) {
        document.getElementById('score').innerHTML = this.playerScore.toString()
        this.quadTree.clear()
        this.quadTree.insert(this.ship)
        this.quadTree.insert(this.ship.pool.getPool())
        this.quadTree.insert(this.enemyPool.getPool())
        this.quadTree.insert(this.enemyBulletPool.getPool())
        this.collisionManager.detectCollision()

        // Spawn new wave if all enemies are destroyed.
        if (this.enemyPool.getPool().length === 0) {
          this.spawnWave()
        }

        if (this.ship.alive()) {
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
      this.animReqID = window.requestAnimationFrame(() => this.render())
    }
  }

  scorePoints (): void {
    this.playerScore += 10
  }

  update (state: any): void {
    if (state[Actions.RESTART]) {
      this.restart()
    }
  }

  /**
   *
   */
  start (): void {
    this.playing = true
    this.render()
    this.ship.draw()
  }

  gameOver (): void {
    this.backgroundAudio.stop()
    document.getElementById('game-over').style.display = 'block'
    this.gameOverAudio = this.assetManager.getSound(EntityType.GAME_OVER, AssetType.AUDIO_LOOP)
    this.gameOverAudio.play(true)
  }

  restart (): void {
    if (!this.playing) {
      this.gameOverAudio.stop()
      this.backgroundAudio.play(true)
      document.getElementById('game-over').style.display = 'none'
    } else {
      window.cancelAnimationFrame(this.animReqID)
      this.playing = false
      this.backgroundAudio.stop()
      this.backgroundAudio.play(true)
    }
    this.backgroundContext.clearRect(0, 0, this.canvases.background.width, this.canvases.background.height)
    this.shipContext.clearRect(0, 0, this.canvases.ship.width, this.canvases.ship.height)
    this.mainContext.clearRect(0, 0, this.canvases.main.width, this.canvases.main.height)
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
