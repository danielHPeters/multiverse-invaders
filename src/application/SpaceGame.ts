import Background from '../models/Background'
import AssetManager from '../lib/client/AssetManager'
import InputManager from '../lib/client/InputManager'
import Settings from '../config/Settings'
import IGame from '../lib/interfaces/IGame'
import IGameState from '../lib/interfaces/IGameState'
import ICollisionManager from '../lib/interfaces/ICollisionManager'
import CollisionManager from '../lib/collision/CollisionManager'
import { ContextId } from '../enum/ContextId'

/**
 * Space models main class.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class SpaceGame implements IGame {
  state: IGameState
  background: Background
  assetManager: AssetManager
  inputManager: InputManager
  collisionManager: ICollisionManager
  settings: Settings
  canvases
  contexts: Map<ContextId, CanvasRenderingContext2D>

  /**
   *
   * @param {IGameState} state
   * @param {AssetManager} assetManager
   * @param {InputManager} inputManager
   * @param {Settings} settings
   * @param canvases
   */
  constructor (state: IGameState, assetManager: AssetManager, inputManager: InputManager, settings: Settings, canvases) {
    this.state = state
    this.assetManager = assetManager
    this.inputManager = inputManager
    this.settings = settings
    this.canvases = canvases
    this.collisionManager = new CollisionManager(this.state.quadTree)
    this.contexts = new Map<ContextId, CanvasRenderingContext2D>()
    this.init()
  }

  /**
   *
   */
  public init (): void {
    if (this.canvases.background.getContext) {
      this.contexts.set(ContextId.BACKGROUND, this.canvases.background.getContext('2d'))
      this.contexts.set(ContextId.SHIP, this.canvases.ship.getContext('2d'))
      this.contexts.set(ContextId.MAIN, this.canvases.main.getContext('2d'))
      this.contexts.forEach(context => context.clearRect(0, 0, this.settings.gameSize.width, this.settings.gameSize.height))
    }
    this.state.entities.forEach(entity => entity.init())
  }

  /**
   *
   */
  public clear (): void {
    this.state.renderables.forEach(renderable => renderable.clear(this.contexts.get(renderable.contextId)))
  }

  /**
   *
   * @param {number} dt
   */
  public update (dt: number): void {
    this.state.quadTree.clear()
    this.state.quadTree.insert(this.state.collideables)
    this.collisionManager.detectCollision()
    this.state.movables.forEach(movable => movable.move(dt))
  }

  /**
   *
   */
  public render (): void {
    this.state.renderables.forEach(renderable => renderable.render(this.contexts.get(renderable.contextId)))
  }
}
