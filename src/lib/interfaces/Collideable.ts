import { AssetId } from '../../enum/AssetId'

/**
 * Interface for collideable entities.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default interface Collideable {
  collidesWith: AssetId[]
  colliding: boolean
  type: AssetId

  /**
   *
   * @param {Collideable} other
   * @returns {boolean}
   */
  isCollideAbleWith (other: Collideable): boolean
}
