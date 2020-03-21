module.exports = {
    //Run babel on all
    module: {
        rules: [
            {
                test: /\.js$/, //only running on js files
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0', //async code
                        ['env', { targets: { browsers: ['last 2 versions'] }}], // running on the last 2 versions of browsers
                    ]
                }
            }
        ]
    }
};