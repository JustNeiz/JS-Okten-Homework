// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
calc = (a,b) => a+b;

// - створити функцію яка обчислює та повертає площу кола з радіусом r
 circArea = (r) => 3.14*r**2;

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
cylArea = (r,h) => 2*3.14*r*h + 2*3.14*r**2;
// - створити функцію яка приймає масив та виводить кожен його елемент
arrEl = (array) => {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}
let arr = [1,4,4,565,6];
arrEl(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
pPrinter = (p) => {
    document.write(`<p>${p}</p>`);
}
pPrinter('slvn')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
ulPrinter = (li) => {
    document.write(`<ul>`);
        for (let i = 0; i < 3; i++) {
            document.write(`<li> ${li}`);
        }
        document.write(`</ul>`);
}
ulPrinter('123213');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
ulPrinterQuan = (li, quantity) => {
    document.write(`<ul>`);
    for (let i = 0; i < quantity; i++) {
        document.write(`<li> ${li}`);
    }
    document.write(`</ul>`);
}
ulPrinterQuan('123213', 15);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
arrToList = (array) => {
    document.write(`<ul>`);
    for (let i = 0; i < array.length; i++){
        document.write(`<li>${array[i]}`);
    }
    document.write(`</ul>`);
}
arrToList(arr);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
keyWriter = (array) => {
    for (const arrayElement of array){
        document.write(`<div>${arrayElement['id']} - ${arrayElement['name']} - ${arrayElement['age']}</div>`);
    }
}
users = [
    {id : 1, name : 'Victor', age: 20}
]
keyWriter(users)
// - створити функцію яка повертає найменьше число з масиву
minNumber = (array) => {
    let  min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min){
            min = array[i];
        }
    }
    return min;
}
console.log(minNumber(arr));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
sum = (arr) => {
    let sum = 0;
    for (const elem of arr) {
        sum += elem;
    }
    return sum;
}
console.log(sum (arr));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
swap = (array, i1, i2) => {
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}
swap(arr, 0, 1);
console.log(arr);
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
exchange = (sumUAH, currencyValuesArr, exchangeCurrency) => {
    let sum = null;
    for (let i = 0; i < currencyValuesArr.length; i++) {
        if(exchangeCurrency === currencyValuesArr[i].currency){
            sum = sumUAH /currencyValuesArr[i].value;
        }
    }
    return sum;
}
