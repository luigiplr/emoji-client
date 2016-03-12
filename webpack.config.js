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
        port: 8080
    },
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
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
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /^((?!\.global).)*\.css$/,
                include: path.resolve(__dirname, 'app'),
                exclude: /node_modules/,
                loader: 'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            }
        ]
    },
    postcss: [
        require('autoprefixer-core'),
        require('postcss-color-rebeccapurple')
    ],
    resolve: {
        extensions: ['', '.js'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ]
}
