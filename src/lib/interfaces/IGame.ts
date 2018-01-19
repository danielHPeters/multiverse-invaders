/**
 * Game interface.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default interface IGame {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  playing: boolean

  start (): void

  update (): void

  render (): void

  run (): void

  stop (): void
}
