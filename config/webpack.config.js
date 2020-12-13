const path = require('path');
const WebpackNodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { EnvironmentPlugin } = require('webpack');
const paths = require('./paths');

module.exports = {
    name: 'for production',
    mode: 'production',
    devtool: 'cheap-module-source-map',
    externals: [WebpackNodeExternals()],
    resolve: {
        extensions: paths.moduleFileExtensions.map((ext) => `.${ext}`),
        modules: ['node_modules'].concat(
            process.env.NODE_PATH.split(path.delimiter).filter(Boolean),
        ),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
        new EnvironmentPlugin({
            PORT: process.env.PORT,
            APP_NAME: process.env.APP_NAME,
            LOG_LEVEL: process.env.LOG_LEVEL,
            MONGO_URI: process.env.MONGO_URI,
            MONGO_USER: process.env.MONGO_USER,
            MONGO_PASS: process.env.MONGO_PASS,
            REDIS_HOST: process.env.REDIS_HOST,
            REDIS_PORT: process.env.REDIS_PORT,
            REDIS_PASS: process.env.REDIS_PASS,
        }),
    ],
    entry: {
        app: ['@babel/polyfill', './src/server'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
    },
};
