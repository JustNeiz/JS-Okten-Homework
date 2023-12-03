// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectArea(a,b){
    return a*b;
}



// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circArea(r){
    return 3.14*r^2;
}



// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylArea(r,h) {
    return circArea(r)*2 + h*2*3.14*r;
}



// - створити функцію яка приймає масив та виводить кожен його елемент

function arrPrinter(array){
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}



// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function parPrinter(p){
    document.write(`<p>${p}`);
}



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function ulPrinter (li) {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${li}</li>`)
    }
    document.write(`</ul>`);
}



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function ulQantPrinter (li, quantity) {
    document.write(`<ul>`);
    for (let i = 0; i < quantity; i++) {
        document.write(`<li>${li}</li>`)
    }
    document.write(`</ul>`);
}




// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function arrToList(array){
    document.write(`<ul>`);
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`)
    }
    document.write(`</ul>`);
}



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. 
// Для кожного об'єкту окремий блок.

function keyWriter(array){
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        document.write(`<div>${arrayElement.id} - ${arrayElement.name} - ${arrayElement.age}`)
    }
}




// - створити функцію яка повертає найменьше число з масиву

function minOfArr(array) {
    let  min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min){
            min = array[i];
        }
    }
    return min;
}




// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

function sumOfArr(array){
    let sum = null;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}




// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(array, index1, index2){
    let temp;
    temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}




// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH, currencyValuesArr, exchangeCurrency){
    let sum = null;
    for (let i = 0; i < currencyValuesArr.length; i++) {
        if(exchangeCurrency === currencyValuesArr[i].currency){
            sum = sumUAH /currencyValuesArr[i].value;
        }
    }
    return sum;
}
