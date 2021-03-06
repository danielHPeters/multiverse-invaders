import AudioManager from '../lib/client/AudioManager'
import AssetManager, { AssetType } from '../lib/client/AssetManager'
import InvadersGui from '../gui/InvadersGui'
import Settings from '../config/Settings'
import SettingsMenu from '../lib/client/SettingsMenu'
import InputManager from '../lib/client/InputManager'
import { ContextId } from '../enum/ContextId'
import Dimension from '../lib/geometry/Dimension'
import { AssetId } from '../enum/AssetId'
import InvadersState from './InvadersState'
import InvadersLoop from './InvadersLoop'
import EventHandler from '../lib/event/EventHandler'
import InvadersGame from './InvadersGame'
import GameLoop from '../lib/interfaces/GameLoop'

/**
 * Application application class.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Application {
  private audioManager: AudioManager
  private assetManager: AssetManager
  private gui: InvadersGui
  private settings: Settings
  private inputManager: InputManager
  private contexts: Map<ContextId, CanvasRenderingContext2D>

  /**
   * Constructor.
   */
  constructor () {
    const bgCanvas = document.getElementById('background') as HTMLCanvasElement
    this.contexts = new Map<ContextId, CanvasRenderingContext2D>()
    this.audioManager = new AudioManager()
    this.assetManager = new AssetManager(this.audioManager)
    this.gui = new InvadersGui()
    this.settings = new Settings(new Dimension(bgCanvas.width, bgCanvas.height))
    this.inputManager = new InputManager(this.settings)
  }

  /**
   * Instantiate a singleton instance of Application.
   * @returns
   */
  static bootstrap (): Application {
    return new Application()
  }

  /**
   * Initialize the game.
   */
  init (): void {
    this.initContexts()
    this.initAssetQueue()
    this.assetManager.downloadAll(() => this.setUpGame())
  }

  /**
   * Initialize all canvas contexts.
   */
  private initContexts (): void {
    const bgContext = (document.getElementById('background') as HTMLCanvasElement).getContext('2d')
    const shipContext = (document.getElementById('ship') as HTMLCanvasElement).getContext('2d')
    const mainContext = (document.getElementById('main') as HTMLCanvasElement).getContext('2d')

    if (bgContext && shipContext && mainContext) {
      this.contexts.set(ContextId.BACKGROUND, bgContext)
      this.contexts.set(ContextId.SHIP, shipContext)
      this.contexts.set(ContextId.MAIN, mainContext)
    }
  }

  /**
   * Queue assets for download.
   */
  private initAssetQueue (): void {
    this.assetManager.queueDownload(AssetId.BACKGROUND, 'assets/textures/background.png', AssetType.SPRITE)
    this.assetManager.queueDownload(AssetId.PLAYER, 'assets/sprites/ship.png', AssetType.SPRITE)
    this.assetManager.queueDownload(AssetId.PLAYER_BULLET, 'assets/sprites/bullet.png', AssetType.SPRITE)
    this.assetManager.queueDownload(AssetId.ENEMY, 'assets/sprites/enemy.png', AssetType.SPRITE)
    this.assetManager.queueDownload(AssetId.ENEMY_BULLET, 'assets/sprites/bullet_enemy.png', AssetType.SPRITE)
    this.assetManager.queueDownload(AssetId.MAIN_THEME, 'assets/audio/kick_shock.wav', AssetType.AUDIO)
    this.assetManager.queueDownload(AssetId.LASER, 'assets/audio/laser.wav', AssetType.AUDIO)
    this.assetManager.queueDownload(AssetId.EXPLOSION_I, 'assets/audio/explosion.wav', AssetType.AUDIO)
    this.assetManager.queueDownload(AssetId.GAME_OVER, 'assets/audio/game_over.wav', AssetType.AUDIO)
  }

  private initTouchControlElements (): void {
    const shoot = document.getElementById('shoot')

    if (shoot) {
      shoot.addEventListener('touchstart', () => this.inputManager.shoot())
      shoot.addEventListener('touchend', () => this.inputManager.cancelShoot())
      shoot.addEventListener('contextmenu', event => {
        event.preventDefault()
        return false
      })
    }
  }

  /**
   *
   * @param {GameLoop} loop
   */
  private initGui (loop: GameLoop): void {
    const settingsMenu = new SettingsMenu('settings-menu', this.settings, this.assetManager, this.audioManager)
    const gameOver = document.getElementById('game-over')
    const set = document.getElementById('settings')
    const events = ['click', 'touchstart']

    settingsMenu.init()
    this.initTouchControlElements()
    if (gameOver && set) {
      EventHandler.register(gameOver, events, () => loop.restart())
      EventHandler.register(set, events, () => {
        settingsMenu.toggleShow()
        loop.togglePause()
      })
    }
  }

  /**
   * Set up all game relevant objects.
   */
  private setUpGame (): void {
    const state = new InvadersState(this.settings, this.inputManager, this.assetManager)
    const game = new InvadersGame(state, this.assetManager, this.inputManager, this.settings, this.contexts)
    const loop = new InvadersLoop(game)
    this.inputManager.register(loop)
    this.initGui(loop)
    state.register(this.gui)
    loop.start()
  }
}
