const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy('/api', {
        target: 'http://localhost:8080', pathRewrite: {
            '^/api/': '/api/'
        }
    }));
    app.use(proxy('/actuator/health', {
        target: 'http://localhost:8080', pathRewrite: {
            '^/actuator/health/': '/actuator/health'
        }
    }))
};