const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // 여기서 db.json은 데이터베이스 파일입니다.
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log('JSON Server is running');
});
