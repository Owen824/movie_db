const path = require('path');

module.exports = {
  entry: ['./src/index.jsx'],
  output: {
    filename: './public/bundle.js',
    path: path.resolve(__dirname, './'),
  },
  module: {
      rules:[
          {test: /.jsx$/, exclude: /node_modules/, use: {loader:'babel-loader',
        options:{presets:['@babel/preset-react', '@babel/preset-env']}}},
        {test: /.js$/, exclude: /node_modules/, use: {loader:'babel-loader',
        options:{presets:['@babel/preset-env']}}}
      ]
  },
  devServer:{
      port:9000
  }

};