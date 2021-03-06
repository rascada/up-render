'use strict';

let webpack = require('webpack');
let config = require('./webpack.config');

config.plugins = (config.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"',
    },
  }),

  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
]);

module.exports = config;
