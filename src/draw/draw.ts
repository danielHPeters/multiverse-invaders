import Pane from './gui/Pane'
import MenuBar from './gui/MenuBar'
import { Color } from './Line'

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('pane') as HTMLCanvasElement
  const context = canvas.getContext('2d')
  const menuBar = document.getElementById('menuBar') as HTMLElement
  const menu = new MenuBar(menuBar)
  const colors = ['Red', 'Black', 'Blue', 'Yellow']
  const settings = { activeColor: '#000000' }
  const colorEntries = []
  colors.forEach(color => {
    const menuEntry = document.createElement('li') as HTMLElement
    const menuLink = document.createElement('a')
    menuLink.setAttribute('href', '#')
    menuLink.setAttribute('id', color.toLowerCase())
    menuLink.appendChild(document.createTextNode(color))
    menuEntry.appendChild(menuLink)
    menuEntry.classList.add('menuEntry')
    menuEntry.addEventListener('click', () => {
      // context.strokeStyle = Color[color.toUpperCase()].toString()
      // console.log(Color[color.toUpperCase()])
      settings.activeColor = Color[color.toUpperCase()]
    })
    colorEntries.push(menuEntry)
  })

  menu.addMenu('File')
  menu.addMenu('Edit')
  menu.addMenu('Color', colorEntries)
  menu.addMenu('Options')
  menu.addMenu('Help')
  const pane = new Pane(canvas, menuBar, context, settings)
  pane.init()
})
