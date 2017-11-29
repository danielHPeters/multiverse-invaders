import { EntityType } from '../game/interfaces/CollideAble'
import { SpriteSheet } from './graphics/2D/SpriteSheet'

export enum AssetType {
  SPRITE = 'SPRITE', SPRITE_SHEET = 'SPRITE_SHEET', AUDIO = 'AUDIO'
}

export class AssetManager {
  audioContext
  cache
  queue
  downloadCount: number

  /**
   *
   */
  constructor () {
    this.cache = {
      sprites: {},
      spriteSheets: {},
      audio: {}
    }
    this.downloadCount = 0
    this.queue = []
    this.initAudioContext()
  }

  initAudioContext (): void {
    try {
      // Fix for browsers using prefixes
      window.AudioContext = window.AudioContext || webkitAudioContext
      this.audioContext = new AudioContext()
    } catch (e) {
      console.log('Web Audio API is not supported in this browser')
    }
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
  queueDownload (id: EntityType, path: string, type: AssetType): void {
    this.queue.push({
      id: id, path: path, type: type
    })
  }

  /**
   * Build an AJAX Request to loadAudio audio file into the buffer cache.
   *
   * @param {{}} item object with name of file and path to file
   * @param callback function to execute on done
   */
  loadAudio (item, callback): void {
    let request = new XMLHttpRequest()

    request.open('GET', item.path, true)
    request.responseType = 'arraybuffer'

    // Decode asynchronously
    request.addEventListener('load', () => {
      this.audioContext.decodeAudioData(
        request.response,
        buffer => {
          this.cache.audio[item.id] = buffer
          this.downloadCount += 1
          if (this.done()) {
            callback()
          }
        },
        error => { console.log('Error with decoding audio data' + error) }
      )
    })
    request.send()
  }

  /**
   *
   * @param item
   * @param callback
   */
  loadSprite (item, callback): void {
    let sprite = new Image()
    sprite.addEventListener('load', () => {
      this.downloadCount++
      if (this.done()) {
        callback()
      }
    })
    sprite.src = item.path
    this.cache.sprites[item.id] = sprite
  }

  /**
   * Load sprites sheet.
   *
   * @param item sprite sheet info
   * @param callback called upon downloading all
   */
  loadSpriteSheet (item, callback): void {
    let spriteSheet = new Image()
    spriteSheet.addEventListener('load', () => {
      this.cache.spriteSheets[item.id] = new SpriteSheet(spriteSheet, item.opts.frameWidth || 0, item.opts.frameHeight || 0)
      this.downloadCount += 1
      if (this.done()) {
        callback()
      }
    })
    spriteSheet.src = item.path
  }

  /**
   *
   * @param callback
   */
  downloadAll (callback): void {
    this.queue.forEach(item => {
      if (item.type === AssetType.AUDIO) {
        this.loadAudio(item, callback)
      } else if (item.type === AssetType.SPRITE) {
        this.loadSprite(item, callback)
      } else if (item.type === AssetType.SPRITE_SHEET) {
        this.loadSpriteSheet(item, callback)
      }
    })
  }

  /**
   * Create an audio buffer source node from cached buffer.
   * Send it to the destination of the audio context and play it.
   *
   * @param id filename
   */
  getSound (id): AudioBufferSourceNode {
    let sound = this.audioContext.createBufferSource()

    sound.buffer = this.cache.audio[id]
    sound.connect(this.audioContext.destination)
    return sound
  }

  /**
   *
   * @param {string} id
   * @returns {any}
   */
  getSprite (id: EntityType): any {
    return this.cache.sprites[id]
  }

  /**
   * Get sprite sheet by name.
   *
   * @param {EntityType} id
   * @returns {SpriteSheet}
   */
  getSpriteSheet (id: EntityType): SpriteSheet {
    return this.cache.spriteSheet[id]
  }
}
