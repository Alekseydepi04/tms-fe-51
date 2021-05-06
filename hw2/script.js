// 1. Подберите значения x и y удовлетворяющие заданным в логическом выражении условиям:
/*
let x = 32;
let y = 4;
if ((x / 8 === y) && (x > 16) && (y < 5) && (y !== 3)) {
    console.log('Вы подобрали правильное значение x и y <b>поздравляем</b>!');
} else {
    console.log('Значения x и y не подходят, попробуйте ещё раз');
}
*/


/* 2. Пользователь вводит в текстовое поле время в часах. Если время больше 17, то выводится сообщение «Добрый вечер».
В любых других случаях — «Добрый день». Реализовать два решения с if-else и тернарным оператором.*/

// Вариант 1
/*
let time = prompt('Который час?');
if (+time > 17 && +time <= 24) {
    alert('Добрый вечер!');
} else if (+time >= 0 && +time <= 17) {
    alert('Добрый день!');
} else {
    alert('Не знаю такого времени');
}
*/

// Вариант 2
/*
let time = prompt('Который час?');
let message = (+time > 17 && +time <= 24) ? 'Добрый вечер!' :
    (+time >= 0 && +time <= 17) ? 'Добрый день' :
        'Не знаю такого времени';
alert(message);
*/



/*  3.В двух переменных хранится логин и пароль.
    Пользователь вводит в текстовое поле логин, а во второе текстовое поле — пароль.
    Если пользователь ввел верную комбинацию, появляется сообщение с приветствием, иначе сообщение об отсутствии доступа.*/
/*
let login = 'hello';
let password = 'world';

let writeLogin = prompt('Введите логин');
let writePassword = prompt('Введите пароль');

if (writeLogin === login && writePassword === password) {
    alert('Доступ разрешен');
} else {
    alert('Доступ запрещен');
}
*/



/* 4. Пользователь вводит один из трёх вариантов языка:
    "ru", "by" или "en". С помощью switch-case реализовать вывод любого сообщения на выбранном языке. */
/*
let chooseLanguage = prompt('Введите язык: ru, by, en', 'ru');
switch (chooseLanguage) {
    case 'ru':
        alert('Привет!');
        break;
    case 'by':
        alert('Прывітанне!');
        break;
    case 'en':
        alert('Hello!');
        break;
    default:
        alert('ERROR');
}
*/



/* 5. В переменой day пользователь вводит какое-то число из интервала от 1 до 31.
Определите в какую декаду месяца попадает это число (в первую, вторую или третью).*/
/*
let day = +prompt('Какое сегодня число? (1 - 31)');

if (day > 0 && day < 11) {
    alert('первая декада');
} else if (day > 10 && day < 21) {
    alert('вторая декада');
} else if (day > 20 && day < 32) {
    alert('третья декада');
} else {
    alert('это не число месяца');
}
*/


// 6.1. Выведите столбец чисел от 1 до 10. Решить с помощью циклов while, do...while и for
//while
/*
let number = 1;
while (number < 11) {
    console.log(number);
    number++
}
*/

//do...while
/*
let number = 1;
do {
    console.log(number);
    number++
} while (number < 11);
*/

//for
/*
for (let number = 1; number < 11; number++ ) {
    console.log(number);
}
*/


// 6.2. Выведите столбец чисел от 10 до 1. Решить с помощью циклов while, do...while и for
// while
/*
let number = 10;
while (number > 0) {
    console.log(number);
    number--;
}
*/

// do...while
/*
let number = 10;
do {
    console.log(number);
    number--;
} while (number > 0);
*/

// for
/*
for (let number = 10; number > 0; number--) {
    console.log(number);
}
*/



// 7. Выведите столбец ЧЁТНЫХ чисел от 1 до 20. Решить с помощью циклов while, do...while и for
// for
/*
for (let num = 1; num <= 20; num++) {
    if (num % 2 === 0) {
        console.log(num);
    }
}
*/
// while
/*
let num = 1;
while (num <= 20) {
    if (num % 2 === 0) {
        console.log(num);
    }
    num++;
}
*/
// do...while
/*
let number = 1;
do {
    if (number % 2 === 0) {
        console.log(number);
    }
    number++;
} while (number <= 20);
*/



// 8. С помощью цикла найдите сумму чисел от 1 до 100
/*
let sum = 0;
let num = 1;
while (num <= 100) {
    sum += num;
    num++;
}
console.log(sum);
*/


// 9. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 10
let n = 1000;
while (n > 10) {
    n /= 2;
}
 console.log(n);


