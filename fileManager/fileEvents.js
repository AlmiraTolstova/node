import fs from "fs";
import EventEmitter from "events";

export const emitter = new EventEmitter();

// ---------------- EVENTS WRAPPER ----------------
export function emit(event, data) {
  emitter.emit(event.type, { ...event, data });
}

// ---------------- FILE FUNCTIONS ----------------

// READ
export function readFileAsync(filePath) {
  emit({ type: "start", action: "read", filePath });

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      emit({ type: "error", action: "read", filePath, error: err });
    } else {
      emit({ type: "success", action: "read", filePath, data });
    }
  });
}

// WRITE
export function writeFileAsync(filePath, content) {
  emit({ type: "start", action: "write", filePath });

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      emit({ type: "error", action: "write", filePath, error: err });
    } else {
      emit({ type: "success", action: "write", filePath });
    }
  });
}

// DELETE
export function deleteFileAsync(filePath) {
  emit({ type: "start", action: "delete", filePath });

  fs.unlink(filePath, (err) => {
    if (err) {
      emit({ type: "error", action: "delete", filePath, error: err });
    } else {
      emit({ type: "success", action: "delete", filePath });
    }
  });
}

// COPY STREAMS
export function copyFileWithStreams(source, dest, chunkSize = 64 * 1024) {
  emit({ type: "start", action: "copy", source, dest });

  if (!fs.existsSync(source)) {
    emit({ type: "error", action: "copy", source, error: "File not found" });
    return;
  }

  const readStream = fs.createReadStream(source);
  const writeStream = fs.createWriteStream(dest);

  let bytes = 0;
  let buffer = 0;

  readStream.on("data", (chunk) => {
    bytes += chunk.length;
    buffer += chunk.length;

    if (buffer >= chunkSize) {
      emit({ type: "progress", action: "copy", source, bytes });
      buffer = 0;
    }
  });

  readStream.on("error", (err) => {
    emit({ type: "error", action: "copy", source, error: err });
  });

  writeStream.on("error", (err) => {
    emit({ type: "error", action: "copy", dest, error: err });
  });

  writeStream.on("finish", () => {
    emit({ type: "success", action: "copy", source, dest });
  });

  readStream.pipe(writeStream);
}

// FILE INFO
export function getFileInfo(filePath) {
  emit({ type: "start", action: "info", filePath });

  fs.stat(filePath, (err, stats) => {
    if (err) {
      emit({ type: "error", action: "info", filePath, error: err });
    } else {
      emit({
        type: "success",
        action: "info",
        filePath,
        size: stats.size,
        created: stats.birthtime,
      });
    }
  });
}
