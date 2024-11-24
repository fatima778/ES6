// Question# 08
import{add, sub, multi, divide} from './mathoperations.js';

function performOperations(a, b) {
    console.log(`${a} + ${b} = ${add(a, b)}`);
    console.log(`${a} - ${b} = ${sub(a, b)}`);
    console.log(`${a} * ${b} = ${multi(a, b)}`);
    console.log(`${a} / ${b} = ${divide(a, b)}`);
}
performOperations(2, 9); 
performOperations(10, 5); 

// Question# 01
function variable_scope() {
    var global = "I am function-scoped (accessible anywhere in the function).";
    let blocklet = "I am block-scoped (accessible only in this block).";
    const blockconst = "I am block-scoped and constant.";

    return `
    -Var: ${global} 
    -let: ${blocklet}
    -const: ${blockconst}`;
}

console.log(variable_scope());

// Question# 02
function create_multiplier(multiplier) {
    return function multiply(input) {
        return input * multiplier;
    };
}
const double = create_multiplier(2);
const triple = create_multiplier(3);
console.log(double(5));
console.log(double(4));
console.log(triple(3));
console.log(triple(8));

// Question# 03
function person({ name, age, country = "Pakistan", city = "Karachi" }) {
    return `My name is ${name}, I am ${age} years old. I live in ${city}, city of country ${country}`;
}

var person1 = { name: "Fatima", age: 20 };
var person2 = { name: "Atiya", age: 24, country: "dirty world", city: "dirto house(safeguard ka dushman)" }
console.log(person(person1));
console.log(person(person2));

// Question# 04
function calculateTotal(price, ...discounts) {
    let finalPrice = price;
    for (let discount of discounts) {
        finalPrice -= discount;
    }
    return finalPrice;
}

console.log(calculateTotal(200, 10, 6, 8));
console.log(calculateTotal(100, 8));

// Question# 05
const calculator = {
    addition: (a, b) => a + b,
    sub: (a, b) => a - b
};
console.log(calculator.addition(3, 6));
console.log(calculator.sub(3, 6));

// Question# 06
const books = [
    { title: "Jannat kay Pattay", author: "Nemrah Ahmed", yearOfPublish: 2014 },
    { title: "Peer-e-Kamil", author: "Umerah Ahmed", yearOfPublish: 2004 },
    { title: "Namal", author: "Nemrah Ahmed", yearOfPublish: 2017 },
    { title: "Azazeel", author: "Rabia khan", yearOfPublish: 2013 },
    { title: "Bakht", author: "Mehrulnisa shahmeer", yearOfPublish: 2014 }
]

function list(books) {
    for (let book of books) {
        console.log(`Title: "${book.title}", Author: ${book.author}, Year Published: ${book.yearPublish}`);

    }
}
list(books);

// Question# 07
function* idgenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}
const ID = idgenerator();
console.log(ID.next().value);
console.log(ID.next().value);
console.log(ID.next().value);
console.log(ID.next().value);
console.log(ID.next().value);



// Question# 09
const student = {
    name: "Fatima Khalid",
    age: 20,
    grade: "Undergraduate student",
    subjects:
        ["Linear Algebra", "DBMS", "Operating System", "Digital Marketing"]
};

for (let i in student) {
    console.log(`${i}: ${student[i]}`);
}

// Question# 10
let numbers = [1, 2, 3, 4, 5, 6];
let squared = numbers.map(num => num * num);
console.log(numbers);
console.log(squared);

// Question# 11
function additions(a, b) {
    return a + b;
}
function subtraction(a, b) {
    return a - b;
}

function operate(a, b, mycallback) {
    return mycallback(a, b);
}

console.log(operate(5, 6, additions));
console.log(operate(5, 9, subtraction));

// Question# 12
const greet = setTimeout(() => {
    console.log("Hello World!!");
}, 3000);

// Question# 13
function Currenttime() {
    const intervalId = setInterval(() => {
        const currentTime = new Date().toLocaleTimeString();
        console.log(`Current Time: ${currentTime}`);
    }, 2000);

    setTimeout(() => {
        clearInterval(intervalId);
        console.log("Stopped logging time.");
    }, 10000);
}

Currenttime();

// Question# 14
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data recieved!!");
        }, 2000)
    });
}

fetchData()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log("Error", error);
    })
    ;

// Question# 15
async function fetchedData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data resolved!!");
        }, 2000)
    });
}
async function callfetchData() {
    try {
        const result = await fetchedData();
        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    };
}

callfetchData();

// Question# 16
function exponenet(base, power) {
    return base ** power;
}

console.log(exponenet(8, 2));
console.log(exponenet(6, 3));
console.log(exponenet(2, 4));
console.log(exponenet(9, 2));
console.log(exponenet(12, 2));

// Question# 17
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    speak() {
        const sounds = {
            Dog: "Woof!",
            Cat: "Meow!",
            Cow: "Moo!",
            Bird: "Chirp!",
        }
        const sound= sounds[this.species];
        console.log(`${this.species} named ${this.name} says ${sound}`);
    }
}
const dog = new Animal("Buddy", "Dog");
const cat = new Animal("Whiskers", "Cat");
const cow = new Animal("Daisy", "Cow");
const bird = new Animal("Tweety", "Bird");


dog.speak();
cat.speak();
cow.speak();
bird.speak();

// Question# 18
function checking_even_odd(num) {
    return num % 2 === 0 ? "Even": "Odd"; 
}

console.log(checking_even_odd(8));
console.log(checking_even_odd(1));
console.log(checking_even_odd(3));
console.log(checking_even_odd(6));
console.log(checking_even_odd(4));
console.log(checking_even_odd(7));

// Question# 19
const user= {
    name: 'Fatima Khalid',
    age: 20,
    address:{
        city: 'Karachi'
    }
};

const user1= {
    name: "Atiya",
    age: 22
}

function log(userobj){
    // console.log(user);  
    console.log(`My name is ${userobj.name} I am ${userobj.age}. I live in city ${userobj?.address?.city}`);  
}
log(user);
log(user1);

