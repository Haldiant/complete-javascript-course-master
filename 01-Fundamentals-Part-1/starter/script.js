// let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");

// console.log(10 - 2 - 9 + 30);

// console.log("Nahal");
// console.log(15);

// let firstName = "Widianto";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let nahal_widiano = "NW";
// let $function = 27;

// let person = "nahal";
// let PI = 3.1415;

// let myFirstJob = "Implementor";
// let myCurrentJob = "Still Implementor";

// let job1 = "Implementor";
// let job2 = "Stil Implementor";

// console.log(myFirstJob);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// let bisa dimutasi
// let age = 30;
// age = 31;
// console.log(age);

// const tidak bisa dimutasi
// const birthYear = 1991;
// birthYear = 1990;

// const job;

// var job = "implementor";
// job = "marketing";

// const now = 2024;
// const ageNahal = now - 2008;
// const ageWidianto = now - 2006;
// console.log(ageNahal, ageWidianto);

// console.log(ageNahal * 2, ageNahal / 2, 2 ** 3);
// //2 ** 3 = 2^3

// const firstName = "Nahal";
// const lastName = "Widianto";
// console.log(firstName + " " + lastName);

// //assignmen operator
// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// x--;
// console.log(x);

// //comparison operator (>,<,>=,<=)
// console.log(ageNahal > ageWidianto);
// console.log(ageNahal >= 18);

// const isFullAge = ageWidianto >= 18;

// console.log(now - 1999 > now - 2000);

// const firstName = "Saufia";
// const job = "Teacher";
// const birthYear = 1999;
// const yearNow = 2024;

// const saufiaNow = `I'm ${firstName}, a ${yearNow - birthYear} year old ${job}!`;
// console.log(saufiaNow);

// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log("Nahal bisa bikin SIM");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Nahal Belum bisa bikin SIM, tunggu ${yearsLeft} tahun lagi`);
// }

// const birthYear = 2001;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);
// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
// } else {
//   console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
// }

// const money = 100;
// if (money) {
//   console.log("don't spend it all ;)");
// } else {
//   console.log("you should get a job!");
// }

// let height = 0;
// if (height) {
//   console.log("height is defined");
// } else {
//   console.log("height is undefined");
// }

// const age = 18;
// if (age === 18) console.log("you just became an adult (strict)");

// if (age == 18) console.log("you just became adult (loose)");

// const favourite = Number(prompt("what's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("23 is an amazing number");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("your number is not 23 or 7 or 9");
// }

// if (favourite !== 23) console.log("why not 23?");

// const hasDriverLicense = true;
// const hasGoodVision = true;

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// // if (hasDriverLicense && hasGoodVision) {
// //   console.log("Nahal is able to drivve");
// // } else {
// //   console.log("someone else should drive");
// // }

// const isTired = false;
// console.log(hasDriverLicense && hasGoodVision && isTired);

// if (hasDriverLicense && hasGoodVision && !isTired) {
//   console.log("Nahal is able to drivve");
// } else {
//   console.log("someone else should drive");
// }

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins);
console.log(scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy");
} else {
  console.log("Both win the trophy");
}
