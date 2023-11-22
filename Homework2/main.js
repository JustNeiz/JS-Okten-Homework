// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr1 = [true, false, 3, 4, 5, 6, 7,'one', 'two', 'three'];
console.log(arr1);
// Программисты сделали бы вот так)
for (i = 0; i<arr1.length; i++){
    console.log(arr1[i]);
}



// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title : 'title1',
    pageCount : 3,
    genre : 'genre 1'
}
let book2 = {
    title : 'title2',
    pageCount : 5,
    genre : 'genre 2'
}
let book3 = {
    title : 'title3',
    pageCount : 8,
    genre : 'genre 3'
}



// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book11 = {
    title : 'title11',
    pageCount : 3,
    genre : 'genre 11',
    authors : ['name1', 24]
}
let book22 = {
    title : 'title22',
    pageCount : 5,
    genre : 'genre 22',
    authors : ['name2', 22]
}
let book33 = {
    title : 'title33',
    pageCount : 8,
    genre : 'genre 33',
    authors : ['name3', 54]
}




// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
let arr2 = [
    {name : 'name1',
     username : 'user1',
     password : 13653
    },
    {name : 'name2',
     username : 'user2',
     password : 9237456
    },
    {name : 'name3',
     username : 'user3',
     password : 913846
    },
    {name : 'name4',
     username : 'user4',
     password : 103847
    },
    {name : 'name5',
     username : 'user5',
     password : 92734698
    },
    {name : 'name6',
     username : 'user6',
     password : 53984586
    },
    {name : 'name7',
     username : 'user7',
     password : 4958734
    },
    {name : 'name8',
     username : 'user8',
     password : 39845798
    },
    {name : 'name9',
     username : 'user9',
     password : 2475875
    },
    {name : 'name10',
     username : 'user10',
     password : 17584758
    }

];

for (i = 0; i<arr2.length; i++) {
    console.log('User password is ' + arr2[i].password);
}
// ну тут тоже вручную 10 раз писать консольлог - такое себе






// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = +prompt('Enter x');
if (x !== 0){
    console.log('Вірно');
} else {
    console.log('Невірно');
}
//Не совсем понял, о какой проверке на 'a' идет речь




// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
        // let time = +prompt('enter current minute');
        // if(time >=0 && time <= 14) {
        //     console.log('Перша четверть');
        // }else if(time >=15 && time <= 29) {
        //     console.log('Друга четверть');
        // }else if(time >=30 && time <= 44) {
        //     console.log('Третя четверть');
        // }else if(time >=45 && time <= 59) {
        //     console.log('Четверта четверть');
        // }else{
        //     console.log('Балбес???');
        // }
// Есть ещё такой вариант
//         let time1 = +prompt('enter minute v2');
//         time1 = time1 / 15;
//         time1 = parseInt(time1);
//         switch (time1){
//             case 0:
//                 console.log('Перша четверть');
//             break;
//             case 1:
//                 console.log('Друга четверть');
//             break;
//             case 2:
//                 console.log('Третя четверть');
//             break;
//             case 3:
//                 console.log('Четверта четверть');
//             break;
//             default:
//                 console.log('Балбес???');
//
//         }
// ну а чтобі вообще сократить
let time2 = +prompt('enter minute v3');
if(time2 < 0 || time2 > 59){
    console.log('Балбес???');
}else {
    time2 = time2 / 15;
    time2 = parseInt(time2) + 1;
    console.log(time2 + ' четверть');
}



// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt('enter day of the month');
if(day < 0 || day > 31){
    console.log('Балбес???');
}else if(day === 31 || day === 30){
    console.log('3 декада');
}else {
    day = day / 10;
    day = parseInt(day) + 1;
    console.log(day + ' декада');
}





// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву
// дня англійською).
let weekly = +prompt('enter day of the week');
switch(weekly){
    case 1: console.log('Monday');
    break;
    case 2: console.log('Tuesday');
    break;
    case 3: console.log('Wednesday');
    break;
    case 4: console.log('Thursday');
    break;
    case 5: console.log('Friday');
    break;
    case 6: console.log('Saturday');
    break;
    case 7: console.log('Sunday');
    break;
    default: console.log('Балбес???');
}




//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a = +prompt('enter first number');
let b = +prompt('enter second number');
if (a === b){
    console.log('Числа рівні');
}else if(a > b){
    console.log('Число ' + a + ' більше');
}else{
    console.log('Число ' + b + ' більше');
}






//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"
//     якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x2 = prompt('Введіть х');
if(!!x2 === false){
    x2 = 'default';
    console.log(x2)
}
// так біло бі по уму,  а по условию закомментил. Но тут типа лучше не вводить, а задавать значение
//потому что если мі вводим, то проверить можно только на пустую строчку
                // let x2 = prompt('Введіть х2');
                // if(x2 === 0 || isNaN(x2) || x2 === undefined || x2 === '' || x2 === false){
                //     x2 = 'default';
                // }






//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо
//     тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for(i = 0; i<coursesAndDurationArray.length; i++){
    if(coursesAndDurationArray[i].monthDuration > 5){
        console.log('Супер');
    }
}
//через if
if(coursesAndDurationArray[0].monthDuration > 5){
    console.log('Супер');
}
if(coursesAndDurationArray[1].monthDuration > 5){
    console.log('Супер');
}
if(coursesAndDurationArray[2].monthDuration > 5){
    console.log('Супер');
}
if(coursesAndDurationArray[3].monthDuration > 5){
    console.log('Супер');
}
if(coursesAndDurationArray[4].monthDuration > 5){
    console.log('Супер');
}