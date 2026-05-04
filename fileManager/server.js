import http from "http";
import url from "url";

import {
  readFileAsync,
  writeFileAsync,
  deleteFileAsync,
  copyFileWithStreams,
  getFileInfo,
} from "./fileEvents.js";

// logger подключается автоматически (side effect)
import "./logger.js";

const port = 3333;

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url, true);
  const path = parsed.pathname;

  // ROOT
  if (path === "/") {
    res.end("Full File Manager API");
  }

  // READ
  else if (path === "/read") {
    readFileAsync("./data.txt");
    res.end("Reading file...");
  }

  // WRITE
  else if (path === "/write") {
    writeFileAsync("./data.txt", "Hello File Manager!");
    res.end("Writing file...");
  }

  // DELETE
  else if (path === "/delete") {
    deleteFileAsync("./data.txt");
    res.end("Deleting file...");
  }

  // COPY SMALL
  else if (path === "/copy/small") {
    copyFileWithStreams("./small.txt", "./small_copy.txt");
    res.end("Copying small file...");
  }

  // COPY LARGE
  else if (path === "/copy/large") {
    copyFileWithStreams("./large.txt", "./large_copy.txt");
    res.end("Copying large file...");
  }

  // INFO
  else if (path === "/info") {
    getFileInfo("./data.txt");
    res.end("Getting file info...");
  } else {
    res.statusCode = 404;
    res.end("Route not found");
  }
});

server.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});
