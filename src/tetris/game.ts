import Tetris from './Tetris'
import InputManager from '../lib/client/InputManager'
import Settings from '../lib/client/Settings'
import Piece from './Piece'

const settings = new Settings()
const inputManager = new InputManager(settings)
const canvas = document.getElementById('tetris') as HTMLCanvasElement
const tetris = new Tetris(canvas)
tetris.addPlayer('p1', 'Daniel', new Piece(tetris.arena.matrix.mArray[0].length / 2, 0))
inputManager.register(tetris.players[0])
tetris.start()
