export default class Matrix {
  width: number
  height: number
  frameId
  yPositions
  running: boolean

  constructor (width: number, height: number, yPositions = []) {
    this.width = width
    this.height = height
    this.yPositions = yPositions
    this.running = false
  }

  draw (ctx): void {
    if (this.running) {
      ctx.fillStyle = 'rgba(0,0,0,.05)'
      ctx.fillRect(0, 0, this.width, this.height)
      ctx.fillStyle = '#0F0'
      ctx.font = '10pt Georgia'
      this.yPositions.map((y, index) => {
        const text = String.fromCharCode(1e2 + Math.random() * 33)
        const x = (index * 10) + 10
        ctx.fillText(text, x, y)
        if (y > 100 + Math.random() * 1e4) {
          this.yPositions[index] = 0
        } else {
          this.yPositions[index] = y + 10
        }
      })
      this.frameId = requestAnimationFrame(() => this.draw(ctx))
    }
  }

  run (ctx): void {
    this.running = true
    this.draw(ctx)
  }

  stop (): void {
    if (this.frameId) {
      this.running = false
      cancelAnimationFrame(this.frameId)
      this.frameId = undefined
    }
  }

  setSize (width: number, height: number, yPositions): void {
    this.width = width
    this.height = height
    this.yPositions = yPositions
  }
}
