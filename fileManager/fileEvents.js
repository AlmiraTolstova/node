const fs = require("fs");
const EventEmitter = require("events");

const emitter = new EventEmitter();

function readFileAsync(filePath) {
  emitter.emit("start", { action: "read", filePath });

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      emitter.emit("error", { action: "read", filePath, err });
    } else {
      emitter.emit("success", { action: "read", filePath, data });
    }
  });
}
