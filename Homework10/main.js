// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

// let form = document.createElement('form');
// form.name = 'form1';
// document.body.appendChild(form);
// let nameInput = document.createElement('input');
// nameInput.type = 'text';
// let surnameInput = document.createElement('input');
// surnameInput.type = 'text';
// let ageInput = document.createElement('input');
// ageInput.type = 'number';
// let btn = document.createElement('button');
// btn.innerText = 'Create block';
//
// btn.onclick = function (ev){
//     ev.preventDefault()
// let div = document.createElement('div');
//
// let obj = {name : nameInput.innerText,
//     surname : surnameInput.innerText,
//     age : ageInput.innerText};
// div.innerText = JSON.stringify(obj);
//     document.body.appendChild(div);
// }
// form.append(nameInput, surnameInput, ageInput, btn);
// ==========================


// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати
// // до неї +1
// // Тут я просто в ХТМЛ документе создаю див с цифрой, и работаю уже с ним
// let div = document.getElementById('div2task');
// if(!sessionStorage.getItem('number')) {
//     sessionStorage.setItem('number', div.innerText);
// }
// let localNumStr = sessionStorage.getItem('number');
// let localNum = parseInt(localNumStr) + 1;
// console.log(localNum);
// div.innerText = localNum;
// sessionStorage.setItem('number', div.innerText);
//
// //Фу, рыгнул
// // ==========================


// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається
// інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої
// потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати
// дом структуру під кожну сессію

// let storageSessions = localStorage.getItem('sessions');
// let arrSessions = storageSessions ? JSON.parse(storageSessions) : [];
// arrSessions.push(new Date());
// localStorage.setItem('sessions', JSON.stringify(arrSessions));


// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
// Боже, шо я тут наворотил?
//
// document.body.style.display = 'flex';
// document.body.style.flexWrap = 'wrap';
// let arr = [];
// let subArr = [];
// let a = 0;
// let b = 10;
//
// function ObjConstr(i, iii) {
//     this.first = i;
//     this.second = iii;
//
// }
// for (let i = 0; i < 100; i++) {
//     let item = new ObjConstr(i, i+2)
//     arr.push(item);
// }
//
// subArr = arr.slice(a, b);
// console.log(subArr);
//
// let btnPrev = document.createElement('button');
// btnPrev.innerText = 'prev';
// let btnNext = document.createElement('button');
// btnNext.innerText = 'next';
// document.body.append(btnPrev, btnNext);
//
// btnNext.onclick = function (){
//     if(a>=0 && b < arr.length) {
//         a += 10; b+= 10;
//     subArr = arr.slice(a, b);
//     for (let i = 0; i < 10; i++) {
//     let currentDiv = document.getElementById(`${i}`);
//     currentDiv.innerText = JSON.stringify(subArr[i]);
//
//     }
//
//     }
// };
//
// btnPrev.onclick = function (){
//     if(a>0 && b <= arr.length) {
//         a -= 10;
//         b -= 10;
//         subArr = arr.slice(a, b);
//         for (let i = 0; i < 10; i++) {
//             let currentDiv = document.getElementById(`${i}`);
//             currentDiv.innerText = JSON.stringify(subArr[i]);
//
//         }
//     }
// };
//
// for (let i = 0; i<10; i++) {
//
// let div = document.createElement('div');
// div.id = `${i}`;
// div.style.width = '200px';
// div.style.height = '200px';
// div.style.margin = '20px';
// div.style.background = 'silver';
// document.body.appendChild(div);
// div.innerText = JSON.stringify(subArr[i]);
//
//
// }


//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні
// на кнопку зникав елемент з id="text".
//

// let div = document.createElement('div');
// div.style.width = '200px';
// div.style.height = '200px';
// div.style.background = 'silver';
// div.id = 'text';
// document.body.appendChild(div);
// let btn = document.createElement('button');
// btn.innerText = 'delete';
// document.body.appendChild(btn);
// btn.onclick = function () {
//     div.remove();
// }
// //ну тут легенько, второй раз не стал обращаться к элементу по ид


//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
//     з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//

// let ageInput = document.createElement('input');
// ageInput.type = 'number';
// document.body.appendChild(ageInput);
// let btn = document.createElement('button');
// btn.innerText = 'confirm';
// btn.onclick = function () {
//     if (ageInput.value < 18){
//         alert('Вам меньше 18');
//     } else {
//         alert('Вам больше 18');
//     }
// }
// document.body.appendChild(btn);



k//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// let inputTr = document.createElement('input');
// inputTr.type = 'number';
// inputTr.placeholder = 'Рядки'
// let inputTd = document.createElement('input');
// inputTd.type = 'number';
// inputTd.placeholder = 'Ячейки'
// let inputContent = document.createElement('input');
// inputContent.type = 'text';
// inputContent.placeholder = 'контент';
// let btn = document.createElement('button');
// btn.innerText = 'generate';
// document.body.append(inputTr, inputTd, inputContent, btn);
//
// btn.onclick = function () {
// let table = document.createElement('table');
//     for (let i = 0; i < inputTr.value; i++) {
//         let tr = document.createElement('tr');
//
//         for (let i = 0; i < inputTd.value; i++) {
//             let td = document.createElement('td');
//             td.innerText = `${inputContent.value}`;
//             tr.appendChild(td);
//
//         }
//         table.appendChild(tr);
//     }
//     table.style.border = '1px solid black';
//     document.body.appendChild(table);
// }


// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого
// є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

// let div = document.createElement('div');
// div.innerText = `${localStorage.getItem('value')} грн`;
// document.body.appendChild(div);
//
// let sum = 100;
// let startDate = new Date().getTime();
// let currentDate = new Date().getTime()
// let getTime = localStorage.getItem('time')
// let counter = currentDate - getTime;
// let intSum;
// isSum = localStorage.getItem('value');
// if(isSum) {
//     if (counter > 10000) {
//
//     intSum = parseInt(isSum) + 10;
//     localStorage.setItem('value', intSum.toString());
//     localStorage.setItem('time', currentDate.toString())
// }
// } else {
//     localStorage.setItem('value', sum.toString())
// }
// if (!getTime){
//     localStorage.setItem('time', startDate.toString())
// }
// console.log(counter);






