let age = 15; 
console.log("лет:", age);

let name = "Даничка"; 
console.log("имя:", name);

let isStudent = false; 
console.log("Студент:", isStudent);


let myString = "успех — це сукупність невеликих зусиль.";
console.log("любимая цитата:", myString);

let myNumber = 52;
myNumber += 42;
console.log("myNumber посля 42:", myNumber);

let myNull = null;
console.log("myNull:", myNull);


let userName = prompt("Введіть своє ім’я");
alert("твое имя: " + userName);
console.log("Тип userName:", typeof userName);


let userAnswer = confirm("вы реально хотите покинуть сайт?");
console.log("ответ:", userAnswer); 


alert("внимание! может быть опасно.");
let confirmDangerousAction = confirm("вы уверены?");
console.log("подтвердил:", confirmDangerousAction);
