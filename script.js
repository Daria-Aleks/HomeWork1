let userPassword = prompt('Введите пароль');
let message = 'helpmepls';
if (userPassword === message) { 
    message = 'Пароль введен верно';
} else {
    message = 'Пароль введен неправильно';
}
alert (message);
//
let c = prompt('Введите число от 0 до 10');
if (c>0 && c<10) {
    message = 'Верно';
} else {
    message = 'Неверно';
}
alert (message);
//
let e = 10;
let d = 3;
if (e>100||d>100) {
    message = 'Верно';
    
} else {
    message = 'Неверно';
}
alert (message);
//
let a = '2';
let b = '3';
alert (Number(a) + Number(b));
//
let monthNumber = prompt('Введите номер месяца')
switch (monthNumber) {
    case '1':
        console.log(Зима);
        break;
    case '2':
        console.log(Зима);
        break;
    case '3':
        console.log(Весна);
        break;
    case '4':
        console.log(Весна);
        break;  
    case '4':
        console.log(Весна);
        break;
    case '5':
        console.log(Весна);
        break;
    case '6':
        console.log(Весна);
        break;
    case '7':
        console.log(Весна);
        break;
    case '8':
        console.log(Весна);
        break;
    case '9':
        console.log(Осень);
        break;
    case '9':
        console.log(Осень);
        break;
    case '10':
        console.log(Осень);
        break;
    case '11':
        console.log(Осень);
        break;
    case '12':
        console.log(Зима);
        break;
    default:
    case (monthNumber>=13):
        console.log(Невермесяц);
        break;
}