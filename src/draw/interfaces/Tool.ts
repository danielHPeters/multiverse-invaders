import Settings from '../config/Settings'
import Shape from './Shape'

export default interface Tool {
  down: boolean
  settings: Settings
  tempShape: Shape

  click (event): void

  move (event): void

  release (event): void

  renderAll (context: CanvasRenderingContext2D): void

  undo (context: CanvasRenderingContext2D, width: number, height: number): void
}
