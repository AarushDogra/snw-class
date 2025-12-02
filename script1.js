console.log("Hello JS")
console.log("Welcome to JavaScript programming")
document.body.innerText="Hello Js"
document.body.style.backgroundColor="yellow";
document.body.style.fontSize="30px";
document.body.style.fontWeight="bold";
document.body.fontSize="40px";

// alert("This is an alert box!");
// variable declaration
var name = 5
console.log(name);
    name= 10
console.log(name);


var name = 15
console.log(name);
let age = 25;
const pi = 3.14;
console.log(age);
const height = 30;
console.log(age);
// pi = 3.1416; // This will cause an error
// console.log(pi);

// Data Types
let str = "Hello, World!"; // String
let num = 42;              // Number
let isTrue = true;         // Boolean
let undef;                 // Undefined
let nul = null;           // Null
let obj = {                // Object
    key: "value"
};
let arr = [1, 2, 3];      // Array

console.log(typeof str);
console.log(typeof num);
console.log(typeof isTrue);
console.log(typeof undef);
console.log(typeof nul);
console.log(typeof obj);
console.log(typeof arr);

// Operators
let a = 10;
let b = 5;

console.log("Addition: " + (a + b));
console.log("Subtraction: " + (a - b));
console.log("Multiplication: " + (a * b));
console.log("Division: " + (a / b));
console.log("Modulus: " + (a % b));

// Comparison Operators
console.log("Equal: " + (a == b));
console.log("Not Equal: " + (a != b));
console.log("Greater Than: " + (a > b));
console.log("Less Than: " + (a < b));
console.log("Greater Than or Equal To: " + (a >= b));
console.log("Less Than or Equal To: " + (a <= b));

// Logical Operators
console.log("AND: " + ((a > 5) && (b < 10)));
console.log("OR: " + ((a > 5) || (b > 10)));
console.log("NOT: " + !(a > 5));

// Control Structures
// If-Else
if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("a is not greater than b");
}

// For Loop
for (let i = 0; i < 5; i++) {
    console.log("For Loop iteration: " + i);
}

// While Loop
let count = 0;
while (count < 5) {
    console.log("While Loop count: " + count);
    count++;
}

// Functions
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice"));
console.log(greet("Bob"));

// Arrow Function
const add = (x, y) => {
    return x + y;
}

console.log("Sum: " + add(5, 10));
console.log("Sum: " + add(20, 30));

// Arrays
let fruits = ["Apple", "Banana", "Cherry"];
console.log("Fruits: " + fruits);
fruits.push("Date");
console.log("Fruits after push: " + fruits);
fruits.pop();
console.log("Fruits after pop: " + fruits);

// Objects
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

console.log("Person: " + JSON.stringify(person));
console.log("First Name: " + person.firstName);
console.log("Last Name: " + person.lastName);
console.log("Age: " + person.age);

person.age = 31;
console.log("Updated Age: " + person.age); 