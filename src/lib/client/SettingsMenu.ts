import Settings from '../../config/Settings'
import AssetManager from './AssetManager'
import EventHandler from '../event/EventHandler'
import AudioManager from './AudioManager'

enum ElementClasses {
  TAB = 'tab',
  TAB_CONTENT = 'tabContent',
  TAB_LINK = 'tabLink',
  ACTIVE = 'active'
}

/**
 * Simple settings menu.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class SettingsMenu {
  element: HTMLElement
  mainMenu: HTMLDivElement
  settings: Settings
  assetManager: AssetManager
  audioManager: AudioManager
  visible: boolean

  constructor (elementId: string, settings: Settings, assetManager: AssetManager, audioManager: AudioManager) {
    this.element = document.getElementById(elementId) as HTMLDivElement
    this.settings = settings
    this.assetManager = assetManager
    this.audioManager = audioManager
    this.visible = false
  }

  public init (): void {
    this.createMainMenu()
    this.createKeyboardMenu('keyboardMenu', 'Keyboard', 'Keyboard Settings')
    this.createPlayerMenu('playerMenu', 'Player', 'Player Settings')
    this.createAudioMenu('audioMenu', 'Audio', 'Audio Settings')
  }

  public clear (): void {
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild)
    }
    this.init()
  }

  public toggleShow (): void {
    this.element.style.display = this.visible ? 'none' : 'block'
    this.visible = !this.visible
  }

  private createMainMenu (): void {
    this.mainMenu = document.createElement('div')
    this.mainMenu.classList.add(ElementClasses.TAB)
    this.element.appendChild(this.mainMenu)
  }

  private createKeyboardMenu (id: string, linkText: string, title: string): void {
    this.createTab(id, linkText, title, container => {
      Object.keys(this.settings.keyboard).forEach(
        setting => this.addEntry(
          this.settings.keyboard[setting],
          setting,
          'text',
          this.settings.keyboard[setting],
          container,
          input => this.settings.setKey(input.value, input.id)
        )
      )
    })
  }

  private createPlayerMenu (id: string, linkText: string, title: string): void {
    this.createTab(id, linkText, title, container => {
      Object.keys(this.settings.player).forEach(
        setting => this.addEntry(
          setting,
          this.settings.player[setting],
          'number',
          setting,
          container,
          input => this.settings.player[setting] = Number(input.value)
        )
      )
    })
  }

  private createAudioMenu (id: string, linkText: string, title: string): void {
    this.createTab(id, linkText, title, container => {
      this.addEntry(
        'masterVolume',
        1,
        'range',
        'Master Volume:',
        container,
        slider => this.audioManager.adjustMasterVolume(Number(slider.value))
      )
      this.addEntry(
        'ambientVolume',
        1,
        'range',
        'Ambient Volume:',
        container,
        slider => this.audioManager.adjustAmbientVolume(Number(slider.value))
      )
      this.addEntry(
        'effectsVolume',
        1,
        'range',
        'Effects Volume:',
        container,
        slider => this.audioManager.adjustEffectsVolume(Number(slider.value))
      )
    })
  }

  private openTab (event, tabId: string): void {
    let tabContent
    let tabLink
    tabContent = document.getElementsByClassName(ElementClasses.TAB_CONTENT)
    for (let i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = 'none'
    }
    tabLink = document.getElementsByClassName(ElementClasses.TAB_LINK)
    for (let i = 0; i < tabLink.length; i++) {
      tabLink[i].className = tabLink[i].className.replace(' ' + ElementClasses.ACTIVE, '')
    }
    document.getElementById(tabId).style.display = 'block'
    event.currentTarget.className += ' ' + ElementClasses.ACTIVE
  }

  private createTab (id: string, linkText: string, title: string, callback): void {
    const container = document.createElement('div')
    const menuLink = document.createElement('button')
    const titleElement = document.createElement('h4')
    EventHandler.register(menuLink, ['click', 'touchstart'], event => this.openTab(event, id))
    menuLink.textContent = linkText
    menuLink.classList.add(ElementClasses.TAB_LINK)
    container.id = id
    container.classList.add(ElementClasses.TAB_CONTENT)
    container.appendChild(titleElement)
    titleElement.textContent = title
    this.mainMenu.appendChild(menuLink)
    this.element.appendChild(container)
    callback(container)
  }

  private addEntry (id, value, type, labelText: string, parent, action, opts = { min: 0, max: 1, step: 0.1 }): void {
    const row = document.createElement('div')
    const label = document.createElement('label')
    const input = document.createElement('input')
    row.classList.add('row')
    label.setAttribute('for', id)
    label.textContent = labelText
    input.id = id
    input.name = id
    input.value = value
    input.type = type
    if (type === 'range') {
      input.min = opts.min.toString()
      input.max = opts.max.toString()
      input.step = opts.step.toString()
    }
    input.addEventListener('change', event => action(input))
    row.appendChild(label)
    row.appendChild(input)
    parent.appendChild(row)
  }
}
