//Задача 1

let x = 32;
let y = 4;

if ((x/8 === y)  && (x > 16) && (y < 5) && (y !== 3)) {
    console.log('Вы подобрали правильные значения x и y <b>поздравляем</b>!');
}
else {
    console.log('Значения x и y не подходят попробуйте еще раз.');
}

//Задача 2.1

let userTimeInput = +prompt('Введите время в часах');
if (userTimeInput > 17 && userTimeInput <= 24){
    alert('Добрый вечер!');
} else if (userTimeInput < 17 && userTimeInput >=0) {
    alert('Добрый день!');
} else {
    alert('Не может быть такого часа!');
}

//Задача 2.2

let message = userTimeInput > 17 && userTimeInput <= 24
    ? 'Добрый вечер!'
    : userTimeInput < 17 && userTimeInput >=0
        ? 'Добрый день!'
        : 'Не может быть такого часа!';
alert(message);

//Задача 3

let login = 'login';
let password = 'password';
let inputLogin = prompt('Введите логин:');
let inputPassword = prompt('Введите пароль:')
if (inputLogin === login && password === inputPassword) {
    alert('Добро пожаловать!');
} else {
    alert('Нет доступа!');
}

//Задача 4

let userLanguage = prompt('Введите желаемый язык \n Русский: ru \n Белорусский: by \n Английский: en');
switch (userLanguage) {
    case 'ru':
        alert('Добро пожаловать!');
        break;
    case 'by':
        alert('Сардэчна запрашаем!');
        break;
    case 'en':
        alert('Welcome!');
        break;
    default:
        alert('Не знаю такого языка!');
        break;
}

//Задача 5

let day = prompt('Введите день месяца');
if (day >=1 && day < 11) {
    alert('Первая декада!');
} else if (day >= 11 && day < 21) {
    alert('Вторая декада!');
} else if (day >= 21 && day < 32) {
    alert('Третяя декада!');
} else {
    alert('Нет такого дня в месяце!');
}


//Задача 6.1.1

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
//Задача 6.1.2

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

///Задача 6.1.3

i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);

//Задача 6.2.1

i=10;
while (i > 0) {
    console.log(i);
    i--;
}

//Задача 6.2.2

for (let i = 10;i > 0; i--) {
    console.log(i);
}

//Задача 6.2.3

i = 10;
do {
    console.log(i);
    i--;
} while (i > 0);

//Задача 7.1

i = 1;
while (i <= 20) {
    if(i % 2 === 0) {
        console.log(i);
    }
    i++;
}

//Задача 7.2

for (let i = 1; i <= 20; i++) {
    if (i % 2 ===0) {
        console.log(i);
    }
}

//Задача 7.3

i = 1;
do {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
} while (i <= 20);

//Задача 8

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

//Задача 9

let n;
for (n = 1000; n >= 10; n /= 2) {}
console.log(n);

//Задача 10

let userNumber = prompt('Введите число');
let reverseNumber = '';
while (userNumber > 0) {
    reverseNumber = reverseNumber + (userNumber % 10);
    userNumber = Math.floor(userNumber / 10);
}
alert(`Число наоборот: ${reverseNumber}`);
