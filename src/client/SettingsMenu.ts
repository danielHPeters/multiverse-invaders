import { Settings } from './Settings'
import { Actions } from './InputManager'

export class SettingsMenu {
  element
  settings: Settings
  showing: boolean

  constructor (element, settings: Settings) {
    this.element = element
    this.settings = settings
    this.showing = false
    this.init()
  }

  init (): void {
    let title = document.createElement('h4')
    let playerTitle = document.createElement('h4')
    let form = document.createElement('form')
    let submit = document.createElement('input')
    let playerForm = document.createElement('form')
    let playerSubmit = document.createElement('input')
    title.appendChild(document.createTextNode('Keyboard'))
    playerTitle.appendChild(document.createTextNode('Player Settings'))
    form.setAttribute('id', 'keyboardSettings')
    form.setAttribute('method', 'post')
    playerForm.setAttribute('id', 'playerSettings')
    playerForm.setAttribute('method', 'post')
    submit.setAttribute('type', 'submit')
    submit.setAttribute('value', 'Save')
    playerSubmit.setAttribute('type', 'submit')
    playerSubmit.setAttribute('value', 'Save')
    this.element.appendChild(title)
    this.element.appendChild(form)
    Object.keys(this.settings.keyBoard).forEach(setting => this.addEntry(setting, form))
    form.appendChild(submit)
    form.addEventListener('submit', event => {
      event.preventDefault()
      this.settings.setKey((document.getElementById(Actions.UP) as HTMLInputElement).value, Actions.UP)
      this.settings.setKey((document.getElementById(Actions.DOWN) as HTMLInputElement).value, Actions.DOWN)
      this.settings.setKey((document.getElementById(Actions.LEFT) as HTMLInputElement).value, Actions.LEFT)
      this.settings.setKey((document.getElementById(Actions.RIGHT) as HTMLInputElement).value, Actions.RIGHT)
      this.settings.setKey((document.getElementById(Actions.SHOOT) as HTMLInputElement).value, Actions.SHOOT)
      this.clear()
    })
    this.element.appendChild(document.createElement('hr'))
    this.element.appendChild(playerTitle)
    this.element.appendChild(playerForm)
    Object.keys(this.settings.player).forEach(setting => this.addPlayerSettingEntry(setting, playerForm))
    playerForm.appendChild(playerSubmit)
    playerForm.addEventListener('submit', event => {
      event.preventDefault()
      this.settings.player.acceleration = Number((document.getElementById('acceleration') as HTMLInputElement).value)
      this.settings.player.maxVelocity = Number((document.getElementById('maxVelocity') as HTMLInputElement).value)
      this.settings.player.friction = Number((document.getElementById('friction') as HTMLInputElement).value)
      this.settings.player.fireDelay = Number((document.getElementById('fireDelay') as HTMLInputElement).value)
      this.clear()
    })
  }

  clear (): void {
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild)
    }
    this.init()
  }

  addPlayerSettingEntry (setting, element): void {
    let label = document.createElement('label')
    let input = document.createElement('input')
    let row = document.createElement('div')
    label.setAttribute('for', setting)
    label.appendChild(document.createTextNode(setting + ':'))
    input.setAttribute('id', setting)
    input.setAttribute('type', 'number')
    input.setAttribute('name', setting)
    input.setAttribute('value', this.settings.player[setting])
    row.classList.add('row')
    row.appendChild(label)
    row.appendChild(input)
    element.appendChild(row)
  }

  addEntry (setting, element): void {
    let row = document.createElement('div')
    let label = document.createElement('label')
    let input = document.createElement('input')
    row.classList.add('row')
    label.setAttribute('for', this.settings.keyBoard[setting])
    label.appendChild(document.createTextNode(this.settings.keyBoard[setting] + ':'))
    input.setAttribute('id', this.settings.keyBoard[setting])
    input.setAttribute('type', 'text')
    input.setAttribute('name', this.settings.keyBoard[setting])
    input.setAttribute('value', setting)
    row.appendChild(label)
    row.appendChild(input)
    element.appendChild(row)
  }

  toggleShow (): void {
    if (this.showing) {
      this.element.style.display = 'none'
      this.showing = false
    } else {
      this.element.style.display = 'block'
      this.showing = true
    }
  }
}
