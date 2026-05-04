// Задание 2
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();
const fileName = process.env.FILENAME;

fs.readFile(`./${fileName}`, "utf-8", (err, data) => {
  if (err) {
    console.error("Ошибка чтения файла:", err.message);
    return;
  }

  console.log("Содержимое файла:");
  console.log(data);
});
