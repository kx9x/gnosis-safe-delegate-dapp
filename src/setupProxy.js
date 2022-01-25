// App is an express application, we can add an express middleware that will set headers for manifest.json request
// https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/fantom',
        createProxyMiddleware({
          target: 'https://safe.fantom.network/',
          changeOrigin: true,
          pathRewrite: {
              [`^/fantom`]: '',
          }
        })
      );
}