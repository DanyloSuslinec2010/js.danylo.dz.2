// const day = 7;
// if (true ) {
//     const age = 17;
//     var a = 11
//     console.log(a)
// }
// console.log(day)
// console.log(age)

// if (day===1){
//     console.log("понедельник")
// } else if (day===2){
//     console.log("вторник")
// }
// else if(day===3){
//     console.log("середа")
// }
// else if(day===4){
//     console.log("четверг")
// }
// else if(day===5){
//     console.log("пятница")
// }
// else if(day===6){
//     console.log("суботта")
// }
// else if (day === 7) {
//   console.log("воскресенья");
// } else {
//   console.log("не существует");
// }


// switch (day) {
//   case 1: console.log("понедельник");
//   break;
//   case 2: console.log("вторник");
//   break;
//   case 3: console.log("середа"); 
//   break;
//   case 4: console.log("четверг");
//   break;
//   case 5: console.log("пятница");
//   break;
//   case 6: console.log("суботта");
//   break;
//   case 7: console.log("воскресенья");
//   break;
//   default:
//     console.log("не существует");
// }

// let isOnline = prompt ("ты онлайн");
// let isFriend = confirm("ты мой друг");
// let isDnd = confirm("ты не зайнятий?");

// if (isOnline == true && isFriend == true && isDnd == false) {
//   console.log("ты можеш написати");
// } else {
//   console.log("щось пішло не так");
// }



// let age = prompt("Скільки вам років?");

// if (age < 12) {
//   console.log("Ти дитина!");
// } else if (age >= 12 && age < 18) {
//   console.log("підліток");
// } else if (age >= 18 && age < 60) {
//   console.log("Ти дорослий");
// } else if (age >= 60) {
//   console.log("Ти пенсіонер");
// } else {
//   console.log("error");
// }


// let login = "515";
// switch (login) {
//   case "admin":
//     console.log("admin");
//     break;
//   case "user":
//     console.log("Вітаю, користувачу!");
//     break;
//   default:
//     console.log("Невідомий користувач");
// }


// const a = 10;
// const b = 5;
// const operator = "+"; 
// let result;

// switch (operator) {
//   case "+":
//     result = a + b;
//     break;
//   case "-":
//     result = a - b;
//     break;
//   case "*":
//     result = a * b;
//     break;
//   case "/":
//     result = a / b;
//     break;
// }

// console.log(result);


// Умова: Є змінна color = "green".
// Виведи:

// "Йди" — green

// "Готуйся" — yellow

// "Стій" — red

// "Невідомий сигнал" — інше

    let color = "red"
    switch (color) {
        case "green": 
        console.log ("готуйся")
        break;
        case "yellow":
            console.log("почеекай")
            break
            case "red":
                console.log ("cтiй")
                break
                default: console.log (error)
    }