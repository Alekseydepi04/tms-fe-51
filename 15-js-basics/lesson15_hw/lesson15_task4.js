let language = prompt("Enter language, available value: ru, by, en");
let message;
switch (language) {
    case 'ru':
        message = 'Добро пожаловать!';
        break;
    case 'by':
        message = 'Сардэчна запрашаем!';
        break;
    case 'en':
        message = 'Welcome!';
        break;
    default:
        message = 'Not available value';
}
alert(message);
