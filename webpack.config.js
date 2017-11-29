const path = require('path')

module.exports = {
  entry: {
    multiverseInvaders: './src/game/app.ts',
    tileSetMap: './src/lib/tileset/test.ts'
  },
  output: {
    path: path.join(__dirname, './public/javascripts'),
    filename: '[name].bundle.js'
  },
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
      {test: /\.tsx?$/, loader: 'ts-loader'}
    ]
  }
}
