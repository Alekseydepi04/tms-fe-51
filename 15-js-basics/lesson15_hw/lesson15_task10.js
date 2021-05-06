let number = +prompt('Enter number:');
let revertNumber = 0;
console.log(number);
while (number > 0) {
    revertNumber = revertNumber * 10 + number % 10;
    number = number / 10 ^ 0;
}
console.log(revertNumber);
