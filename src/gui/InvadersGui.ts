import Observer from '../lib/observer/Observer'

/**
 * Multiverse Invaders GUI.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class InvadersGui implements Observer {
  scoreElement: HTMLElement

  /**
   * Constructor.
   */
  constructor () {
    const element = document.getElementById('score')

    if (element) {
      this.scoreElement = element
    }
  }

  /**
   *
   * @param state
   */
  update (state: any): void {
    this.scoreElement.innerHTML = state.toString()
  }
}
