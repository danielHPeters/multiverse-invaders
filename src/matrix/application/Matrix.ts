/**
 * Matrix application class.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Matrix {
  width: number
  height: number
  frameId
  yPositions
  running: boolean

  /**
   * Default constructor.
   *
   * @param {number} width Canvas width
   * @param {number} height Canvas height
   * @param {any[]} yPositions Positons of the texts.
   */
  constructor (width: number, height: number, yPositions = []) {
    this.width = width
    this.height = height
    this.yPositions = yPositions
    this.running = false
  }

  /**
   * Draw the matrix onto the canvas.
   * @param context Canvas context
   */
  draw (context): void {
    if (this.running) {
      context.fillStyle = 'rgba(0,0,0,.05)'
      context.fillRect(0, 0, this.width, this.height)
      context.fillStyle = '#0F0'
      context.font = '10pt Georgia'
      this.yPositions.map((y, index) => {
        const text = String.fromCharCode(1e2 + Math.random() * 33)
        const x = (index * 10) + 10
        context.fillText(text, x, y)
        if (y > 100 + Math.random() * 1e4) {
          this.yPositions[index] = 0
        } else {
          this.yPositions[index] = y + 10
        }
      })
      this.frameId = requestAnimationFrame(() => this.draw(context))
    }
  }

  /**
   * Start the rendering loop.
   *
   * @param context Canvas context.
   */
  run (context): void {
    this.running = true
    this.draw(context)
  }

  /**
   * Stop the rendering loop.
   */
  stop (): void {
    if (this.frameId) {
      this.running = false
      cancelAnimationFrame(this.frameId)
      this.frameId = undefined
    }
  }

  /**
   * Set the size of the matrix.
   *
   * @param {number} width Canvas width
   * @param {number} height Canvas height
   * @param yPositions Positions of the characters on the canvas.
   */
  setSize (width: number, height: number, yPositions): void {
    this.width = width
    this.height = height
    this.yPositions = yPositions
  }
}
