module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'build.js',
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
      },
    ],
  },
};
