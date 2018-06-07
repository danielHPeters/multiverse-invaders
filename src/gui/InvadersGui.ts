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
    this.scoreElement = document.getElementById('score')
  }

  /**
   *
   * @param state
   */
  update (state: any): void {
    this.scoreElement.innerHTML = state.toString()
  }
}
