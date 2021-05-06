// Task1
let x;
let y;
for (y = 0;y < 60; y++) {
    for (x = 0; x < 60; x++){
        if ((x/8 === y) && (x > 16) && (y < 5) && (y !== 3)){
            console.log(`x = ${x} y = ${y}`);
            break;
        }
    }
    if ((x/8 === y) && (x > 16) && (y < 5) && (y !== 3)){
        break;
    }
}
if ((x/8 === y) && (x > 16) && (y < 5) && (y !== 3)) {
    console.log('Вы подобрали правильные значения x и y <b>поздравляем</b>!');
}
else {
    console.log('Значения x и y не подходят попробуйте еще раз.');
}

//Task2
// Пользователь вводит в текстовое поле время в часах.
//     Если время больше 17, то выводится сообщение «Добрый вечер».
// В любых других случаях — «Добрый день». Реализовать два решения с if-else и тернарным оператором.
let time = prompt(`Введите время: `);
if (time > 17){
    console.log(`Добрый вечер!`);
}
else {
    console.log(`Добрый день!`)
}
let message = time > 17 ? `Добрый вечер!` : `Добрый день!`;
console.log(message);

// Task3
// В двух переменных хранится логин и пароль. Пользователь вводит в текстовое поле логин,
//     а во второе текстовое поле — пароль. Если пользователь ввел верную комбинацию,
//     появляется сообщение с приветствием, иначе сообщение об отсутствии доступа.
const LOGIN = `1111111`;
const PASSWORD = `1111111`;
let Login_at_user = prompt(`Введите логин!`);
let Password_at_user = prompt(`Введите пароль!`);
if (Login_at_user === LOGIN && Password_at_user === PASSWORD)
{
    console.log(`Сообщение с приветствием!`);
}
else {
    console.log(`Сообщение об отсутсвии доступа!`);
}

// Task4
// Пользователь вводит один из трёх вариантов языка: "ru", "by" или "en".
//     С помощью switch-case реализовать вывод любого сообщения на выбранном языке.
let language = prompt(`Введите значение ru by en`);
switch (language){
    case `ru`:
        console.log(`Доброе утро!`);
        break;
    case `by`:
        console.log(`Добрай ранiцы!`);
        break;
    case `en`:
        console.log(`Good morning!`);
        break;
    default:
        console.log(`Ввод не верный`);
        break;
}


// Task5
// В переменныe. day пользователь какое-то число из интервала от 1 до 31.
// Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
let day = prompt(`Введите число от 1 до 31`);
if (day < 11 && day > 0){
    console.log(`1-я декада!`);
}
else if (day > 10 && day < 21){
    console.log(`Вторая декада!`);
}
else if (day > 20 && day < 32){
    console.log(`третяя декада!`);
}
else {
    console.log(`Ввод неверный!`)
}

// Task6.1
// Выведите столбец чисел от 1 до 10. Решить с помощью циклов while, do...while и for
let num = 1;
while (num < 11){
    console.log(num);
    num++
}
num = 1;
do{
    console.log(num);
    ++num;
} while (num < 11);
for (num = 1; num < 11; num++){
    console.log(num);
}

// Task6.2
// Выведите столбец чисел от 10 до 1. Решить с помощью циклов while, do...while и for
num = 10
while (num > 0){
    console.log(num);
    num--
}
num = 10;
do{
    console.log(num);
    --num;
} while (num > 0);
for (num = 10; num > 0; num--){
    console.log(num);
}

// Task7
// Выведите столбец ЧЁТНЫХ чисел от 1 до 20. Решить с помощью циклов while, do...while и for
num = 1
while (num < 21){
    if(num % 2 === 0){
        console.log(num);
    }
    num++
}
num = 1;
do{
    if(num % 2 === 0){
        console.log(num);
    }
    ++num;
} while (num < 21);
for (num = 1; num < 21; num++){
    if(num % 2 === 0){
        console.log(num);
    }
}

// Task8
// С помощью цикла найдите сумму чисел от 1 до 100
num = 0
for (let i = 0; i < 101; i++)
{
    num += i;
}
console.log(`сумма от 1 до 100 = ${num}`);

// Task9
// Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 10
num = 0
for (let i = 1000; i >= 10; i /= 2){
    num++;
}
console.log(`количество делений = ${num}`);

// Task10
// Пользователь вводит целое число. Напишите код, который выведет число,
//     обратное по порядку составляющих его цифр введенному. Например, введено 9876,
//     надо вывести 6789. Решите задачу через цикл while.
num = "" + prompt(`Введите num `);
let revers = "";
for(let i = num.length-1; i >= 0; i--){
    revers += num[i];
}
console.log(revers);
