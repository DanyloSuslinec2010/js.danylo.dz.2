const choice = "Чай";//1
switch (choice) {
  case "Кава":
    console.log(" кава!");
    break;
  case "Чай":
    console.log("чай!");
    break;
  case "Сік":
    console.log("сок!");
    break;
  default:
    console.log("че ты выбрал гений");
} 





const day = 7; //2
if (true) {
  const age = 17;
  var a = 11;
  console.log(a);
}
console.log(day);
console.log(age);

if (day === 1) {
  console.log("понедельник");
} else if (day === 2) {
  console.log("вторник");
} else if (day === 3) {
  console.log("середа");
} else if (day === 4) {
  console.log("четверг");
} else if (day === 5) {
  console.log("пятница");
} else if (day === 6) {
  console.log("суботта");
} else if (day === 7) {
  console.log("воскресенья");
} else {
  console.log("не существует");
}
//попроще
switch (day) {
  case 1:
    console.log("понедельник");
    break;
  case 2:
    console.log("вторник");
    break;
  case 3:
    console.log("середа");
    break;
  case 4:
    console.log("четверг");
    break;
  case 5:
    console.log("пятница");
    break;
  case 6:
    console.log("суботта");
    break;
  case 7:
    console.log("воскресенья");
    break;
  default:
    console.log("не существует");
}











const month = 7;//3
let season;
switch (true) {
  case month === 12 || month === 1 || month === 2:
    season = "Зима";
    break;
  case month >= 3 && month <= 5:
    season = "Весна";
    break;
  case month >= 6 && month <= 8:
    season = "Лето";
    break;
  case month >= 9 && month <= 11:
    season = "Осень";
    break;
  default:
    season = "неверный номер месяца";
}
console.log(`месяц ${month} отвнчает за части года ${season}`);











let color = "red"; //4
switch (color) {
  case "green":
    console.log("готуйся");
    break;
  case "yellow":
    console.log("почеекай");
    break;
  case "red":
    console.log("cтiй");
    break;
  default:
    console.log(error);
}

switch (
  operator //5
) {
  case "+":
    result = a + b;
    break;
  case "-":
    result = a - b;
    break;
  case "*":
    result = a * b;
    break;
  case "/":
    result = a / b;
    break;
}

console.log(result);
