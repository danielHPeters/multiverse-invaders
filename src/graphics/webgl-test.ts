import WebGL from './webgl/WebGL'

const horAspect = 480.0 / 640.0

function initBuffers (gl: WebGLRenderingContext): void {
  const squareVerticesBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesBuffer)

  const vertices = [
    1.0, 1.0, 0.0,
    -1.0, 1.0, 0.0,
    1.0, -1.0, 0.0,
    -1.0, -1.0, 0.0
  ]

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW)
}

document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('scene') as HTMLCanvasElement
  let gl = WebGL.initContext(canvas)

  if (gl) {
    WebGL.initShaders(gl)
    initBuffers(gl)
  }
})
