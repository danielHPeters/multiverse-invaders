import Background from '../models/Background'
import AssetManager from '../lib/client/AssetManager'
import InputManager from '../lib/client/InputManager'
import Settings from '../config/Settings'
import Game from '../lib/interfaces/Game'
import GameState from '../lib/interfaces/GameState'
import { ContextId } from '../enum/ContextId'

/**
 * Space models main class.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class InvadersGame implements Game {
  state: GameState
  background: Background
  assetManager: AssetManager
  inputManager: InputManager
  settings: Settings
  contexts: Map<ContextId, CanvasRenderingContext2D>

  constructor (state: GameState, assetManager: AssetManager, inputManager: InputManager, settings: Settings, contexts: Map<ContextId, CanvasRenderingContext2D>) {
    this.state = state
    this.assetManager = assetManager
    this.inputManager = inputManager
    this.settings = settings
    this.contexts = contexts
    this.init()
  }

  init (): void {
    this.contexts.forEach(context => context.clearRect(0, 0, this.settings.gameSize.width, this.settings.gameSize.height))
    this.state.reset()
  }

  clear (): void {
    this.state.renderables.forEach(renderable => {
      const ctx = this.contexts.get(renderable.contextId)

      if (ctx) {
        renderable.clear(ctx)
      }
    })
  }

  render (): void {
    this.state.renderables.forEach(renderable => {
      const ctx = this.contexts.get(renderable.contextId)

      if (ctx) {
        renderable.render(ctx)
      }
    })
  }
}
