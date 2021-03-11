const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/api/**', { target: 'http://localhost:3001' }));
  app.use(proxy('/signin', { target: 'http://localhost:3001' }));
  app.use(proxy('/signup', { target: 'http://localhost:3001' }));
  app.use(proxy('/signout', { target: 'http://localhost:3001' }));
};
