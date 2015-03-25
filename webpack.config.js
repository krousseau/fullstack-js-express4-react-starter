var webpack      = require('webpack');
var path         = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');

var config = {
    entry: {
        app: './front-end/src/js/app.js'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        noParse: [],
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [node_modules],
                loader: 'babel-loader'   // ES6 and jsx compiling
            },
            {
              test: /\.jsx?$/,
              exclude: [node_modules],
              loader: 'eslint-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'flux': path.resolve(node_modules, 'flux/lib/Dispatcher.js')
        }
    },
    devtool: 'eval-source-map',
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
    ]
};

// The minified files to use for development so webpack does not need to go in
// and recompile these every time. This should not be in our prod configuration...
var deps = [
    'react/dist/react-with-addons.min.js'
];

// Run through deps and extract the first part of the path,
// as that is what you use to require the actual node modules
// in your code. Then use the complete path to point to the correct
// file and make sure webpack does not try to parse it
deps.forEach(function (dep) {
    var depPath = path.resolve(node_modules, dep);
    config.resolve.alias[dep.split(path.sep)[0]] = depPath;
    config.module.noParse.push(depPath);
});

module.exports = config;
