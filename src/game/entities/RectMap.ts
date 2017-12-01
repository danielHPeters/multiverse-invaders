export class RectMap {
  width: number
  height: number
  image: HTMLImageElement

  constructor (width: number, height: number) {
    this.width = width
    this.height = height

    // map texture
    this.image = null
  }

  /**
   * generate an example of a large map
   */
  generate (): void {
    let ctx = document.createElement('canvas').getContext('2d')
    ctx.canvas.width = this.width
    ctx.canvas.height = this.height

    let tilesCount = 44
    let tileWidth = 40
    let tileHeight = 40
    let rows = ~~(this.width / tilesCount) + 1
    let columns = ~~(this.height / tilesCount) + 1

    let color = 'red'
    ctx.save()
    ctx.fillStyle = 'red'

    let x = 0
    let y = 0
    for (let i = 0; i < rows; i++) {
      y = 0
      ctx.beginPath()
      for (let j = 0; j < columns; j++) {
        ctx.rect(x, y, tileWidth, tileHeight)
        y += tilesCount
      }
      color = (color === 'red' ? 'blue' : 'red')
      ctx.fillStyle = color
      ctx.fill()
      ctx.closePath()
      x += 44
    }
    ctx.restore()

    // store the generate map as this tileSetImage texture
    this.image = new Image()
    this.image.src = ctx.canvas.toDataURL('tileSetImage/png')

    // clear context
    ctx = null
  }

  /**
   * draw the map adjusted to camera
   * @param context
   * @param xView
   * @param yView
   */
  draw (context, xView, yView): void {
    // easiest way: draw the entire map changing only the destination coordinate in canvas
    // canvas will cull the tileSetImage by itself (no performance gaps -> in hardware accelerated environments, at least)
    // context.drawImage(this.tileSetImage, 0, 0, this.tileSetImage.width, this.tileSetImage.height, -x, -y, this.tileSetImage.width, this.tileSetImage.height);

    // didactic way:

    let sx
    let sy
    let dx
    let dy
    let sWidth
    let sHeight
    let dWidth
    let dHeight

    // offset point to crop the tileSetImage
    sx = xView
    sy = yView

    // dimensions of cropped tileSetImage
    sWidth = context.canvas.width
    sHeight = context.canvas.height

    // if cropped tileSetImage is smaller than canvas we need to change the source dimensions
    if (this.image.width - sx < sWidth) {
      sWidth = this.image.width - sx
    }
    if (this.image.height - sy < sHeight) {
      sHeight = this.image.height - sy
    }

    // location on canvas to draw the croped tileSetImage
    dx = 0
    dy = 0
    // match destination with source to not scale the tileSetImage
    dWidth = sWidth
    dHeight = sHeight

    context.drawImage(this.image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
  }
}
