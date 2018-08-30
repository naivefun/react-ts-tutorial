var rewireWebpackBundleAnalyzer = require('react-app-rewire-webpack-bundle-analyzer');
module.exports = function override(config, env) {
    switch (env) {
        case 'production':
            config = rewireWebpackBundleAnalyzer(config, env, {
                analyzerMode: 'static',
                reportFilename: 'report.html'
            });
            break;
        default:
    }
    return config;
};
//# sourceMappingURL=config-overrides.js.map