const path = require('path');

module.exports = {
    mode: 'production',
    watch: false,
    entry: './src/main.js',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.tx', '.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    externals: [
        (function () {
            var IGNORES = ["fs","child_process","electron","path","assert","cluster","crypto","dns","domain","events","http","https","net","os","process","punycode","querystring","readline","repl","stream","string_decoder","tls","tty","dgram","url","util","v8","vm","zlib","resemblejs"];
            return function (context, request, callback) {
                if (IGNORES.indexOf(request) >= 0) {
                    return callback(null, "require('" + request + "')");
                }
                return callback();
            };
        })()
      ],

};