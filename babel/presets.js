module.exports = {
  presets: [__dirname + '/../node_modules/babel-preset-react', __dirname + '/../node_modules/babel-preset-es2015'],
  plugins: [
    __dirname + '/../node_modules/babel-plugin-transform-class-properties',
    __dirname + '/../node_modules/babel-plugin-syntax-class-properties'
  ]
}