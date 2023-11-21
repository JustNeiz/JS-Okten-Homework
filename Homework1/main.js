// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в
// одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям,
// По-Батькові та роками. та вивести в консоль


let sA = 'hello';
let sB = 'owu';
let sC = 'com';
let sD = 'ua';
let n1 = 1;
let n2 = 10;
let n3 = -999;
let n4 = 123;
let n5 = 3.14;
let n6 = 2.7;
let n7 = 16;
let bool1 = true;
let bool2 = false;

console.log(sA);
console.log(sB);
console.log(sC);
console.log(sD);
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(n5);
console.log(n6);
console.log(n7);
console.log(bool1);
console.log(bool2);

let firstName = 'Тімур';
let middleName = 'Тімурович';
let lastName = 'Ніазов';
let person = `${lastName} ${firstName} ` + middleName;
console.log(person);

let a = 100;
let b = '100';
let c = true;

console.log(typeof a, a)
console.log(typeof b, b)
console.log(typeof c, c)

let promName = prompt('Ваше імʼя');
let promSurname = prompt('Ваше прізвище');
let promAge = prompt('Ваш вік');
promAge = parseInt(promAge);
console.log(`${promSurname} ${promName}, ${promAge} роки.`);
console.log(typeof promAge, promAge);