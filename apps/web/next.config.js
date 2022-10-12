const webpack = require('webpack');
const withTM = require('next-transpile-modules')(['tiktok-dl-core']);
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');

const {parsed: cusEnv} = require('dotenv').config({
    path: require('path').resolve(__dirname, '..', '..', '.env'),
});

module.exports = withTM({
    reactStrictMode: true,
    experimental: {esmExternals: true},
    i18n: {
        locales: ['en', 'hn'],
        defaultLocale: 'hn',
    },
    images: {
        domains: ['s3.ap-southeast-1.wasabisys.com'],
    },
    webpack(config) {
        // adding windicss plugin
        config.plugins.push(new WindiCSSWebpackPlugin());
        if (typeof cusEnv !== 'undefined') {
            config.plugins.push(new webpack.EnvironmentPlugin(cusEnv));
        }
        return config;
    },
});
