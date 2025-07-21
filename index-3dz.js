let result = 5 + 5 + "5"; //1
console.log(result);
console.log( typeof result);


let email = "example@gmail.com"; //2
let hasAtSymbol = email.includes("@");
let emailLength = email.length;
console.log("Email містить @:", hasAtSymbol);
console.log("Кількість символів у email:", emailLength);


const word1 = "My";//3
const word2 = "name";
const word3 = "is";
let fullName = word1 + "tema" + word2 + "danya " + word3 + " Viktor";
console.log("fullName:", fullName);


let userName = "Олександро";//4
let payment = 300;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень `);