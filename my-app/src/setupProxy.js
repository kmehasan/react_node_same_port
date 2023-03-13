const { createProxyMiddleware } = require('http-proxy-middleware');
const bodyParser = require('body-parser');
const onProxyReqHandler = function onProxyReq(proxyReq, req, res) {
    const bodyData = JSON.stringify(req.body);
    proxyReq.setHeader('Content-Type', 'application/json');
    proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
    proxyReq.write(bodyData);
}
module.exports = function(app) {
    app.use(bodyParser.json());
  app.use(
    '/server1',
    createProxyMiddleware({
        target: 'http://localhost:7011',
        changeOrigin: true,
        secure:false,
        logger: console,
        onProxyReq: onProxyReqHandler,
    })
  );
  app.use(
    '/server2',
    createProxyMiddleware({
      target: 'http://localhost:7012',
      changeOrigin: true,
      secure: false,
      onProxyReq: onProxyReqHandler,
    })
  );
  app.use(
    '/server3',
    createProxyMiddleware({
      target: 'http://localhost:7013',
      changeOrigin: true,
      secure: false,
      onProxyReq: onProxyReqHandler,
    })
  );
};