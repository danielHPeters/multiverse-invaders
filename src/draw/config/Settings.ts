import { Color } from '../Line'
import { ShapeType } from '../factory/ShapeFactory'
import Shape from '../interfaces/Shape'

export default class Settings {
  activeColor: Color
  activeTool: ShapeType
  menuHeight: number
  history: Shape[]

  constructor (activeColor: Color, menuHeight: number, activeTool = ShapeType.LINE) {
    this.activeColor = activeColor
    this.menuHeight = menuHeight
    this.activeTool = activeTool
    this.history = []
  }
}
