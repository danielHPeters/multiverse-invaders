import { AssetManager, AssetType } from '../client/AssetManager'
import { Game } from './Game'
import { InputManager } from '../client/InputManager'

const assetManager = new AssetManager()
const inputManager = new InputManager()
assetManager.queueDownload('background', 'assets/textures/background.png', AssetType.SPRITE)
assetManager.queueDownload('ship', 'assets/sprites/ship.png', AssetType.SPRITE)
assetManager.queueDownload('bullet', 'assets/sprites/bullet.png', AssetType.SPRITE)
assetManager.queueDownload('enemy', 'assets/sprites/enemy.png', AssetType.SPRITE)
assetManager.queueDownload('bulletEnemy', 'assets/sprites/bullet_enemy.png', AssetType.SPRITE)
assetManager.downloadAll(() => {
  const game = new Game(assetManager, inputManager)
  document.getElementById('game-over').addEventListener('click', () => {
    game.restart()
  })
})
