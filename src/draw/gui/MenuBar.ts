import { Color, VALID_COLOR } from '../Line'
import { ShapeType } from '../factory/ShapeFactory'
import Tool from '../interfaces/Tool'

export default class MenuBar {
  private element: HTMLElement
  private submenus: HTMLElement[]

  constructor (element: HTMLElement) {
    this.element = element
    this.submenus = []
  }

  static createEditMenu (settings, tool: Tool, context: CanvasRenderingContext2D, canvas: HTMLCanvasElement): HTMLElement[] {
    const colorEntries = []
    const entryText = 'Undo'
    const menuEntry = document.createElement('li') as HTMLElement
    const menuLink = document.createElement('a')
    menuLink.setAttribute('href', '#')
    menuLink.setAttribute('id', entryText.toLowerCase())
    menuLink.appendChild(document.createTextNode(entryText))
    menuEntry.appendChild(menuLink)
    menuEntry.classList.add('menuEntry')
    menuEntry.addEventListener('click', () => {
      tool.undo(context, canvas.width, canvas.height)
    })
    colorEntries.push(menuEntry)
    return colorEntries
  }

  static createColorMenu (settings): HTMLElement[] {
    const colors = ['Red', 'Black', 'Blue', 'Yellow']
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
        settings.activeColor = Color[color.toUpperCase()]
      })
      colorEntries.push(menuEntry)
    })

    const colorForm = document.createElement('form')
    const colorInput = document.createElement('input') as HTMLInputElement
    colorInput.setAttribute('type', 'color')
    colorInput.setAttribute('accept', VALID_COLOR)
    colorInput.addEventListener('change', () => {
      settings.activeColor = colorInput.value
    })
    colorForm.appendChild(colorInput)
    colorForm.classList.add('menuEntry')
    colorEntries.push(colorForm)
    return colorEntries
  }

  static createShapesMenu (settings): HTMLElement[] {
    const tools = ['Line', 'Rectangle', 'Triangle', 'Circle']
    const toolEntries = []
    tools.forEach(shape => {
      const menuEntry = document.createElement('li') as HTMLElement
      const menuLink = document.createElement('a')
      menuLink.setAttribute('href', '#')
      menuLink.setAttribute('id', shape.toLowerCase())
      menuLink.appendChild(document.createTextNode(shape))
      menuEntry.appendChild(menuLink)
      menuEntry.classList.add('menuEntry')
      menuEntry.addEventListener('click', () => {
        settings.activeTool = ShapeType[shape.toUpperCase()]
      })
      toolEntries.push(menuEntry)
    })
    return toolEntries
  }

  addMenu (title: string, entries: HTMLElement[] = []): void {
    let submenu = document.createElement('li') as HTMLElement
    let menuLink = document.createElement('a')
    menuLink.setAttribute('href', '#')
    menuLink.appendChild(document.createTextNode(title))
    submenu.appendChild(menuLink)
    submenu.classList.add('submenu')
    submenu.setAttribute('id', title.toLowerCase())
    if (entries.length > 0) {
      const list = document.createElement('ul')
      list.classList.add('submenu-content')
      submenu.appendChild(list)
      entries.forEach(entry => {
        list.appendChild(entry)
      })
    }
    this.submenus[title.toLowerCase()] = submenu
    this.element.appendChild(submenu)
  }

  getMenu (title: string): HTMLElement {
    return this.submenus.hasOwnProperty(title.toLowerCase()) ? this.submenus[title.toLowerCase()] : null
  }
}
