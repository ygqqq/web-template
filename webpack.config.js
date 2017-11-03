const path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: './src/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: "babel-loader"
        }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader", "postcss-loader"]
        }, {
            test: /\.(jpg|png|gif|jpeg|svg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10240,
                    name: 'images/[hash].[ext]'
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'web app',
            template: './src/index.html',
            chunks: ['app'],
            minify: {
                collapseWhitespace: false
            }
        })
    ]
}