// arrow functions = a concise way to write function expressions
//                                good for simple functions that you use only once
//                                (parameters) => some code

// ---------- EXAMPLE 1 ----------
const hello = (name, age) => {console.log(`Hello ${name}`)
                              console.log(`You are ${age} years old`)};
   
hello("Bro", 25);
  
// ---------- EXAMPLE 2 ----------
setTimeout(() => {console.log("Hello"); 
                  console.log("Goodbye");}, 3000);

// ---------- EXAMPLE 3 ----------               
const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(total);