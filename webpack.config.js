var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/app/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/app.bundle.js'
    },
     plugins: [
        new HtmlWebpackPlugin({
            title: 'Unit Testing AngularJS',
            template: './src/app/index.html',
            //minify: {
            //    collapseWhitespace: true
            //},
            hash: true
        })
    ]
}