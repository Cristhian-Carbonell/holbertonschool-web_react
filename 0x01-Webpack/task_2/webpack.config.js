const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './js/dashboard_main.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,
        loader: "css-loader",        
        options: {
          modules: {
            exportOnlyLocals: true,
          }  
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        enforce: 'pre',
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ]
  }
};
