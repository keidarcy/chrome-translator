const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: './src/app.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: 3
                }
              ]
            ]
          }
        },
        include: [path.resolve(__dirname, 'src')]
      }
    ]
  },
  output: {
    publicPath: 'dist',
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  }
}
