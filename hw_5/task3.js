// Задание 3
import http from "http";
const port = 3333;
const host = "127.0.0.1";

const server = http.createServer((req, res) => {
  if (req.method === "PUT") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("PUT-запрос обработан");
  } else if (req.method === "DELETE") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("DELETE-запрос обработан");
  }
});

server.listen(port, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
