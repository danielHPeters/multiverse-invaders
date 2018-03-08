import IGameState from '../lib/interfaces/IGameState'
import ICollideAble, { EntityType } from '../lib/interfaces/ICollideAble'
import QuadTree from '../lib/collision/QuadTree'
import Settings from '../config/Settings'
import InputManager from '../lib/client/InputManager'
import { default as AssetManager, AssetType } from '../lib/client/AssetManager'
import Ship from '../models/Ship'
import HitBox from '../lib/collision/HitBox'
import { AssetId } from '../enum/AssetId'
import Background from '../models/Background'
import Pool from '../models/Pool'
import IRenderable from '../lib/interfaces/IRenderable'
import Entity from '../lib/entity/Entity'
import IMovable from '../lib/interfaces/IMovable'
import Sound from '../lib/audio/Sound'

/**
 * Multiverse invaders game state.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class InvadersState implements IGameState {
  running: boolean
  paused: boolean
  quadTree: QuadTree
  entities: Entity[]
  renderables: IRenderable[]
  collideables: ICollideAble[]
  movables: IMovable[]
  pools: Pool[]
  assetManager: AssetManager
  backgroundAudio: Sound
  gameOverAudio: Sound
  playerScore: number

  /**
   *
   * @param {Settings} settings
   * @param {InputManager} inputManager
   * @param {AssetManager} assetManager
   */
  constructor (settings: Settings, inputManager: InputManager, assetManager: AssetManager) {
    this.assetManager = assetManager
    this.running = false
    this.paused = false
    this.playerScore = 0
    const background = new Background(
      0,
      0,
      settings.gameSize.width,
      settings.gameSize.height,
      assetManager.getSprite(AssetId.BACKGROUND),
      settings
    )
    const playerBulletPool = new Pool(this.assetManager, 80, EntityType.PLAYER_BULLET, AssetId.PLAYER_BULLET, settings)
    const ship = new Ship(assetManager.getSprite(AssetId.PLAYER).width, assetManager.getSprite(AssetId.PLAYER).height, assetManager, playerBulletPool, settings)
    const enemyBulletPool = new Pool(this.assetManager, 50, EntityType.ENEMY_BULLET, AssetId.ENEMY_BULLET, settings)
    const enemyPool = new Pool(this.assetManager, 30, EntityType.ENEMY, AssetId.ENEMY, settings, enemyBulletPool)
    this.quadTree = new QuadTree(new HitBox(0, 0, settings.gameSize.width, settings.gameSize.height))
    this.pools = []
    this.entities = []
    this.renderables = []
    this.collideables = []
    this.movables = []

    this.pools.push(playerBulletPool)
    this.pools.push(enemyBulletPool)
    this.pools.push(enemyPool)
    this.entities.push(ship)
    this.movables.push(ship)
    this.renderables.push(ship)
    this.entities.push(background)
    this.movables.push(background)
    this.movables.push(enemyPool)
    this.movables.push(playerBulletPool)
    this.movables.push(enemyBulletPool)
    this.renderables.push(background)
    this.renderables.push(playerBulletPool)
    this.renderables.push(enemyBulletPool)
    this.renderables.push(enemyPool)

    this.backgroundAudio = this.assetManager.getSound(AssetId.MAIN_THEME, AssetType.AUDIO_AMB)
    this.backgroundAudio.play(true)
    this.spawnWave()
    inputManager.register(ship)
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
      this.pools[1].get(x, y, 4)
      x += width + 25
      if (i % 7 === 0) {
        x = 200
        y += spacer
      }
    }
  }

  scorePoints (): void {
    this.playerScore += 10
  }

  gameOver (): void {
    this.backgroundAudio.stop()
    document.getElementById('game-over').style.display = 'block'
    this.gameOverAudio = this.assetManager.getSound(AssetId.GAME_OVER, AssetType.AUDIO_AMB)
    this.gameOverAudio.play(true)
  }

  reset (): void {
    this.gameOverAudio.stop()
    this.backgroundAudio.play(true)
    document.getElementById('game-over').style.display = 'none'
    this.quadTree.clear()
    this.entities.forEach(entity => entity.init())
    this.pools.forEach(pool => pool.clearAll())
    this.playerScore = 0
  }
}
