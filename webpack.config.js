const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    entry: {
        app: './src/index.ts',
        vendor: './src/vendor.ts',
        polyfills: './src/polyfills.ts',
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
    },

    resolve: {
        extensions: ['.js', '.ts'],
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                enforce: 'pre',
                use: 'tslint-loader',
            },
            {
                test: /\.ts$/,
                use: ['awesome-typescript-loader', 'angular2-template-loader?keepUrl=false'],
            },
            {
                test: /\.scss$/,
                use: ['raw-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.html$/,
                use: 'raw-loader',
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use: 'file-loader',
            },
        ]
    },

    devServer: {
        contentBase: path.resolve('./dist'),
        hot: true,
        historyApiFallback: true,
        inline: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve('./src/index.html'),
            chunks: ['app', 'vendor', 'polyfills'],
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills'],
        }),

        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, '../src')
        ),

        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(),
        new WebpackNotifierPlugin(),
    ],

    devtool: 'source-map',
};