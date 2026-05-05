// Задание 1
import http from "http";
const port = 3333;
const host = "127.0.0.1";

const server = http.createServer((req, res) => {
  const authHeader = req.headers["Authorization"];
  console.log("Authorization Header:", authHeader);

  if (!authHeader) {
    res.statusCode = 401;
    return res.end("Unauthorized");
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Authorization header received");
});

server.listen(port, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
