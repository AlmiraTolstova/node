import { emitter } from "./fileEvents.js";

function time() {
  return new Date().toISOString();
}

// START
emitter.on("start", (event) => {
  console.log(`[${time()}] START`, event);
});

// SUCCESS
emitter.on("success", (event) => {
  console.log(`[${time()}] SUCCESS`, event);
});

// ERROR
emitter.on("error", (event) => {
  console.log(`[${time()}] ERROR`, event);
});

// PROGRESS
emitter.on("progress", (event) => {
  console.log(`[${time()}] PROGRESS`, event);
});
