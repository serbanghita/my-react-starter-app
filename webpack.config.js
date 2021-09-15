var path = require("path");

module.exports = {
  entry: "./src/example1/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build/js"),
    publicPath: "/js/"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "inline-source-map",

  devServer: {
    contentBase: "build",
    watchContentBase: true
  },

  watch: false,

  node: {
    __dirname: true
  },

  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'src/example1')
    ],
    extensions: [".js", ".jsx"],
    // preferRelative: true
  },


  module: {
    rules: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.jsx$/, loader: "source-map-loader" },
      {
        test: /\.jsx?$/,
        include: [
          path.join(__dirname, 'src', 'setupTests.js'),
          path.join(__dirname, 'src', 'example1'),
        ],
        exclude: /(node_modules|src\/example2)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {targets: "defaults"}],
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  }
};
