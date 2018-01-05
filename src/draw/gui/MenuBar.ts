export default class MenuBar {
  private element: HTMLElement
  private submenus: HTMLElement[]

  constructor (element: HTMLElement) {
    this.element = element
    this.submenus = []
  }

  addMenu (title: string, entries: HTMLElement[] = []): void {
    let submenu = document.createElement('li') as HTMLElement
    submenu.appendChild(document.createTextNode(title))
    submenu.classList.add('submenu')
    submenu.setAttribute('id', title.toLowerCase())
    if (entries.length > 0) {
      let list = document.createElement('ul')
      // submenu.addEventListener('mouseover', ev => this.show(submenu))
      // submenu.addEventListener('mouseleave', ev => this.hide(submenu))
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

  hide (submenu: HTMLElement): void {
    (submenu.children[0] as HTMLElement).style.display = 'none'
  }

  show (submenu: HTMLElement): void {
    (submenu.children[0] as HTMLElement).style.display = 'block'
  }
}
