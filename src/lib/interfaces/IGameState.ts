import QuadTree from '../collision/QuadTree'
import ICollideAble from './ICollideAble'
import Entity from '../entity/Entity'

/**
 * Game state interface.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default interface IGameState {
  running: boolean
  paused: boolean
  quadTree: QuadTree
  entities: Entity[]
  collideables: ICollideAble[]
}
