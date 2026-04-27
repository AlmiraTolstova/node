const fs = require("fs");

function logMessage(message) {
  fs.appendFile("log.txt", message + "\n", (err) => {
    if (err) {
      console.error("Ошибка при записи в файл:", err);
      return;
    }
    console.log("Сообщение записано в лог");
  });
}

module.exports = {
  logMessage,
};
