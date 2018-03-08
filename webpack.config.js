const Uglify = require('uglifyjs-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    'multiverseInvaders': './src/app.ts',
    'pathfinding': './src/algorithm/pathfinding/app.ts',
    'multiverseInvaders.min': './src/app.ts',
    'pathfinding.min': './src/algorithm/pathfinding/app.ts'
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, './public/javascripts'),
    filename: '[name].js'
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
  },
  plugins: [
    new Uglify({
      include: /\.min\.js$/,
      sourceMap: true
    })
  ]
}
