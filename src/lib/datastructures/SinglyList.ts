import { ListNode } from './ListNode'

export class SinglyList {
  private _elementsCount: number
  private _head: ListNode
  private _errorMessages

  constructor () {
    this._elementsCount = 0
    this._head = null
    this._errorMessages = {
      indexOutOfBounds: 'Failure: non-existent index.'
    }
  }

  add (value): void {
    let node = new ListNode(value)
    let currentNode = this._head

    if (this._elementsCount === 0) {
      this._head = node
    } else {
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = node
    }
    this._elementsCount++
  }

  searchAt (index: number): ListNode {
    let current = this._head

    if (this._elementsCount === 0 || index < 0 || index > this._elementsCount - 1) {
      throw new Error(this._errorMessages.indexOutOfBounds)
    }

    for (let i = 0; i < index; i++) {
      current = current.next
    }
    return current
  }

  removeAt (index: number): void {
    if (index < 0 || index > this._elementsCount - 1) {
      throw new Error(this._errorMessages.indexOutOfBounds)
    }
    if (index === 0) {
      this._head = this._head.next
    } else {
      let current = this._head
      // Go to node before index
      for (let i = 0; i < index - 1; i++) {
        current = current.next
      }
      // Delete node by removing reference
      current.next = current.next.next
    }

    this._elementsCount--
  }

  get elementsCount (): number {
    return this._elementsCount
  }

  set elementsCount (value: number) {
    this._elementsCount = value
  }

  get head (): ListNode {
    return this._head
  }

  set head (value: ListNode) {
    this._head = value
  }

  length () {
    return this.elementsCount
  }
}
