import Pane from './gui/Pane'
import MenuBar from './gui/MenuBar'
import Settings from './config/Settings'
import { Color } from './Line'
import ShapeTool from './tools/ShapeTool'

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('pane') as HTMLCanvasElement
  const context = canvas.getContext('2d')
  const menuBar = document.getElementById('menuBar') as HTMLElement
  const settings = new Settings(Color.BLACK, menuBar.offsetHeight)
  const menu = new MenuBar(menuBar)
  const tool = new ShapeTool(settings)

  menu.addMenu('File')
  menu.addMenu('Edit', MenuBar.createEditMenu(settings, tool, context, canvas))
  menu.addMenu('Color', MenuBar.createColorMenu(settings))
  menu.addMenu('Shapes', MenuBar.createShapesMenu(settings))
  menu.addMenu('Options')
  menu.addMenu('Help')
  new Pane(canvas, menuBar, context, tool).init()
})
