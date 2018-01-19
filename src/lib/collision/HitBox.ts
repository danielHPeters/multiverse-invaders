import Vector2 from '../vector/Vector2'
import CollideAble, { EntityType } from '../../game/interfaces/CollideAble'

export default class HitBox implements CollideAble {
  type: EntityType
  collidesWith
  colliding: boolean
  position: Vector2
  width: number
  height: number

  /**
   * Initializes position and dimension.
   * @param {number} x position x
   * @param {number} y position y
   * @param {number} width dimension width
   * @param {number} height dimension height
   */
  constructor (x, y, width, height) {
    this.position = new Vector2(x, y)
    this.width = width
    this.height = height
    this.colliding = false
    this.collidesWith = []
    this.type = EntityType.BOX
    this.collidesWith.push(EntityType.PLAYER)
  }

  isCollideAbleWith (other: CollideAble): boolean {
    return this.collidesWith.includes(other.type.toString())
  }
}
