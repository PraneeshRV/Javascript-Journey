// array = a variable like structure that can 
//         hold more than 1 value

let fruits = ["apple", "orange", "banana", "coconut"];

//fruits.push("coconut");  //add an element
//fruits.pop();            //removes last element
//fruits.unshift("mango"); //add element to beginning
//fruits.shift();          //removes element from beginning

let numOfFruits = fruits.length;
let index = fruits.indexOf("coconut");

//console.log(fruits);
//console.log(fruits[0]);
//console.log(fruits[1]);
//console.log(fruits[2]);
//console.log(fruits[3]);

//console.log(numOfFruits);
//console.log(index);

//fruits.sort();
//fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit);
}