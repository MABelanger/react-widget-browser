var path = require('path');
var webpack = require('webpack');

var createWebpackConfig = function(options) {
  return {
    mode: 'production',
    entry: './src/lib/index.js',
    output: {
        filename:'react-widget-browser.min.js',
        libraryTarget:'umd',
        umdNamedDefine: true,
        library: "ReactWidgetBrowserBundle",
        path: path.join(__dirname, '../', 'dist')
    },
    plugins:[
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      })
    ],
    module: {
      rules: [
        {
          test: /.js$/,
          include: path.join(__dirname, '../'),
          exclude: /node_modules/,
          loaders: 'babel-loader',
          query: {
            presets: [
              [ "@babel/preset-env", {
                  modules: false,
                  targets: {
                    browsers: "since 2012"
                  }
                }
              ],'@babel/preset-react',
            ]
          }
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        },
      ]
    },
    // this is for the sourcemaps
    devtool:'source-map' // you can also choose inline-source-map
  }
};

module.exports = createWebpackConfig;
