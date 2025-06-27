const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({ static: "./public" });

const port = process.env.PORT || 8000;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`🚀 Luxora backend running at http://localhost:${port}`);
});
