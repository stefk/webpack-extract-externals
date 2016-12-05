const path = require('path')
const ExtractExternalsPlugin = require('./ExtractExternalsPlugin')

module.exports = {
  entry: {
    a: './a.js',
    b: ['./b.js'],
    c: './c.js'
  },
  externals: {
    'jquery': 'jQuery',
    'jquery-plugin-foo': '"jquery-plugin-foo-empty-export"',
    'jquery-plugin-bar': '"jquery-plugin-bar-empty-export"'
  },
  output: {
    path: path.join(__dirname, "js"),
    filename: "[name].js"
  },
  plugins: [
    new ExtractExternalsPlugin()
  ]
}
