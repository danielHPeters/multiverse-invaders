import Pane from './gui/Pane'
import MenuBar from './gui/MenuBar'

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('pane') as HTMLCanvasElement
  const menuBar = document.getElementById('menuBar') as HTMLElement
  const menu = new MenuBar(menuBar)
  const colors = ['Red', 'Black', 'Blue', 'Yellow']
  const colorEntries = []
  colors.forEach(color => {
    const menuEntry = document.createElement('li') as HTMLElement
    menuEntry.appendChild(document.createTextNode(color))
    menuEntry.classList.add('menuEntry')
    colorEntries.push(menuEntry)
  })

  menu.addMenu('File')
  menu.addMenu('Edit')
  menu.addMenu('Color', colorEntries)
  menu.addMenu('Options')
  menu.addMenu('Help')
  new Pane(canvas, menuBar).init()
})
