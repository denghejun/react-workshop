const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //yarn add html-webpack-plugin --dev
const OpenBrowserPlugin = require('open-browser-webpack-plugin'); //yarn add open-browser-webpack-plugin --dev
const DashboardPlugin = require('webpack-dashboard/plugin'); //yarn add webpack-dashboard --dev
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: [
        'react-hot-loader/patch', //yarn add react-hot-loader --dev
        'webpack-dev-server/client?http://localhost:5000', //yarn add webpack-dev-server --dev
        'webpack/hot/only-dev-server',
        './index.js'
    ],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },

    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        port: 5000
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['react', 'es2015', 'stage-0'] }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({ template: 'index.html', inject: true }),
        new webpack.NoEmitOnErrorsPlugin(),
        new OpenBrowserPlugin({
            url: 'http://localhost:5000'
        }),
        new DashboardPlugin()
    ]
};
