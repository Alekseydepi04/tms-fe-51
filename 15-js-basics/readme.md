# 15. Основы JavaScript

## Задачи

### Операторы сравнения

1. Выберите правильный оператор сравнения, чтобы получить **true**
```javascript
let a = "" + 1 + 0;
let b = 9;
alert( a /*оператор сравнения*/ b ); // true
```

2. Выберите правильный оператор сравнения, чтобы получить **false**
```javascript
let a = "" - 1 + 0;
let b = true + false;

alert( a /*оператор сравнения*/ b ); // false
```

3. Какой будет результат сравнения?
```javascript
5 > 4
"ананас" > "яблоко"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n"
("2" * "3") > (9 / "3")
("4" * 2) == ("4px" * 2)
("4" - 2) == ("4px" - 2)
```

### Условное ветвление

1. Выведется ли сообщение?
```javascript
if ("0") {
  alert( 'Привет' );
}
```

2. Напишите скрипт, который выведет на экран "-","+" или "0" в зависимости от того, какое число ввёл пользователь

3.1 Перепишите 'if' в '?'
```javascript
let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
```

3.2 Перепишите 'if' в '?'
```javascript
let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
```

4. В переменной **min** лежит число от _0_ до _59_. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).

###  Switch

1. Переписать условия **if** на **switch**
```javascript
const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}
```

2. Переписать условия **switchx** на **switch**
```javascript
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
```

###  Логические операторы

1. Что находится в **result**?
```javascript
let result = null || 2 || undefined;
```

2. Что находится в **result**?
```javascript
let result = 1 && null && 2;
```

3. Что находится в **result**?
```javascript
let result = null || 2 && 3 || 4;
```

4. Напишите условие if для проверки, что переменная **age** находится в диапазоне между _14_ и _90_ включительно.

5. Напишите условие, которое выведет сообщение, если пользователь оффлайн. Значение онлайна хранится в переменной **isOnline**
```javascript
let isOnline = true;
if(УСЛОВИЕ){
  alert('Вышел!');
}
```

