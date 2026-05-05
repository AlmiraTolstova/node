// Задание 2
import http from "http";
import fs from "fs";
const port = 3333;
const host = "127.0.0.1";

const server = http.createServer((req, res) => {
  try {
    throw new Error("Test server error");
  } catch (err) {
    fs.appendFile(
      "errors.log",
      `${new Date().toISOString()} - ${err.message}\n`,
      () => {},
    );
    res.setHeader("Content-Type", "text/plain");
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
});

server.listen(port, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
