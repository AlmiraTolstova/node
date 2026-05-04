// Задание 1
import moment from "moment";

const now = moment();

const format1 = now.format("DD-MM-YYYY");
const format2 = now.format("MMM Do YY");
const format3 = now.format("dddd");

console.log("DD-MM-YYYY:", format1);
console.log("MMM Do YY:", format2);
console.log("dddd:", format3);
