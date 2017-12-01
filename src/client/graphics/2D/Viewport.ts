// wrapper for our game "classes", "methods" and "objects"
import { Player } from '../../../game/entities/Player'
import { Camera } from './Camera'
import { RectMap } from '../../../game/entities/RectMap'

// Game Script
(function () {
  // prepare our game canvas
  let canvas = document.getElementById('gameCanvas') as HTMLCanvasElement
  let context = canvas.getContext('2d')

  // game settings:
  let FPS = 30
  let INTERVAL = 1000 / FPS // milliseconds
  let STEP = INTERVAL / 1000 // seconds

  // setup an object that represents the room
  let room = {
    width: 5000,
    height: 3000,
    map: new RectMap(5000, 3000)
  }

  // generate a large tileSetImage texture for the room
  room.map.generate()

  // setup player
  let player = new Player(50, 50)

  // setup the magic camera !!!
  let camera = new Camera(0, 0, canvas.width, canvas.height, room.width, room.height)
  camera.follow(player, canvas.width / 2, canvas.height / 2)
  // Game update function
  let update = function () {
    player.move(STEP, room.width, room.height)
    camera.update()
  }

  // Game draw function
  let draw = function () {
    // clear the entire canvas
    context.clearRect(0, 0, canvas.width, canvas.height)

    // redraw all objects
    room.map.draw(context, camera.position.x, camera.position.y)
    player.draw(camera.position.x, camera.position.y)
  }

  // Game Loop
  let gameLoop = function () {
    update()
    draw()
  }

  // <-- configure play/pause capabilities:

  // I'll use setInterval instead of requestAnimationFrame for compatibility reason,
  // but it's easy to change that.

  let runningId = -1

  let play = function () {
    if (runningId === -1) {
      runningId = setInterval(function () {
        gameLoop()
      }, INTERVAL)
      console.log('play')
    }
  }

  let togglePause = function () {
    if (runningId === -1) {
      play()
    } else {
      clearInterval(runningId)
      runningId = -1
      console.log('paused')
    }
  }

  // -->

})()
