let arr=[10,20,30,40,50,'hello',true,[1,2,3],{key:"value"},null,undefined];
console.log("Array Elements: " + arr);
console.log(arr);
console.log(typeof arr);
console.log(arr.length);
arr.push(60);
arr.pop('Aditya');
console.log("Updated Array Elements: " + arr);

arr.pop()
// slice and sprise//
let newArr = arr.slice(2,5);
console.log("Sliced Array Elements: " + newArr);

arr.splice(3,2,'newElement1','newElement2');
console.log("Spliced Array Elements: " + arr);

arr.unshift('startElement');
console.log("After Unshift Array Elements: " + arr);

arr.shift();
console.log("After Shift Array Elements: " + arr);



console.log("Person Object: " + person);
console.log("Full Name: " + person.getFullName());
console.log("Skills: " + person.skills);
console.log("First Skill: " + person.skills[0]);

person.age = 22;
console.log("Updated Age: " + person.age);

person.skills.push('Python');
console.log("Updated Skills: " + person.skills);

person.country = 'India';
console.log("Added Country: " + person.country);

delete person.adress;
console.log("After Deleting Address: " + person);
