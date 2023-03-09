// // 1 mission
// let a = 10;
// alert(a);
// a = 20;
// alert(a);
// // 2 mission
// let iPhone = "29062007";
// alert(iPhone);
// // 3 mission
// let nameJs = "BrendanEich";
// alert(nameJs);
// // 4 mission
// let num_1 = 10;
// let num_2 = 2;
// let sum = num_1 + num_2;
// let raz = num_1 - num_2;
// let pro = num_1 * num_2;
// let del = num_1 / num_2;
// alert(sum); /* доделать 4 задание*/
// alert(raz);
// alert(pro);
// alert(del);
// // 5 mission
// let num_3 = 2;
// let num_4 = 5;
// let result = num_3 ** num_4;
// alert(result);
// // 6 misssion
// let x = 9;
// let y = 2;
// let result_1 = x % y;
// alert(result_1);
// // 7 mission
// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// num += 1;
// num -= 1;
// alert(num);
// // 8 mission
// let age = prompt("Сколько вам лет?");
// alert(age);
// 9 mission
// let user = {
//     name: "Airat",
//     age: 20,
//     isAdmin: true,
//     age: 100 // 9.2 mission
// };
// //  9.1 mission
// user.property = "city of residence";
// // 9.3 mission
// delete property("city of residence");
// // 9.4 mission
// let info = prompt("Какую информацию хотите узнать о пользователе?");
// alert(`info`);
// 10 mission
// let firstName = prompt("Назовите ваше имя");;
// alert("Привет, " + `${firstName}` + "!");
// let day = String(prompt('Введите день недели'));
// switch (day) {
//     case 'понедельник':
//         console.log('Первый день недели')
//         break;
//     case 'вторник':
//         console.log('Второй день недели')
//         break;
//     case 'среда':
//         console.log('Третий день недели')
//         break;
//     default:
//         console.log('ввел что-то не то');
//         break;
// }
// 2.3 lesson
// 1 mission
// let password = 'пароль';
// let givePassword = prompt('Введите пароль');
// if (givePassword == 194) {
//     console.log('Пароль введен верно');
// } else {
//     console.log('Пароль введен неверно');
// }
// alright
// 2 mission
// let c = 2;
// if (c > 0 && c < 10) {
//     console.log('Верно');
// } else {
//     console.log('Не верно');
// }
// alright
// let d = 20;
// let e = 330;
// if (d >= 100 || e >= 100) {
//     console.log('Верно');
// } else {
//     console.log('Не верно');
// }
// alright
// 4 mission
// let a = Number('2');
// let b = Number('3');
// alert(a + b);
// alright
// 5 mission
// let month = Number(prompt("Введите число месяца"));
// switch (month) {
//     case 1:
//     case 2:
//         console.log('Зима');
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log('Весна');
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log('Лето');
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log('Осень');
//         break;
//     case 12:
//         console.log('Зима');
//         break;
//     default:
//         break;
// }
// alright хотел упростить каким-то образом, не получилось, слишком большой код, это не норм
// 2.4 lesson while do..while for forEach
// let i = 0;
// while (i < 6) {
//     console.log(i);
//     i++;
// }
// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 6);

// let i = 1;
// let n = Number(prompt('Сколько раз вам сказать привет?!'));
// while (i <= n) {
//     alert('Привет')
//     i++;
// }
// let number;
// do {
//     number = Number(prompt('Введите 5 для проверки'));
// } while (number !== 5);
//     console.log('Правильно!');
// let i = 7;
// while (i <= 22) {
//     console.log(i);
//     i++
// }
// const obj = {
//     'Коля': '200',
//     'Вася': '300',
//     'Петя': '400'
// };
// for (const key in obj) { // то есть тут Айрат мы обращаемся к объекту
//     const value = obj[key]; // здесь мы обращаемся уже к свойствам объекта
//     console.log(`${key} — зарплата ${value} долларов.`);
// }
// let n = 1000;
// let num = 0;
// while (n > 50) {
//     num++;
//     n /= 2;
// };
// alert(n)
// alert(num)
// const numFriday = 3;
// alert(`Сегодня пятница, ${numFriday} число. Необходимо подготовить отчёт`);
// const numFriday_1 = 3;
// alert(`Сегодня пятница, ${numFriday_1} число. Необходимо подготовить отчёт`);
// const numFriday_2 = 10;
// alert(`Сегодня пятница, ${numFriday_2} число. Необходимо подготовить отчёт`);
// const numFriday_3 = 17;
// alert(`Сегодня пятница, ${numFriday_3} число. Необходимо подготовить отчёт`);
// const numFriday_4 = 24;
// alert(`Сегодня пятница, ${numFriday_4} число. Необходимо подготовить отчёт`);
// const numFriday_5 = 3;
// alert(`Сегодня пятница, ${numFriday_5} число. Необходимо подготовить отчёт`);
// let numFriday;
// for (numFriday = 3; numFriday < 31; numFriday + 7) {
//     numFriday = alert(`Сегодня пятница, ${numFriday} число. Необходимо подготовить отчёт`);
//     numFriday = alert(`Сегодня пятница, ${numFriday} число. Необходимо подготовить отчёт`);
//     numFriday = alert(`Сегодня пятница, ${numFriday} число. Необходимо подготовить отчёт`);
//     numFriday = alert(`Сегодня пятница, ${numFriday} число. Необходимо подготовить отчёт`);
// }
// for (let numFriday = 3; numFriday < 31; numFriday + 7) {
//     alert(`Сегодня пятница, ${numFriday} число.Необходимо подготовить отчёт`);
// }
// 2.5 lesson function
// function sayhello(name = 'Airat') {
//     alert(`Привет, ${name}!`);
// }
// sayhello('Vasya');
// function calc(a, b) {
//     let sum = a + b;
//     let mult = a * b;
//     console.log(`Сумма параметров равно ${sum}
//     Произведение равно ${mult}`);
// }
// calc(4, 5);
// calc(10, 12);
// function riddle(question, answer) {
//     let userAnswer = prompt(question);

