/* eslint-disable */
const webpack           = require('webpack');
const path              = require('path');
const Dashboard         = require('webpack-dashboard');
const DashboardPlugin   = require('webpack-dashboard/plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const nodeEnv            = process.env.NODE_ENV || 'development';
const nodeModulesPath    = path.resolve(__dirname, './node_modules');
const modulesPath        = path.resolve(__dirname, './src');
const resolveModulesPath = [modulesPath, nodeModulesPath];

function setloaders() {
    return [
        {
            test: /\.js?$/,
            use: ['babel-loader'],
            include: modulesPath,
            exclude: [nodeModulesPath]
        }
    ];
}

function setPlugins(isProd) {
    const plugins = [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
            options: {
                context: './src'
            }
        }),

        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
        }),

        new webpack.ProvidePlugin([
            'baseui-wc-utils'
        ])
    ];

    if (isProd) {
        plugins.push(
            new webpack.optimize.OccurrenceOrderPlugin(true),
            new webpack.optimize.UglifyJsPlugin({ warnings: false })
        );
    } else {
        const dashboard = new Dashboard();

        plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new DashboardPlugin(dashboard.setData),
            new OpenBrowserPlugin({
                url: 'http://localhost:1818/demo'
            })
        );
    }

    return plugins;
}

module.exports = function () {
    const isProd = (nodeEnv === 'production');

    const config = {
        devtool: isProd ? 'hidden-source-map' : 'eval-source-map',
        entry: {
            'baseui-wc-utils' : './src/index'
        },
        output: {
            path: path.join(__dirname, 'dist'),
            filename: '[name].js',
            publicPath: 'dist/',
            library: '[name]',
            libraryTarget: 'umd',
            umdNamedDefine: true
        },
        module: {
            rules: setloaders(isProd)
        },
        resolve: {
            modules: resolveModulesPath
        },
        devServer: {
            host: '0.0.0.0',
            port: 1818,
            hot: true,
            quiet: true,
            historyApiFallback: true,
            contentBase: './'
        },
        plugins: setPlugins(isProd)
    };

    return config;
}
