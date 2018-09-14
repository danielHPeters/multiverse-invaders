import Vector2 from '../math/Vector2'
import Collideable from '../interfaces/Collideable'
import { AssetId } from '../../enum/AssetId'

/**
 * HitBox used for defining collision boundaries.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class HitBox implements Collideable {
  type: AssetId
  collidesWith
  colliding: boolean
  position: Vector2
  width: number
  height: number

  /**
   * Initializes position and dimension.
   * @param x X Coordinate
   * @param y Y Coordinate
   * @param width Dimension width
   * @param height Dimension height
   */
  constructor (x: number, y: number, width: number, height: number) {
    this.position = new Vector2(x, y)
    this.width = width
    this.height = height
    this.colliding = false
    this.collidesWith = []
    this.type = AssetId.BOX
    this.collidesWith.push(AssetId.PLAYER)
  }

  isCollideAbleWith (other: Collideable): boolean {
    return this.collidesWith.includes(other.type.toString())
  }
}
