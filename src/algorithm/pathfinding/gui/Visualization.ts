/**
 * Visualisation class
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Visualisation {
  grid
  element: HTMLElement

  /**
   *
   * @param grid
   * @param {HTMLElement} element
   */
  constructor (grid, element: HTMLElement) {
    this.grid = grid
    this.element = element
  }

  /**
   *
   */
  init (): void {
    this.grid.forEach((row) => {
      const rowDiv = document.createElement('div')
      rowDiv.classList.add('row')
      this.element.appendChild(rowDiv)
      row.forEach((column) => {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cell.classList.add(column)
        rowDiv.appendChild(cell)
      })
    })
  }

  /**
   *
   */
  clear (): void {
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild)
    }
  }
}
