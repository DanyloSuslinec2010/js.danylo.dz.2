let textField1 = "Текст1";
let textField2 = "Текст2";
if (textField1 && textField2) {
  console.log("оба поля заполнены врорде");
} else {
  console.log("не все заполнены"); //1
}

let number1 = 5; //2
let number2 = 7;
let sum = numberone + numbertwo;
if (sum > 10) {
  console.log("сумма больше 10");
} else {
  console.log("сумма меньше 10");
}

let text = "у текста есть JavaScript"; //3
if (text.includes) {
  console.log("текст имеет JavaScript");
} else {
  console.log("текст не имеет слов JavaScript");
}

let num = 15; //4
if (num > 10 && num < 20) {
  console.log("число входит в деапозон от 10 до 20");
} else {
  console.log("число не входит в деапозон от 10 до 20");
}

let name = "Анна"; //5
let email = "anna32423423@example.com";
let password = "532523325545";
let isNameValid = name.length >= 3;
let isEmailValid = email.includes && email.indexOf > email.indexOf;
let isPasswordValid = password.length >= 6;
if (isNameValid && isEmailValid && isPasswordValid) {
  console.log("перенапревленние на другую сторону");
} else {
  console.log("ошибка не правильно заполнили");
}
