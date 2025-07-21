const celsius = 19; //1
const fahrenheit = (celsius * 9/5) + 32;
console.log(fahrenheit)


let daysInMonth = 30; //2
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
console.log("часов в часу:", hoursInMonth);
console.log("мнут в месяце:", minutesInMonth);


let health = 100; //3
let energy = 80;
health -= 20; //здоровья
energy -= 15; //енергия
console.log("уровень здоровья:", health);
console.log("уровень енергии:", energy);

let totalPrice = 500; //4
let discount = 0.1; // 10 ghjw
let discountedPrice = totalPrice * (1 - discount);
console.log("цена со скидкой:", discountedPrice);


const floatNumber = 12.78; //5
let roundedDown = Math.floor(floatNumber);
console.log( roundedDown);


const floatString = "45.67" //6
let parsedFloat = parseFloat(floatString);
console.log(parsedFloat);


const intString = "123"; //7
let parsedInt = parseInt(intString);
console.log(parsedInt);


let number = 81;
let sqrtNumber = Math.sqrt(number);  //8
console.log(sqrtNumber);


const integer = 42;
const stringNumber = "256"; //9
let convertedInt = parseInt(stringNumber);
console.log(convertedInt);
let convertedString = integer.toString();
console.log(convertedString);