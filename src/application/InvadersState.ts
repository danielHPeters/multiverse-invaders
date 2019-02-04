import GameState from '../lib/interfaces/GameState'
import Collideable from '../lib/interfaces/Collideable'
import QuadTree from '../lib/collision/QuadTree'
import Settings from '../config/Settings'
import InputManager from '../lib/client/InputManager'
import { default as AssetManager, AssetType } from '../lib/client/AssetManager'
import Ship from '../models/Ship'
import HitBox from '../lib/collision/HitBox'
import { AssetId } from '../enum/AssetId'
import Background from '../models/Background'
import Pool from '../models/Pool'
import Renderable from '../lib/interfaces/Renderable'
import Entity from '../lib/entity/Entity'
import Movable from '../lib/interfaces/Movable'
import Sound from '../lib/audio/Sound'
import CollisionManagerBasics from '../lib/collision/CollisionManager'
import Observable from '../lib/observer/Observable'
import CollisionManager from '../lib/interfaces/CollisionManager'

/**
 * Multiverse invaders game state.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class InvadersState extends Observable implements GameState {
  running: boolean
  paused: boolean
  quadTree: QuadTree
  entities: Entity[]
  renderables: Renderable[]
  collideables: Collideable[]
  movables: Movable[]
  pools: Pool[]
  assetManager: AssetManager
  collisionManager: CollisionManager
  backgroundAudio: Sound
  gameOverAudio: Sound
  playerScore: number

  /**
   *
   * @param settings
   * @param inputManager
   * @param assetManager
   */
  constructor (settings: Settings, inputManager: InputManager, assetManager: AssetManager) {
    super()
    this.assetManager = assetManager
    this.quadTree = new QuadTree(new HitBox(0, 0, settings.gameSize.width, settings.gameSize.height))
    this.collisionManager = new CollisionManagerBasics(this.quadTree)
    this.running = false
    this.paused = false
    this.playerScore = 0
    const background = new Background(
      settings.gameSize.width,
      settings.gameSize.height,
      assetManager.getSprite(AssetId.BACKGROUND),
      settings
    )
    const playerBulletPool = new Pool(this.assetManager, 80, AssetId.PLAYER_BULLET, settings, this)
    const ship = new Ship(assetManager.getSprite(AssetId.PLAYER).width, assetManager.getSprite(AssetId.PLAYER).height, assetManager, playerBulletPool, settings)
    const enemyBulletPool = new Pool(this.assetManager, 50, AssetId.ENEMY_BULLET, settings, this)
    const enemyPool = new Pool(this.assetManager, 30, AssetId.ENEMY, settings, this, enemyBulletPool)

    this.pools = []
    this.entities = []
    this.renderables = []
    this.collideables = []
    this.movables = []

    this.pools.push(playerBulletPool)
    this.pools.push(enemyBulletPool)
    this.pools.push(enemyPool)

    this.entities.push(ship)
    this.entities.push(background)

    enemyPool.pool.forEach(enemy => this.entities.push(enemy))
    enemyBulletPool.pool.forEach(bullet => this.entities.push(bullet))
    playerBulletPool.pool.forEach(bullet => this.entities.push(bullet))

    this.collideables.push(ship)

    enemyPool.pool.forEach(enemy => this.collideables.push(enemy))
    enemyBulletPool.pool.forEach(bullet => this.collideables.push(bullet))
    playerBulletPool.pool.forEach(bullet => this.collideables.push(bullet))

    this.movables.push(ship)
    this.movables.push(background)
    this.movables.push(enemyPool)
    this.movables.push(playerBulletPool)
    this.movables.push(enemyBulletPool)

    this.renderables.push(ship)
    this.renderables.push(background)
    this.renderables.push(playerBulletPool)
    this.renderables.push(enemyBulletPool)
    this.renderables.push(enemyPool)

    this.backgroundAudio = this.assetManager.getSound(AssetId.MAIN_THEME, AssetType.AUDIO_AMB)
    this.gameOverAudio = this.assetManager.getSound(AssetId.GAME_OVER, AssetType.AUDIO_AMB)
    inputManager.register(ship)
  }

  /**
   *
   * @param dt
   */
  update (dt: number): void {
    this.spawnWave()
    this.quadTree.clear()
    this.quadTree.insert(this.collideables)
    this.collisionManager.detectCollision()
    this.movables.forEach(movable => movable.move(dt))
  }

  spawnWave (): void {
    if (this.pools[2].getPool().length === 0) {
      const height = this.assetManager.getSprite(AssetId.ENEMY).height
      const width = this.assetManager.getSprite(AssetId.ENEMY).width
      let x = 200
      let y = -height
      const spacer = y * 1.5
      for (let i = 1; i <= 21; i++) {
        this.pools[2].get(x, y, 300)
        x += width + 25
        if (i % 7 === 0) {
          x = 200
          y += spacer
        }
      }
    }
  }

  scorePoints (): void {
    this.playerScore += 10
    this.state = this.playerScore
    this.notify()
  }

  gameOver (): void {
    const gameOverElement = document.getElementById('game-over')

    if (gameOverElement) {
      gameOverElement.style.display = 'block'
    }
    this.backgroundAudio.stop()
    this.gameOverAudio = this.assetManager.getSound(AssetId.GAME_OVER, AssetType.AUDIO_AMB)
    this.gameOverAudio.play(true)
  }

  reset (): void {
    const gameOverElement = document.getElementById('game-over')

    if (gameOverElement) {
      gameOverElement.style.display = 'none'
    }
    this.backgroundAudio.stop()
    this.gameOverAudio.stop()
    this.quadTree.clear()
    this.entities.forEach(entity => entity.init())
    this.spawnWave()
    this.playerScore = 0
    this.state = this.playerScore
    this.notify()
    this.backgroundAudio.play(true)
  }
}
