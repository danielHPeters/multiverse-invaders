import { HitBox } from '../collision/HitBox'
import { Vector2 } from '../vector/Vector2'

export class TileSetMap {
  image
  context
  mapLayers
  tileSize: number
  tilesPerRow: number
  tilesPerColumn: number
  imageTilesPerRow: number
  hitBoxes: Array<HitBox>

  constructor (image, mapLayers, context, tileSize: number, tilesPerRow: number, tilesPerColumn: number, imageTilesPerRow: number) {
    this.image = image
    this.mapLayers = mapLayers
    this.context = context
    this.tileSize = tileSize
    this.tilesPerRow = tilesPerRow
    this.tilesPerColumn = tilesPerColumn
    this.imageTilesPerRow = imageTilesPerRow
    this.hitBoxes = []
  }

  drawLayer (layer): void {
    for (let row = 0; row < this.tilesPerRow; row++) {
      for (let col = 0; col < this.tilesPerColumn; col++) {
        let tile = layer[row][col]
        if (tile !== 0 && this.mapLayers.indexOf(layer) === this.mapLayers.length - 1) {
          this.hitBoxes.push(new HitBox((col * this.tileSize), (row * this.tileSize), this.tileSize, this.tileSize))
        }
        let tileRow = (tile / this.imageTilesPerRow) | 0
        let tileCol = (tile % this.imageTilesPerRow) | 0
        this.context.drawImage(
          this.image,
          (tileCol * this.tileSize),
          (tileRow * this.tileSize),
          this.tileSize,
          this.tileSize,
          (col * this.tileSize),
          (row * this.tileSize),
          this.tileSize,
          this.tileSize
        )
      }
    }
  }

  draw (): void {
    this.mapLayers.forEach(layer => this.drawLayer(layer))
  }
}
