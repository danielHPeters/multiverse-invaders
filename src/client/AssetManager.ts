export enum AssetType {
  SPRITE = 'SPRITE', SPRITE_SHEET = 'SPRITE_SHEET', AUDIO = 'AUDIO'
}

export class AssetManager {
  cache
  queue
  downloadCount: number

  /**
   *
   */
  constructor () {
    this.cache = {
      sprites: {}
    }
    this.downloadCount = 0
    this.queue = []
  }

  /**
   *
   * @returns {boolean}
   */
  done (): boolean {
    return this.downloadCount === this.queue.length
  }

  /**
   *
   * @param {string} id
   * @param {string} path
   * @param {string} type
   */
  queueDownload (id: string, path: string, type: string) {
    this.queue.push({id: id, path: path, type: type})
  }

  /**
   *
   * @param {string} id
   * @param {string} path
   * @param callback
   */
  loadSprite (id: string, path: string, callback) {
    let sprite = new Image()
    sprite.addEventListener('load', () => {
      this.downloadCount++
      if (this.done()) {
        callback()
      }
    })
    sprite.src = path
    this.cache.sprites[id] = sprite
  }

  /**
   *
   * @param callback
   */
  downloadAll (callback) {
    this.queue.forEach(item => {
      if (item.type === AssetType.SPRITE) {
        this.loadSprite(item.id, item.path, callback)
      }
    })
  }

  /**
   *
   * @param {string} id
   * @returns {any}
   */
  getSprite (id: string): any {
    return this.cache.sprites[id]
  }
}
