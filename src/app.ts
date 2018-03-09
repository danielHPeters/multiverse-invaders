import AssetManager, { AssetType } from './lib/client/AssetManager'
import SpaceGame from './application/SpaceGame'
import InputManager from './lib/client/InputManager'
import Settings from './config/Settings'
import SettingsMenu from './lib/client/SettingsMenu'
import EventHandler from './lib/event/EventHandler'
import { AssetId } from './enum/AssetId'
import AudioManager from './lib/client/AudioManager'
import GameLoop from './application/GameLoop'
import InvadersState from './application/InvadersState'
import InvadersGui from './gui/InvadersGui'

const audioManager = new AudioManager()
const assetManager = new AssetManager(audioManager)
const gui = new InvadersGui()
const canvases = {
  background: document.getElementById('background') as HTMLCanvasElement,
  ship: document.getElementById('ship') as HTMLCanvasElement,
  main: document.getElementById('main') as HTMLCanvasElement
}
const settings = new Settings(canvases.background)
const inputManager = new InputManager(settings)
const settingsMenu = new SettingsMenu(document.getElementById('settings-menu'), settings, assetManager, audioManager)
assetManager.queueDownload(AssetId.BACKGROUND, 'assets/textures/background.png', AssetType.SPRITE)
assetManager.queueDownload(AssetId.PLAYER, 'assets/sprites/ship.png', AssetType.SPRITE)
assetManager.queueDownload(AssetId.PLAYER_BULLET, 'assets/sprites/bullet.png', AssetType.SPRITE)
assetManager.queueDownload(AssetId.ENEMY, 'assets/sprites/enemy.png', AssetType.SPRITE)
assetManager.queueDownload(AssetId.ENEMY_BULLET, 'assets/sprites/bullet_enemy.png', AssetType.SPRITE)
assetManager.queueDownload(AssetId.MAIN_THEME, 'assets/audio/kick_shock.wav', AssetType.AUDIO)
assetManager.queueDownload(AssetId.LASER, 'assets/audio/laser.wav', AssetType.AUDIO)
assetManager.queueDownload(AssetId.EXPLOSION_I, 'assets/audio/explosion.wav', AssetType.AUDIO)
assetManager.queueDownload(AssetId.GAME_OVER, 'assets/audio/game_over.wav', AssetType.AUDIO)
assetManager.downloadAll(() => {
  const state = new InvadersState(settings, inputManager, assetManager)
  state.register(gui)
  const game = new SpaceGame(state, assetManager, inputManager, settings, canvases)
  const loop = new GameLoop(game)
  inputManager.register(loop)
  settingsMenu.init()
  let gameOver = document.getElementById('game-over')
  let set = document.getElementById('settings')
  let shoot = document.getElementById('shoot')
  let events = ['click', 'touchstart']
  shoot.addEventListener('touchstart', () => inputManager.shoot())
  shoot.addEventListener('touchend', () => inputManager.cancelShoot())
  shoot.addEventListener('contextmenu', event => {
    event.preventDefault()
    return false
  })
  EventHandler.registerOnElement(gameOver, events, () => loop.restart())
  EventHandler.registerOnElement(set, events, () => {
    settingsMenu.toggleShow()
    loop.togglePause()
  })
  loop.start()
})
