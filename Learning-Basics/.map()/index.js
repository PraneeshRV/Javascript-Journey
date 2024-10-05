// .map() = accepts a callback and applies that function 
//                 to each element of an array, then return a new array

// ----------- EXAMPLE 1 -----------
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(square);
const cubed = numbers.map(cube);

console.log(cubed);

function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}

// ----------- EXAMPLE 2 -----------
const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(studentsLower);

function upperCase(element){
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
}

// ----------- EXAMPLE 3 -----------
const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}