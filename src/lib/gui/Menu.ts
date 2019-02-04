import Settings from '../../config/Settings'

enum ElementClasses {
  MENU_CONTENT = 'tabContent',
  MENU_LINK = 'tabLink',
  ACTIVE = 'active'
}

/**
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Menu {
  id: string
  title: string
  container: HTMLElement
  titleElement: HTMLElement
  linkElement: HTMLElement

  /**
   * Constructor. Initializes menu elements.
   *
   * @param {string} id Menu id
   * @param title
   * @param {Settings} settings Application settings
   */
  constructor (id: string, title: string, settings: Settings) {
    this.id = id
    this.title = title
    this.container = document.createElement('div')
    this.titleElement = document.createElement('h4')
    this.linkElement = document.createElement('button')
  }

  /**
   *
   * @param {Event} event
   */
  open (event: Event): void {
    let tabContent
    let tabLink
    tabContent = document.getElementsByClassName(ElementClasses.MENU_CONTENT)
    for (let i = 0; i < tabContent.length; i++) {
      const element = tabContent[i] as HTMLElement

      element.style.display = 'none'
    }
    tabLink = document.getElementsByClassName(ElementClasses.MENU_LINK)
    for (let i = 0; i < tabLink.length; i++) {
      tabLink[i].className = tabLink[i].className.replace(ElementClasses.ACTIVE, '')
    }
    this.container.style.display = 'block'
    this.linkElement.className += ' ' + ElementClasses.ACTIVE
  }

  addSlider (action: (event: Event) => void) {
    const slider = document.createElement('input')
    slider.setAttribute('id', 'effectsVolume')
    slider.setAttribute('type', 'range')
    slider.setAttribute('min', '0')
    slider.setAttribute('max', '1')
    slider.setAttribute('step', '0.1')
  }
}
