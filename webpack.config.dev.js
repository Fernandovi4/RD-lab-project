const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = merge(common, {
    mode: 'development',
    //source map - Tradeoff choice for development builds.
    devtool: 'eval-cheap-source-map',
    // dev-server on port 9000
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        port: 9000,
    },
    plugins: [
        new ESLintPlugin(),
        new PrettierPlugin({
            printWidth: 80,
            tabWidth: 2,
            useTabs: false,
            semi: true,
            encoding: 'utf-8',
            extensions: [ ".js", ".ts" ]
        })
    ]
});
console.log('dev')

