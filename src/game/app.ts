import { AssetManager, AssetType } from '../client/AssetManager'
import { Game } from './Game'
import { InputManager } from '../client/InputManager'
import { Settings } from '../client/Settings'
import { SettingsMenu } from '../client/SettingsMenu'
import { EntityType } from './interfaces/CollideAble'

const assetManager = new AssetManager()
const canvases = {
  background: document.getElementById('background') as HTMLCanvasElement,
  ship: document.getElementById('ship') as HTMLCanvasElement,
  main: document.getElementById('main') as HTMLCanvasElement
}
const settings = new Settings()
const inputManager = new InputManager(settings)
const settingsMenu = new SettingsMenu(document.getElementById('settings-menu'), settings, assetManager)
assetManager.queueDownload(EntityType.BACKGROUND, 'assets/textures/background.png', AssetType.SPRITE)
assetManager.queueDownload(EntityType.PLAYER, 'assets/sprites/ship.png', AssetType.SPRITE)
assetManager.queueDownload(EntityType.PLAYER_BULLET, 'assets/sprites/bullet.png', AssetType.SPRITE)
assetManager.queueDownload(EntityType.ENEMY, 'assets/sprites/enemy.png', AssetType.SPRITE)
assetManager.queueDownload(EntityType.ENEMY_BULLET, 'assets/sprites/bullet_enemy.png', AssetType.SPRITE)
assetManager.queueDownload(EntityType.MAIN_THEME, 'assets/audio/kick_shock.wav', AssetType.AUDIO)
assetManager.queueDownload(EntityType.LASER, 'assets/audio/laser.wav', AssetType.AUDIO)
assetManager.queueDownload(EntityType.EXPLOSION_I, 'assets/audio/explosion.wav', AssetType.AUDIO)
assetManager.queueDownload(EntityType.GAME_OVER, 'assets/audio/game_over.wav', AssetType.AUDIO)
assetManager.downloadAll(() => {
  const game = new Game(assetManager, inputManager, settings, canvases)
  settingsMenu.init()
  let gameOver = document.getElementById('game-over')
  let set = document.getElementById('settings')
  let events = ['click', 'touchstart']
  events.forEach(event => gameOver.addEventListener(event, () => game.restart()))
  events.forEach(event => set.addEventListener(event, () => {
    settingsMenu.toggleShow()
    game.togglePause()
  }))
})
