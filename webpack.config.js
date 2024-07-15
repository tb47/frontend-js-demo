const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./frontend/static/js/main.js",
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        static: "./dist",
        historyApiFallback: true
    },
    output: {
        chunkFilename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: "/"
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./frontend/index.html"
    })],
};