//     if (userAnswer === answer) {
//         console.log('угадал');
//     } else {
//         console.log('не угадал');
//     }
// }
// riddle('Сидит дед во сто шуб одет кто его раздевает тот слёзы проливает', 'лук');
// riddle('Зимой и летом одним цветом', 'елка'); goodjob Airat
// function sum(prepaidExpense, salary) {
//     return prepaidExpense + salary;
// }
// function mult(day, moneyDay) {
//     return day * moneyDay;
// }
// let month1 = sum(30, 40);
// let month2 = sum(40, 55);

// let result = month1 + month2;
// result2 = mult(45, 3.4);
// console.log(`Всего заработал ${result}`);
// console.log(`Зарплата по дням ${result2}`);
// function number(a, b, c) {
//     return c;
//     let sum = a + b;
//     return sum;
// }
// console.log(numbers(10, 2, 3));
// let sum = (a, b) => a + b; // в sum запишет сумму чисел a и b
// второй вариант
// let mult = (a, b) => {
//     let result = a * b;
//     return result;
// }
// function delMessage() {
//     let del = confirm('Вы правда хотите удалить сообщение?'); // true or false
//     del ? alert('Сообщение удалено!') : alert('Ничего страшного нет, мы ничего не удалили');
// }
// const puzzle = (a, b) => {
//     if (a > b) {
//         return a + b;
//     } else {
//         return a * b;
//     }
// }
// console.log(puzzle(20, 3));
// 1 mission
// function number(a, b) {
//     if (a > b) {
//         return b;
//     } else {
//         return a;
//     }
// }
// alert(number(40, 2));
// 2 mission
// function numberTake(n) {
//     if (n % 2 == 0) {
//         console.log('Число четное');
//     } else {
//         console.log('Число нечетное');
//     }
// }
// numberTake(44);
// 3\1 mission
// function num(a) {
//     return a ** 10;
// }
// console.log(num(2));
// 3\2 mission
// function num(a) {
//     return a ** 10;
// }
// alert(num(2));
// 4 mission
// function ageMen(age) {
//     if (age < 0) {
//         alert('Вы ввели неправильное значение');
//     } else if (age <= 12) {
//         alert('Привет, друг!');
//     } else if (age >= 13) {
//         alert("Добро пожаловать!");
//     }
// }
// ageMen(-12);
// 5 mission
// let a = prompt('Введите любое число');
// let b = prompt('Введите любое число');
// function number(a, b) {
//     if (isNaN(a) || isNaN(b)) {
//         console.log('Одно или оба значения не являются числом');
//     } else {
//         console.log(a * b);
//     }
// }
// number(a, b);
// 6 mission
// let num = prompt('Введите любое число');
// let num_1 = num ** 3;
// function theNumber(num) {
//     if (isNaN(num)) {
//         console.log('Переданный параметр не является числом');
//     } else {
//         console.log(`${num} в кубе равняется ${num_1}`);
//     }
// }
// theNumber(num);

// 2.6 massive

// 1 mission
// const arr = [1, 5, 4, 10, 0, 3];
// for (let index = 0; index < arr.length; index++) {
//     if (index = 10) {
//         console.log('Цикл остановился, index = 10');
//     }
//    break;
// }

// for (const key in arr) { фор ин
//     console.log(arr[key]);
// }

// for (let elem of arr) { фор оф
//     console.log(elem);
// }

// arr.forEach(function (item, index, arrMas) {
//     console.log(item);
// }

// 2 mission

// const arr = [1, 5, 4, 10, 0, 3];
// console.log(arr.indexOf(4));

// 3 mission
// let numbers = [1, 3, 5, 10, 20];

// numbers = numbers.join(' ');
// console.log(numbers);



// 4 mission

