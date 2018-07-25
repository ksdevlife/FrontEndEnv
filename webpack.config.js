const path = require('path');

module.exports = {
    mode: 'production',
    watch: true,
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, './'),
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
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
};