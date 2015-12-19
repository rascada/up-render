module.exports = {
  entry: './src/main.js',
  output: {
    path: 'dist',
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
