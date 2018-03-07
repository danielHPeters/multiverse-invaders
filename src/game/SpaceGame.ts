import Background from './entities/Background'
import AssetManager, { AssetType } from '../client/AssetManager'
import InputManager, { Actions } from '../client/InputManager'
import Ship from './entities/Ship'
import Pool from './structures/Pool'
import QuadTree from '../lib/collision/QuadTree'
import HitBox from '../lib/collision/HitBox'
import Settings from '../client/Settings'
import { EntityType } from './interfaces/CollideAble'
import CollisionManager from '../lib/collision/CollisionManager'
import Sound from '../audio/Sound'
import Observer from '../lib/observer/Observer'
import { AssetId } from '../enum/AssetId'
import IGame from '../lib/interfaces/IGame'
import IGameState from '../lib/interfaces/IGameState'
import ICollisionManager from '../lib/interfaces/ICollisionManager'

/**
 * Space game main class.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class SpaceGame implements Observer, IGame {
  state: IGameState
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
  collisionManager: ICollisionManager
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
    this.init()
  }

  init (): void {
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
        this.assetManager.getSprite(AssetId.BACKGROUND)
      )
      this.shipStartX = this.canvases.ship.width / 2 - this.assetManager.getSprite(AssetId.PLAYER).width
      this.shipStartY = this.canvases.ship.height / 4 * 3 + this.assetManager.getSprite(AssetId.PLAYER).height * 2
      this.ship = new Ship(
        this.shipStartX,
        this.shipStartY,
        this.assetManager.getSprite(AssetId.PLAYER).width,
        this.assetManager.getSprite(AssetId.PLAYER).height,
        this.canvases.ship.width,
        this.canvases.ship.height,
        this.shipContext,
        this.assetManager,
        new Pool(this.assetManager, this.mainContext, this.canvases.main.width, this.canvases.main.height, 80, EntityType.PLAYER_BULLET, AssetId.PLAYER_BULLET),
        this.settings.player
      )
      this.enemyBulletPool = new Pool(this.assetManager, this.mainContext, this.canvases.main.width, this.canvases.main.height, 50, EntityType.ENEMY_BULLET, AssetId.ENEMY_BULLET)
      this.enemyPool = new Pool(this.assetManager, this.mainContext, this.canvases.main.width, this.canvases.main.height, 30, EntityType.ENEMY, AssetId.ENEMY, this.enemyBulletPool, this)
      this.spawnWave()
      this.inputManager.register(this.ship)
      this.inputManager.register(this)
      this.quadTree = new QuadTree(new HitBox(0, 0, this.canvases.main.width, this.canvases.main.height))
      this.collisionManager = new CollisionManager(this.quadTree)
      this.backgroundAudio = this.assetManager.getSound(AssetId.MAIN_THEME, AssetType.AUDIO_AMB)
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
    const height = this.assetManager.getSprite(AssetId.ENEMY).height
    const width = this.assetManager.getSprite(AssetId.ENEMY).width
    let x = 200
    let y = -height
    const spacer = y * 1.5
    for (let i = 1; i <= 21; i++) {
      this.enemyPool.get(x, y, 4)
      x += width + 25
      if (i % 7 === 0) {
        x = 200
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
    this.gameOverAudio = this.assetManager.getSound(AssetId.GAME_OVER, AssetType.AUDIO_AMB)
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
