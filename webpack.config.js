const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'docs/javascripts')
  },
  devServer: {
    contentBase: './docs',
    publicPath: '/javascripts/',
    watchContentBase: true,
    open: true
  }
};
