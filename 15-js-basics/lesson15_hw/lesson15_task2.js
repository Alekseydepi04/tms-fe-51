let hour = +prompt("Введите время в часах");
const EVENING_START_TIME = 17;
let message;
if (hour > EVENING_START_TIME) {
    message = "Добрый вечер";
} else {
    message = "Добрый день";
}
alert(message);

message = hour > EVENING_START_TIME ? "Добрый вечер" : "Добрый день";
alert(message);
