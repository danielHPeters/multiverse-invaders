import Vector2 from '../../math/Vector2'
import Rectangle from '../../geometry/Rectangle'
import Drawable from '../../interfaces/Drawable'

export enum AXIS {
  NONE = 'none',
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
  BOTH = 'both'
}

/**
 * Camera class.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Camera {
  position: Vector2
  previousPosition: Vector2
  viewWidth: number
  viewHeight: number
  axis: AXIS
  following: Drawable | undefined
  deadZone: Vector2
  viewportRect: Rectangle
  worldRect: Rectangle

  constructor (x: number, y: number, viewWidth: number, viewHeight: number, worldWidth: number, worldHeight: number) {
    // position of camera (left-top coordinate)
    this.position = new Vector2(x, y)
    this.previousPosition = new Vector2(x, y)
    this.deadZone = new Vector2(0, 0)

    // viewport dimensions
    this.viewWidth = viewWidth
    this.viewHeight = viewHeight

    // allow camera to move in vertical and horizontal axis
    this.axis = AXIS.BOTH

    // object that should be followed
    this.following = undefined

    // rectangle that represents the viewport
    this.viewportRect = new Rectangle(this.position.x, this.position.y, this.viewWidth, this.viewHeight)

    // rectangle that represents the world's boundary (room's boundary)
    this.worldRect = new Rectangle(0, 0, worldWidth, worldHeight)

  }

  /**
   * Object needs to have "x" and "y" properties (as world(or room) position)
   *
   * @param {Drawable} following
   * @param xDeadZone
   * @param yDeadZone
   */
  follow (following: Drawable, xDeadZone: number, yDeadZone: number): void {
    this.following = following
    this.deadZone.set(xDeadZone, yDeadZone)
  }

  update (): void {
    this.previousPosition.setVector(this.position)
    const target = this.following
    // keep following the player (or other desired object)
    if (target !== undefined) {
      if (this.axis === AXIS.HORIZONTAL || this.axis === AXIS.BOTH) {
        // moves camera on horizontal axis based on followed object position
        if (target.position.x - this.position.x + this.deadZone.x > this.viewWidth) {
          this.position.x = target.position.x - (this.viewWidth - this.deadZone.x)
        } else if (target.position.x - this.deadZone.x < this.position.x) {
          this.position.x = target.position.x - this.deadZone.x
        }
      }
      if (this.axis === AXIS.VERTICAL || this.axis === AXIS.BOTH) {
        // moves camera on vertical axis based on followed object position
        if (target.position.y - this.position.y + this.deadZone.y > this.viewHeight) {
          this.position.y = target.position.y - (this.viewHeight - this.deadZone.y)
        } else if (target.position.y - this.deadZone.y < this.position.y) {
          this.position.y = target.position.y - this.deadZone.y
        }
      }
    }

    // update viewportRect
    this.viewportRect.set(this.position.x, this.position.y)

    // don't let camera leaves the world's boundary
    if (!this.viewportRect.within(this.worldRect)) {
      if (this.viewportRect.left < this.worldRect.left) {
        this.position.x = this.worldRect.left
      }
      if (this.viewportRect.top < this.worldRect.top) {
        this.position.y = this.worldRect.top
      }
      if (this.viewportRect.right > this.worldRect.right) {
        this.position.x = this.worldRect.right - this.viewWidth
      }
      if (this.viewportRect.bottom > this.worldRect.bottom) {
        this.position.y = this.worldRect.bottom - this.viewHeight
      }
    }
  }
}
