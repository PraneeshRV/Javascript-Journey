// spread operator =  "..." allows an iterable such as an
//                                  array or string to be expanded
//                                  into separate elements
//                                 (unpacks the elements)

// ------------- EXAMPLE 1 -------------
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum);

// ------------- EXAMPLE 2 -------------
let username = "Bro Code";
let letters = [...username]; 

console.log(letters);

// ------------- EXAMPLE 3 -------------
let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];
let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);