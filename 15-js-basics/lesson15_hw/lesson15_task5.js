let day = +prompt("Enter day, available value: from 1 to 31");
let decade;
let message;

if(day>=1 && day<=10){
    decade = 1;
}
if(day>=11 && day<=20){
    decade = 2;
}
if(day>=21 && day<=31){
    decade = 3;
}
switch (decade) {
    case 1:
        message = 'first decade';
        break;
    case 2:
        message = 'second decade';
        break;
    case 3:
        message = 'third decade';
        break;
    default:
        message = 'Not available value';
}
alert(message);
