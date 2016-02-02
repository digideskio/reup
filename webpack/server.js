var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");

export default (cwd, compiler) => {
  var server = new WebpackDevServer(compiler, {
    // webpack-dev-server options

    contentBase: cwd,
    // or: contentBase: "http://localhost/",

    hot: true,
    
    // Enable special support for Hot Module Replacement
    // Page is no longer updated, but a "webpackHotUpdate" message is send to the content
    // Use "webpack/hot/dev-server" as additional module in your entry point
    // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does. 

    // Set this as true if you want to access dev server from arbitrary url.
    // This is handy if you are using a html5 router.
    historyApiFallback: true,
      publicPath: "/assets/",

  });
  server.listen(8080, "localhost", function() {});
}