var webpack = require("webpack");

export default (cwd, server) => {
  var config = require('../webpack/dev.conf')
  var compiler = webpack(config(`${__dirname}/../`, cwd));

  // compiler.watch({ // watch options:
  //     aggregateTimeout: 300, // wait so long for more changes
  //     poll: true // use polling instead of native watchers
  //     // pass a number to set the polling interval
  // }, function(err, stats) {
  //     if(err)
  //       return console.error(JSON.stringify(err));
  //     var jsonStats = stats.toJson();
  //     if(jsonStats.errors.length > 0)
  //       for (var error of jsonStats.errors) console.error(error)
  //     if(jsonStats.warnings.length > 0)
  //       for (var warning of jsonStats.warnings) console.warn(warning)
  // });
  server(cwd, compiler)
}