import { AssetManager, AssetType } from '../client/AssetManager'
import { Game } from './Game'
import { InputManager } from '../client/InputManager'
import { Settings } from '../client/Settings'
import { SettingsMenu } from '../client/SettingsMenu'
import { EntityType } from './interfaces/CollideAble'

const assetManager = new AssetManager()
const canvases = {
  background: document.getElementById('background'),
  ship: document.getElementById('ship'),
  main: document.getElementById('main')
}
const settings = new Settings()
const inputManager = new InputManager(settings)
const settingsMenu = new SettingsMenu(document.getElementById('settings-menu'), settings)
assetManager.queueDownload(EntityType.BACKGROUND, 'assets/textures/background.png', AssetType.SPRITE)
assetManager.queueDownload(EntityType.PLAYER, 'assets/sprites/ship.png', AssetType.SPRITE)
assetManager.queueDownload(EntityType.PLAYER_BULLET, 'assets/sprites/bullet.png', AssetType.SPRITE)
assetManager.queueDownload(EntityType.ENEMY, 'assets/sprites/enemy.png', AssetType.SPRITE)
assetManager.queueDownload(EntityType.ENEMY_BULLET, 'assets/sprites/bullet_enemy.png', AssetType.SPRITE)
assetManager.downloadAll(() => {
  const game = new Game(assetManager, inputManager, settings, canvases)
  document.getElementById('game-over').addEventListener('click', () => {
    game.restart()
  })
  document.getElementById('settings').addEventListener('click', () => {
    console.log('settings')
    settingsMenu.toggleShow()
    game.togglePause()
  })
})
