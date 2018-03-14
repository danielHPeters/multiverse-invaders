import Background from '../models/Background'
import AssetManager from '../lib/client/AssetManager'
import InputManager from '../lib/client/InputManager'
import Settings from '../config/Settings'
import IGame from '../lib/interfaces/IGame'
import IGameState from '../lib/interfaces/IGameState'
import { ContextId } from '../enum/ContextId'

/**
 * Space models main class.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class InvadersGame implements IGame {
  state: IGameState
  background: Background
  assetManager: AssetManager
  inputManager: InputManager
  settings: Settings
  contexts: Map<ContextId, CanvasRenderingContext2D>

  /**
   *
   * @param {IGameState} state
   * @param {AssetManager} assetManager
   * @param {InputManager} inputManager
   * @param {Settings} settings
   * @param {CanvasRenderingContext2D[]} contexts
   */
  constructor (state: IGameState, assetManager: AssetManager, inputManager: InputManager, settings: Settings, contexts: Map<ContextId, CanvasRenderingContext2D>) {
    this.state = state
    this.assetManager = assetManager
    this.inputManager = inputManager
    this.settings = settings
    this.contexts = contexts
    this.init()
  }

  /**
   *
   */
  public init (): void {
    this.contexts.forEach(context => context.clearRect(0, 0, this.settings.gameSize.width, this.settings.gameSize.height))
    this.state.reset()
  }

  /**
   *
   */
  public clear (): void {
    this.state.renderables.forEach(renderable => renderable.clear(this.contexts.get(renderable.contextId)))
  }

  /**
   *
   */
  public render (): void {
    this.state.renderables.forEach(renderable => renderable.render(this.contexts.get(renderable.contextId)))
  }
}
