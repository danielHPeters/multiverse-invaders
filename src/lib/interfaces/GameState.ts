import QuadTree from '../collision/QuadTree'
import Collideable from './Collideable'
import Entity from '../entity/Entity'
import Renderable from './Renderable'
import Movable from './Movable'

/**
 * Game state interface.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default interface GameState {
  running: boolean
  paused: boolean
  quadTree: QuadTree
  entities: Entity[]
  movables: Movable[]
  renderables: Renderable[]
  collideables: Collideable[]

  update (dt: number): void

  reset (): void

  scorePoints (): void
}
