// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
function User(id,name,surname,email,phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [];

users.push(new User(1, 'igor', 'shmigor', 'igor@gmail.com', '09300000000'));
users.push(new User(2, 'valera', 'shvalera', 'valera@gmail.com', '09300000001'));
users.push(new User(3, 'ignat', 'shignat', 'ignat@gmail.com', '09300000002'));
users.push(new User(4, 'kirill', 'shkirill', 'kirill@gmail.com', '09300000003'));
users.push(new User(5, 'suleiman', 'shuleiman', 'suleiman@gmail.com', '09300000004'));
users.push(new User(6, 'ramzan', 'shramzan', 'ramzan@gmail.com', '09300000005'));
users.push(new User(7, 'gena', 'shengena LOL', 'gena@gmail.com', '09300000006'));
users.push(new User(8, 'sveta', 'shveta', 'sveta@gmail.com', '09300000007'));
users.push(new User(9, 'kotleta', 'shkotleta', 'kotleta@gmail.com', '09300000008'));
users.push(new User(10, 'mahno', 'shmahno', 'mahno@gmail.com', '09300000009'));
console.log(users);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let filteredArray = users.filter(user => user.id%2 === 0);
// console.log(filteredArray);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let ascendArr = users.sort((a,b) => a.id - b.id);
// console.log(ascendArr);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//

class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clients = [];
clients.push(new Client(1, 'igor', 'shmigor', 'igor@gmail.com', '09300000000',['phone', 'comp']));
clients.push(new Client(2, 'valera', 'shvalera', 'valera@gmail.com', '09300000001',['phone', 'comp']));
clients.push(new Client(3, 'ignat', 'shignat', 'ignat@gmail.com', '09300000002',['phone', 'comp', 'bag']));
clients.push(new Client(8, 'sveta', 'shveta', 'sveta@gmail.com', '09300000007',['phone', 'comp', 'bag']));
clients.push(new Client(9, 'kotleta', 'shkotleta', 'kotleta@gmail.com', '09300000008',['phone', 'comp', 'bag', 'tool']));
clients.push(new Client(10, 'mahno', 'shmahno', 'mahno@gmail.com', '09300000009',['phone', 'comp', 'bag', 'tool', 'pritul']));
clients.push(new Client(4, 'kirill', 'shkirill', 'kirill@gmail.com', '09300000003',['phone', 'comp', 'bag']));
clients.push(new Client(5, 'suleiman', 'shuleiman', 'suleiman@gmail.com', '09300000004',['phone', 'comp', 'bag']));
clients.push(new Client(6, 'ramzan', 'shramzan', 'ramzan@gmail.com', '09300000005',['phone', 'comp', 'bag', 'tool']));
clients.push(new Client(7, 'gena', 'shengena LOL', 'gena@gmail.com', '09300000006',['phone', 'comp', 'bag']));
console.log(clients);

let sortedClients = clients.sort((a, b) =>a.order.length - b.order.length);
console.log(sortedClients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
function CarInfo(model, manuf, year, speed, volume){
    this.model = model;
    this.year = year;
    this.speed = speed;
    this.volume = volume;
    this.manuf = manuf;


}
let car = new CarInfo('tesla', 'us', 2023, 250, 0);

car.drive = function(){
    console.log(`їдемо зі швидкістю ${car.speed} на годину`)
}

car.info = function () {

    for (const argumentsKey in car) {
        if (typeof this[argumentsKey] !== "function") {
            console.log(`Поле ${argumentsKey} - Значення ${this[argumentsKey]}`)
        }
    }
}

car.increaseMaxSpeed = function (newSpeed){
    car.speed = newSpeed;
}

car.changeYear = function (newValue){
    car.year = newValue;
}
car.addDriver = function (driverObj){
    car.driver = driverObj;
}
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(400);
console.log(car);
car.changeYear(2022);
console.log(car);
car.addDriver(clients[2]);
console.log(car);




// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

class CarInfoClass{
    constructor(model, year, speed, volume, manuf) {
        this.model = model;
        this.year = year;
        this.speed = speed;
        this. volume = volume;
        this.manuf = manuf;
    }
}
let car2 = new CarInfoClass('toyota', 1980, 160, 2.0, 'jap');
console.log(car2);
car2.drive = function(){
    console.log(`їдемо зі швидкістю ${car2.speed} на годину`)
}

car2.info = function () {

    for (const argumentsKey in car2) {
        if (typeof this[argumentsKey] !== "function") {
            console.log(`Поле ${argumentsKey} - Значення ${this[argumentsKey]}`)
        }
    }
}

car2.increaseMaxSpeed = function (newSpeed){
    car2.speed = newSpeed;
}

car2.changeYear = function (newValue){
    car2.year = newValue;
}
car2.addDriver = function (driverObj){
    car2.driver = driverObj;
}
console.log(car2);
car2.drive();
car2.info();
car2.increaseMaxSpeed(400);
console.log(car2);
car2.changeYear(2022);
console.log(car2);
car2.addDriver(clients[2]);
console.log(car2);
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function CreatePopelyuha(name, age, size){
    this.name = name;
    this.age = age;
    this.size = size;
}
let ladies = [];
for (let i = 0; i < 10; i++) {
        ladies.push(new CreatePopelyuha('popelyuha', 24, 35))
}
console.log(ladies);
for (let i = 0; i < ladies.length; i++) {
    ladies[i].size = i+30;

}
console.log(ladies);
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class CreatePrince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let prince = new CreatePrince('Biden', 25, 36);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const lady of ladies) {
    if(lady.size === prince.shoe){
        console.log(lady);
    }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let princess = ladies.find(lady => lady.size === prince.shoe);
console.log(princess);