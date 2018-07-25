const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack'); // cause error

module.exports = {
    mode: 'production',
    watch: true,
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    }

                ],
            },
            {
                test: /\.scss/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        },
                    },
                    {
                        loader: 'sass-loader',
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
};