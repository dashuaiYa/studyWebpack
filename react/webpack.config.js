module.exports = {
    mode: 'development',
    entry: __dirname + '/entry.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './public',
        historyApiFallback: false,
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}