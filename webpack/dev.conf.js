var webpack = require('webpack')


module.exports = (directory, cwd, routes) => {
  return {
    entry: {
      main: `${directory}/render/client.jsx`,
    },
    output: {
      path: `./public/js`,
      filename: '[name].js',
      chunkFilename: '[id].js',
      publicPath: '/assets/js/'
    },
    module: {
      loaders: [
        {
          test: /\.jsx|.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: require('../babel/presets')
        },
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    plugins: [
      new webpack.DefinePlugin({
        "ROUTES": JSON.stringify(routes),
        "CWD": JSON.stringify(cwd)
      })
    ]
  }
}