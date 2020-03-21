const path = require('path');

module.exports = {
    entry: './src/client/client.js', 
    output: { 
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'), // webpack creates dir
    },
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
    },
};