// let arr = [];
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 3; j++) {
//         arr[i].push[1]
//     }
// }
// console.log(arr);

// 5 mission

// let numberArr = [1, 1, 1];
// numberArr.push(2, 2, 2);
// console.log(numberArr);

// 6 mission

// let arr = [9, 8, 7, 'a', 6, 5];
// arr = arr.sort();
// console.log(arr);
// let arrNew = arr.pop();
// console.log(arr);
// console.log(arrNew);

// 7 mission

// let arr = [9, 8, 7, 6, 5];
// let user = prompt('Введите число от 0 до 10');
// let search = arr.includes(Number(user));
// console.log(search);


// 8 mission

// const str = 'abcdef';
// const reverse = str.split('').reverse().join('');
// console.log(reverse);

// 9 mission

// let numbers = [1, 2, 3];
// numbers.push(4, 5, 6);
// console.log(numbers);

// 10 mission

let arr = [2, 4, 6, 8, 10];
for (let i = 0; i < (arr.length - 1); i++) {
    let a = arr[i];
    let b = arr[i + 1];
    let sum = a + b;
    console.log(sum);
}

// 2.7 lesson

// const answerUser = prompt('Без рук, а рисует. Без зубов, а кусает');
// const answer = 'мороз';
// if (answerUser.toLowerCase() === answer.toLowerCase()) {
//     alert('Это правильный ответ!');
// } else {
//     alert(`Не угадал, правильный ответ: ${answer}`);
// }
// const str = 'Поезд едет далеко';
// str.indexOf('едет');
// str.indexOf('едит');

// код в основе реализации элемента поиск во многих веб-приложений
// const products = ['Хлеб Бородинский', 'Молоко Молочник', 'Коровка Молоко', 'Груша Конференция'];
// const search = 'молоко';
// products.forEach((product) => {
//     if (product.toLowerCase().includes(search.toLowerCase())) {
//         console.log(product);
//     }
// });

// const products = ['Хлеб Бородинский', 'Молоко Молочник', 'Коровка Молоко', 'Груша Конференция'];
// const search = 'молоко';
// products.forEach((product) => {
//     if (product.toLowerCase().startsWith(search.toLowerCase())) {
//         console.log(product);
//     }
// });

// Объект Date

// getDate(), getDay(), getMonth(), getFullyear(), toDateString(), getHours(), getMinutes(), getSeconds(), getMilliseconds(), toTimeString(),

// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
// "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
// let myDate = new Date();
// let fullDate = "Сегодня: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + ", " + days[myDate.getDay()];
// console.log(fullDate);

// программа которая выводит приветствие и данное время суток

// let welcome; // переменная, в которой будем хранить наше приветствие
// let myDate = new Date(); // получаем текущую дату
// let hour = myDate.getHours(); // получаем час из нашей даты
// let minute = myDate.getMinutes(); // получаем минуты
// let second = myDate.getSeconds(); // получаем секунды

// если минуты и секунды у нас будут меньше 10, то в результате формат времени
// будет не очень красивым — 12:1:34 или 3:1:6
// намного приятнее следующие записи: 12:01:34 или 3:01:06
// чтобы добиться формата, как в последних примерах, будем осуществлять
// проверку на < 10

// if (minute < 10) { // если минут будет меньше 10,
//     minute = "0" + minute; // то перед ними поставим 0
// }
// if (second < 10) { // если секунд будет меньше 10,
//     second = "0" + second; // то перед ними поставим 0
// }

// здесь мы проверяем, который час, и в зависимости от этого в переменную welcom
// сохраняем приветствие, зависящее от времени суток
// if (hour < 12) {
//     welcome = "Доброе утро";
// } else if (hour < 17) {
//     welcome = "Добрый день";
// } else {
//     welcome = "Добрый вечер";
// }

// console.log(welcome + ", текущее время: " + hour + ":" + minute + ":" + second);
// Доброе утро, текущее время: 4:37:21

// setDate(), setMonth(), setFullYear(), setHours(), setMinutes(), setSeconds(), setMilliseconds()

// на русском...

// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
//     "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
// let myDate = new Date();
// myDate.setDate(26);
// myDate.setMonth(8);
// myDate.setYear(2024);
// let fullDate = myDate.getDate() + " " + months[myDate.getMonth()] +
//     " " + myDate.getFullYear() + ", " + days[myDate.getDay()];
// console.log(fullDate);

// флаги
// let regexp = new RegExp('^[а-яА-Я]*$'); // без флагов
// let regexpFlag = new RegExp('^[а-яА-Я]*$', 'gmi'); // с флагами gmi
// let regexp = /^[а-яА-Я]*$/; // без флагов
// let regexpFlag = /^[а-яА-Я]*$/gmi; // с флагами gmi

// программа на правильно ввода имени на кириллице

// let regexp = /^[а-яА-Я]*$/; // что означает эта запись, мы разберем чуть ниже
// let name = prompt('Введите ваше имя. Используйте только кириллические символы');

// if (regexp.test(name)) {
//     alert('Ваше имя сохранено');
// } else {
//     alert('Введены некорректные символы');
// }

// 1 mission

// let stroka = 'js';
// console.log(stroka.toUpperCase());

// 2 mission

// function stroka(arr = ['Кошка', 'Кит', 'Комар', 'Носорог'], str = 'prosto') {
//     let arr = [];

// }