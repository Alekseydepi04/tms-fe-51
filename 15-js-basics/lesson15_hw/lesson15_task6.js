// 6.1
let i = 1;
while (i <= 10) {
    console.log(i++);
}

i = 1;
do {
    console.log(i++);
} while (i <= 10);

for (let j = 1; j <= 10; j++) {
    console.log(j);
}

//6.2
i = 10;
while (i >= 1) {
    console.log(i--);
}

i = 10;
do {
    console.log(i--);
} while (i >= 1);

for (let j = 10; j >= 1; j--) {
    console.log(j);
}
