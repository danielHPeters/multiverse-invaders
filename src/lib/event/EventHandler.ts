/**
 * Wrapper class for event handler convenience functions.
 */
export default class EventHandler {
  /**
   * Register multiple events with the same event listener on one element.
   *
   * @param element html element to add the events to
   * @param events the events to be registered
   * @param listener the event listener function
   */
  static register (element: HTMLElement, events: string[], listener: EventListener): void {
    events.forEach(event => element.addEventListener(event, listener))
  }
}
