let arr =[1, 2, 3, 4, 5,true,"hello", null, undefined, {name: "John"}];
counsole.log("Array Elements: " + arr);

// Iterating through the array using different methods

// Using traditional for loop       
for(let i=0; i< arr.length; i++){
    console.log("Element at index " + i + " is " + arr[i]);
}

// Using for...of loop
for (let element of arr) {
    console.log("Element: " + element);
}

// Using for...in loop
for (let index in arr) {
    console.log("Index: " + index + ", Element: " + arr[index]);
}

// Functions with default parameters
function multiply(x, y = 2) {
    return x * y;
}

console.log("Multiply 5 and default 2: " + multiply(5));
console.log("Multiply 5 and 3: " + multiply(5, 3));

// Arrow Functions
const square = (n) => n * n;
console.log("Square of 4: " + square(4));

// Array Methods
let numbers = [1, 2, 3, 4, 5];

// Using map to create a new array with squared values
let squaredNumbers = numbers.map(num => num * num);
console.log("Squared Numbers: " + squaredNumbers);

// Using filter to get even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers: " + evenNumbers);

// Using reduce to get the sum of all numbers
let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum of Numbers: " + sum);

// Objects and Object Methods
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log("Full Name: " + person.getFullName());
console.log("Age: " + person.age);

// Adding a new property
person.city = "New York";
console.log("City: " + person.city);

// Deleting a property
delete person.age;
console.log("Person after deleting age: " + JSON.stringify(person));