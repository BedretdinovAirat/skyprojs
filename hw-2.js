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
//         console.log('Зима');
//         break;
//     case 2:
//         console.log('Зима');
//         break;
//     case 3:
//         console.log('Весна');
//         break;
//     case 4:
//         console.log('Весна');
//         break;
//     case 5:
//         console.log('Весна');
//         break;
//     case 6:
//         console.log('Лето');
//         break;
//     case 7:
//         console.log('Лето');
//         break;
//     case 8:
//         console.log('Лето');
//         break;
//     case 9:
//         console.log('Осень');
//         break;
//     case 10:
//         console.log('Осень');
//         break;
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
//     const name = obj[key]; // здесь мы обращаемся уже к свойствам объекта
//     console.log(`${key} — зарплата ${name} долларов.`);
// }
// let n = 1000;
// let num = 0;
// while (n > 50) {
//     num++;
//     n /= 2;
// };
// alert(n)
// alert(num)
// let fri = 7;
// if (fri = 7) {
//     console.log('Сегодня пятница');
// } else {

// }