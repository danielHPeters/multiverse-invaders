import GameState from './GameState'
import InputManager from '../client/InputManager'
import AssetManager from '../client/AssetManager'

/**
 * Game interface.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default interface Game {
  state: GameState
  inputManager: InputManager
  assetManager: AssetManager

  /**
   *
   */
  init (): void

  /**
   *
   */
  clear (): void

  /**
   *
   */
  render (): void
}
