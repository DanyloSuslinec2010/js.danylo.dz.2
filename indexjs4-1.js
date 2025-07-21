const student = "артемка"
const mentor = "катеерина"
const age = 15;

const message = `найкращий учень ${student} i його найркащий ментор ${mentor}`;
const num1 = 18;
const num2 = 60;

//&& i

//||
const resul = age >= num1 && age <= num2; 
console.log(resul)
//!
console.log(!true)
console.log(!false)

if(age > 45){
    console.log("ты права на машину")
} else {
    console.log ("ты не можешь отримать ведь да")
}


const season = "зима"
if (season === "зима"){
    console.log("c новым годом")
} else if (seanson === "весна"){
    console.log("пора сдать экзамены")
} else if (seanson === "лето"){
    console.log("иди гуляй на каникулы")
}else if (seanson === "осень"){
    console.log ("иди в школу")
}else {
    console.log("ошибка выбора")
}