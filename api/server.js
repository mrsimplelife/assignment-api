const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // 여기서 db.json은 데이터베이스 파일입니다.
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = (req, res) => {
  server.handle(req, res);
};
