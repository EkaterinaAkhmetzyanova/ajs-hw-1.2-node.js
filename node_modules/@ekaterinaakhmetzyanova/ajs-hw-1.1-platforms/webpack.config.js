const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "index.js",
        library: "ajs-hw-1.1-platforms",
        libraryTarget: "umd",
        libraryExport: "default",
        globalObject: "this",
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            },
        }, ],
    },
};