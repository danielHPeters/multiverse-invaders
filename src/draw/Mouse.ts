import Point from './Point'
import Line from './Line'

export default class LineTool {
  start: Point
  end: Point
  lines: Line[]
  tempLine: Line
  down: boolean
  offsetY: number

  constructor (offsetY = 0) {
    this.start = new Point(0, 0)
    this.end = new Point(0, 0)
    this.lines = []
    this.tempLine = new Line(this.start, this.end)
    this.down = false
    this.offsetY = offsetY
  }

  click (event): void {
    this.down = true
    this.start.set(event.clientX, event.clientY - this.offsetY)
  }

  move (event): void {
    if (!this.down) return
    this.tempLine.end.set(event.clientX, event.clientY - this.offsetY)
  }

  release (event): void {
    this.end.set(event.clientX, event.clientY - this.offsetY)
    this.lines.push(new Line(this.start.clone(), this.end.clone()))
    this.down = false
  }
}
