var webpack = require('webpack')


module.exports = (directory, cwd, routes) => {
  return {
    entry: {
      App: [
        `${directory}/node_modules/webpack-dev-server/client?http://localhost:8080`,
        `${directory}/node_modules/webpack/hot/only-dev-server`,
        `${directory}/render/client.jsx`,
      ]
    },
    output: {
      path: `${cwd}/public/js/`,
      filename: 'bundle.js',
      publicPath: 'http://localhost:8080/assets/'
    },
    module: {
      loaders: [
        { test: /\.jsx?$/, 
          loaders: ['react-hot'], 
          include: __dirname + '/src' 
        },
        {
          test: /\.jsx|.js$/,
          exclude: /node_modules/,
          loader: `${directory}/node_modules/babel-loader`,
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
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
  }
}