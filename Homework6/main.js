// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// console.log('hello world'.length, 'lorem ipsum'.length, 'javascript is cool'.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// console.log('hello world'.toUpperCase(), 'lorem ipsum'.toUpperCase(), 'javascript is cool'.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// console.log('HELLO WORLD'.toLowerCase(), 'LOREM IPSUM'.toLowerCase(), 'JAVASCRIPT IS COOL'.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim());

// // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// //     let str = 'Ревуть воли як ясла повні';
// // let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
// splitToArray = (string) =>console.log(string.split(' '));
// splitToArray(str);

// // - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// let nums = [10,8,-7,55,987,-1011,0,1050,0];
// let newNums = nums.map(num => num.toString())
// console.log(newNums)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [11,21,3];
// function sortNums(nums, direction) {
//     switch (direction){
//         case 'ascending' :
//             return nums.sort((a, b) => a - b);
//             break;
//         case 'descending' :
//             return nums.sort((a,b) => b-a);
//             break;
//         default : console.log('incorret direction');
//     }
// }
// sortNums(nums, 'ascending');
// console.log(nums);
// sortNums(nums, 'descending');
// console.log(nums);

// // - є масив
// // let coursesAndDurationArray = [
// //     {title: 'JavaScript Complex', monthDuration: 5},
// //     {title: 'Java Complex', monthDuration: 6},
// //     {title: 'Python Complex', monthDuration: 6},
// //     {title: 'QA Complex', monthDuration: 4},
// //     {title: 'FullStack', monthDuration: 7},
// //     {title: 'Frontend', monthDuration: 4}
// // ];
// // -- відсортувати його за спаданням за monthDuration
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// // -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let sortedByDuration =
//     coursesAndDurationArray.sort((a,b) => a.monthDuration - b.monthDuration);
// console.log(sortedByDuration);
//
// let filteredByDuration = coursesAndDurationArray.filter((object) => object.monthDuration>5);
// console.log(filteredByDuration);
//
// let indexedArr = coursesAndDurationArray.map((item, index) => item.id = index + 1);
// console.log(coursesAndDurationArray);


// //     описати колоду карт (від 6 до туза без джокерів)
// let cardSuits = ['spades', 'clubs', 'hearts', 'diamonds'];
// let values = [6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
// let colors = ['red', 'black'];
// let deck = [];
// for (const suit of cardSuits) {
//     for (const val of values) {
//         deck.push({cardSuit : suit, value : val});
//     }
// }
// deck.forEach(card => {
//     if(card.cardSuit === 'spades' || card.cardSuit === 'clubs'){
//         card.color = 'black';
//     } else {
//         card.color = 'red';
//     }
// })
// console.log(deck);
//
// // - знайти піковий туз
// let ace  = deck.find((card) => card.cardSuit === 'spades' && card.value === 'ace'
// );
// console.log(ace);
//
// // - всі шістки
// let sixes = deck.filter((card) => card.value === 6);
// console.log(sixes);
// // - всі червоні карти
// let redCards = deck.filter((card) => card.color === 'red');
// console.log(redCards);
// // - всі буби
// let diamondCards = deck.filter((card) => card.cardSuit ==='diamonds');
// console.log(diamondCards);
// // - всі трефи від 9 та більше
// let clubCards = deck.filter((card) => card.cardSuit === 'clubs' && (card.value >= 9 || typeof card.value === 'string'))
// console.log(clubCards);
// //
// // {
// //     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
// //         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
// //     color:'', // 'red','black'
// // }
// //
// // =========================
// //
// //     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// // {
// //     spades:[],
// //         diamonds:[],
// //     hearts:[],
// //     clubs:[]
// // }
// let arr = deck.reduce((acc, card) => {
//     acc[card.cardSuit].push(card);
//     return acc;
// }, {
//     spades: [],
//     clubs: [],
//     hearts: [],
//     diamonds: []
// });
// console.log(arr);
//
// // ОБРЫГАЛОВО

//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// // --написати пошук всіх об'єктів, в який в modules є sass
// let filterSassArr = coursesArray.filter(object => object.modules.includes('sass'));
// console.log(filterSassArr);
// // --написати пошук всіх об'єктів, в який в modules є docker
// let filterDockerArr = coursesArray.filter(object => object.modules.includes('docker'));
// console.log(filterDockerArr);

//Если я стану президентом, то запрещу колбек функции в Украине