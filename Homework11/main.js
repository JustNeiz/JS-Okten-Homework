// console.log('1');
// setTimeout(() => console.log('hi2'), 2000)
// setTimeout(()=> console.log('hi'), 1000);
// console.log('2');

// setTimeout(() => {
//     let x = 1;
//     console.log(x);
//     x++;
//     setTimeout(() => {
//         console.log(x);
//         x++;
//         setTimeout( ()=> {
//             console.log(x);
//             x++;
//         }, 1000)
//     }, 1000)
//
// },1000)

// new Promise((resolve) => {
//     setTimeout(() => {
//         let x = 1;
//         console.log(x);
//         x++;
//         resolve(x);
//     }, 1000);
// }).then((x) =>
//     new Promise(resolve => {
//         setTimeout(()=>{
//             console.log(x);
//             x++;
//             resolve(x);
//         },1000)
//     })
// ).then((x) => {
//     new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(x);
//         }, 1000)
//     })
// })

// new Promise((resolve) => {
//     setTimeout(() =>{
//         let x = 0;
//         console.log(x);
//         x++;
//         resolve(x);
//     },1000)
// }).then(x => new Promise(resolve => {
//     setTimeout(() =>{
//         console.log(x);
//         x++;
//         resolve(x);
//     },1000);
// })).then(a => new Promise((resolve) => {
//     setTimeout(()=> {
//         console.log(x);
//     }, 1000)
//
// }))

// new Promise((resolve) => setTimeout(() => {
//     let a = 1;
//     console.log(a);
//     a++;
//     resolve(a);
// },1000)).then(a => new Promise((resolve) => setTimeout(() => {
//     console.log(a);
//     a++;
//     resolve(a);
// }, 1000))).then(a => new Promise((resolve, reject) => setTimeout(() => {
//     if (a>1) {
//         reject('a higher than 1');
//     }else {
//         console.log(a);
//         a++;
//     }
// },1000))).catch((reason) => console.log(reason))

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then (response => response.json())
//     .then(array => {
//         console.log(array);
//     });
// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(todos => {
//         for (const todo of todos) {
//             console.log(todo);
//         }
//     })
let users =  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json());
let posts = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json());
let resultAll = Promise.all([users, posts]);
console.log(resultAll);