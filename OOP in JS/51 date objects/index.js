//Date object

// Date(year, month, day, hour, minute, second, ms)
const date = new Date();
console.log(date);

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);

date.setFullYear(2024);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
date.setSeconds (4);

console.log(date);

const date1 = new Date("2023-12-31");
const date2 = new Date("2023-12-30");

if(date2 > date1){
console.log("HAPPY NEW YEAR!");

}