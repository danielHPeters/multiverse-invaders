import { ShapeType } from '../factory/ShapeFactory'
import Shape from '../interfaces/Shape'

export default class Settings {
  activeColor
  activeTool: ShapeType
  menuHeight: number
  history: Shape[]
  fill: boolean

  constructor (activeColor, menuHeight: number, activeTool = ShapeType.LINE) {
    this.activeColor = activeColor
    this.menuHeight = menuHeight
    this.activeTool = activeTool
    this.history = []
    this.fill = false
  }
}
