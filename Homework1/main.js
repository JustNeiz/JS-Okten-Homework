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
console.log(`${promSurname} ${promName}, ${promAge} роки.`)