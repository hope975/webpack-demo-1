var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装

module.exports = {
    mode: 'development',
    entry: './src/index.js', //注意入口的路径问题
    output: {
        filename: '[name].[contenthash].js' //注意出口要配置hash表
    },
    plugins: [new HtmlWebpackPlugin({
        title: '首页',
        template: 'src/assets/index.html'
    })],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
