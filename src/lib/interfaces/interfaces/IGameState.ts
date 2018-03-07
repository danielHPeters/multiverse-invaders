import ICollideAble from './ICollideAble'
import QuadTree from '../collision/QuadTree'
import Piece from '../Piece'

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
  entities: Piece[]
  collideables: ICollideAble[]
}
