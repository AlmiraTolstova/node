// Задание
// Чат-приложение
// Создайте новый файл с именем `chat_app.js`.
// Импортируйте модуль `events` и создайте экземпляр `EventEmitter`.
// Напишите функцию `sendMessage`, которая принимает имя пользователя,
// сообщение и объект `EventEmitter`.
// Внутри функции `sendMessage` генерируйте событие `message` с именем
// пользователя и сообщением.
// Зарегистрируйте обработчик для события `message`, чтобы выводить сообщение
// в формате "User: Message".
// Вызовите функцию `sendMessage` несколько раз с разными пользователями и
// сообщениями.

const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("message", (username, message) => {
  console.log(`${username}: ${message}`);
});

function sendMessage(username, message, emitter) {
  emitter.emit("message", username, message);
}

sendMessage("Almira", "Say Hello!", emitter);
sendMessage("Alex", "Say Hello!", emitter);
