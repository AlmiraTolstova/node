import fs from "fs";

fs.mkdir("myFolder", (err) => {
  if (err) {
    console.error("Ошибка при создании каталога:", err);
    return;
  }
  console.log("Каталог успешно создан");

  setTimeout(() => {
    console.log("задержка 5 sec");
    fs.rmdir("myFolder", (err) => {
      if (err) {
        console.error("Ошибка при удалении каталога:", err);
        return;
      }
      console.log("Каталог успешно удалён");
    });
  }, 5000);
});
