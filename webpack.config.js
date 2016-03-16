const webpack = require('webpack')
const path = require('path')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        progress: true,
        contentBase: './app',
        host: '0.0.0.0',
        port: 4000
    },
    entry: [
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, 'app/main') 
    ],
    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: './bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            include: path.resolve(__dirname, 'app'),
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader'
        }, {
            test: /^((?!\.global).)*\.css$/,
            loaders: [
                'style-loader',
                'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            ]
        }]
    },
    postcss: [
        require('autoprefixer-core'),
        require('postcss-color-rebeccapurple')
    ],
    resolve: {
        extensions: ['', '.js'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
