var path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js', //注意入口的路径问题
    output: {
        filename: '[name].[contenthash].js' //注意出口要配置hash表
    }
};
