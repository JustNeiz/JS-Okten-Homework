// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// Потрібно зробити перевірку якщо кількість елементів у масиві більше або дорівнює 3,
// то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому
//     менше 3-х елементів.
//
//
let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
if (friends.length >= 3) {
    console.log("Великий масив");
} else {
    console.log("Малий масив");
}


//
// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше).
//     Перевірити, чи знаходиться перше число між двома іншими.
//
let arrNum = [1, 3, 2];
if ((arrNum[0] > arrNum[1] && arrNum[0] < arrNum [2]) || (arrNum[0] < arrNum[1] && arrNum[0] > arrNum [2])) {
    console.log(arrNum[0]);
}
if ((arrNum[2] > arrNum[1] && arrNum[2] < arrNum [0]) || (arrNum[2] < arrNum[1] && arrNum[2] > arrNum [0])) {
    console.log(arrNum[2]);
}
if ((arrNum[1] > arrNum[0] && arrNum[1] < arrNum [2]) || (arrNum[1] < arrNum[0] && arrNum[1] > arrNum [2])) {
    console.log(arrNum[1]);
}


// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
//
let a = 2;
let b = 1;
let result;
a + b < 4 ? result = 'Мало' : result = 'Багато';
console.log(result);

//
// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число:
// позитивним, негативним або нулем
// напишіть це тернарним оператором
//

let numA = -2;
numA > 0 ? console.log('positive') : (numA === 0 ? console.log('zero') : console.log('negative'))

//
// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта
//     - з коротким записом(тернаркою)
//
let test = 0;
if (test === true){
    console.log('Virno');
} else {
    console.log('Wrong');
}
test === true ? console.log('Virno') : console.log('Wrong');



// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна»
// назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
//
//

let jsName = prompt('Яка «офіційна назва JavaScript?');
if (jsName === 'ECMAScript') {
    console.log('Правильно!');
} else {
    console.log('Не знаєте? ECMAScript!')
}

//
//
//
//     - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let flatNum = 55;
if (flatNum <= 20) {
    console.log('1 подъезд');
} else if (flatNum <= 48) {
    console.log('2 подъезд');
} else {
    console.log('3 подъезд');
}

//
//
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО,
// якщо змінна не рівна 10 - тоді НЕВІРНО
//

let number = 30;
number === 10 ? console.log('Virno!') : console.log('Nevirno')

//
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
let temp = -5;
if(temp >= 10 && temp <= 22){
    console.log('GOGOGO');
} else {
    console.log('):')
}



//
//
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число
//     не вірне ... .
//
let winNum = -4;
if(winNum <= 0 || winNum > 5) {
    console.log('4islo nevirne');
} else {
    switch (winNum) {
        case 1:
            console.log('Ni4ogo(');
            break;
        case 2:
            console.log('Avto');
            break;
        case 3:
            console.log('Blender');
            break;
        case 4:
            console.log('Toaster');
            break;
        case 5:
            console.log('Dishwasher');
            break;
    }
}
//
//
