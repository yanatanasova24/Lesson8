// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let arrOfUsers = [];
for (let i = 0; i < 10; i++){
    let newUser = new User(i+1, 'SomeName', 'SomeSurname', 'someemail@gmail.com', '+55594654');
    arrOfUsers.push(newUser);
}
console.log(arrOfUsers);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filteredArr = arrOfUsers.filter((user)=>{
    return !(user.id % 2);
})

console.log(filteredArr);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortedArr = arrOfUsers.sort((user1, user2)=>{
    return user1.id - user2.id;
})

console.log(sortedArr);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clientsList = [];

for (let i = 0; i < 10; i++){
    let newClient = new Client(i+1, 'SomeName', 'SomeSurname', 'someemail@gmail.com', '+55594654', ['something1, something2']);
    clientsList.push(newClient);
}

clientsList[5].order.push('something3, something4');
clientsList[9].order.push('something3, something4', 'something5');
clientsList[1].order.push('something3, something4', 'something5', 'something6');

console.log(clientsList);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortedClients = clientsList.sort((client1, client2)=>{
    return client1.order.length - client2.order.length;
})

console.log(sortedClients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, company, year, maxSpeed, engine){
    this.model = model;
    this.company = company;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;

    this.drive = function(){
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
    }
    this.info = function(){
        console.log(`model: ${model}
        company: ${company}
        year: ${year}
        maxSpeed: ${maxSpeed}
        engine: ${engine}`);
    }
    this.increaseMaxSpeed = function(newSpeed){
        this.maxSpeed = maxSpeed + newSpeed;
    }
    this.changeYear = function(newYear){
        this.year = newYear;
    }
    this.addDriver = function(driver){
        this.driver = driver;
    }
}

let carItem = new Car('civic', 'honda', 2017, 220, '2l');
carItem.drive();
carItem.info();
carItem.increaseMaxSpeed(20);
console.log(carItem);
carItem.changeYear(2018);
console.log(carItem);
carItem.addDriver({name: 'someName', age:31, experience: 4})
console.log(carItem);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CarClass {
    constructor(model, company, year, maxSpeed, engine) {
        this.model = model;
        this.company = company;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }

    drive(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info(){
        console.log(`model: ${this.model}
        company: ${this.company}
        year: ${this.year}
        maxSpeed: ${this.maxSpeed}
        engine: ${this.engine}`);
    }
    increaseMaxSpeed(newSpeed){
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    changeYear(newYear){
        this.year = newYear;
    }
    addDriver(driver){
        this.driver = driver;
    }
}

let carItem2 = new CarClass('civic', 'honda', 2017, 220, '2l');
carItem2.drive();
carItem2.info();
carItem2.increaseMaxSpeed(20);
console.log(carItem2);
carItem2.changeYear(2018);
console.log(carItem2);
carItem2.addDriver({name: 'someName', age:31, experience: 4})
console.log(carItem2);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella{
    constructor(name, age, fSize) {
        this.name = name;
        this.age = age;
        this.fSize = fSize;
    }
}

let arrOfCinderellas = [];

for (let i = 0; i < 9; i++){
    let newCinderella = new Cinderella('SomeName', '18',  37);
    arrOfCinderellas.push(newCinderella);
}

let theCinderella = new Cinderella('Princess', '18',  36);
arrOfCinderellas.push(theCinderella);

console.log(arrOfCinderellas);

class Prince{
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }

    findTheCinderella(arrOfGirls){
        for(let girl of arrOfGirls){
            if(girl.fSize === this.shoe){
                return girl;
            }
        }
    }

    findTheCinderella2(arrOfGirls){
        return arrOfGirls.find((girl)=>{
            return girl.fSize === this.shoe
        })
    }
}

let thePrince = new Prince('Charming', '20', 36);

console.log(thePrince.findTheCinderella(arrOfCinderellas));
console.log(thePrince.findTheCinderella2(arrOfCinderellas));

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку