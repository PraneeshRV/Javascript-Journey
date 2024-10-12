// sort() = method used to sort elements of an array in place.
//               Sorts elements as strings in lexicographic order, not alphabetical
//               lexicographic = (alphabet + numbers + symbols) as strings

// ---------- EXAMPLE 1 ----------
const numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

numbers.sort((a, b) => a - b); //FORWARD
numbers.sort((a, b) => b - a); //REVERSE

console.log(numbers);

// ---------- EXAMPLE 2 ----------
const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                            {name: "Patrick", age: 37, gpa: 1.5},
                            {name: "Squidward", age: 51, gpa: 2.5},
                            {name: "Sandy", age: 27, gpa: 4.0}]

people.sort((a, b) => a.age - b.age); //FORWARD
people.sort((a, b) => b.age - a.age); //REVERSE

people.sort((a, b) => a.gpa - b.gpa); //FORWARD
people.sort((a, b) => b.gpa - a.gpa); //REVERSE

people.sort((a, b) => a.name.localeCompare(b.name)); //FORWARD
people.sort((a, b) => b.name.localeCompare(a.name)); //REVERSE

console.log(people);