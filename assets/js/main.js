//Date Objects Lev1

//Lev1_1-------------------
// let result = document.getElementById("result");
// let date1 = new Date("September 2, 2019 09:00:00");
// let date2 = new Date(0);
// let date3 = new Date(31556908800);
// let date4 = new Date(86400000);

// result.innerHTML = date1 + '=  new Date("September 2, 2019 09:00:00")';
// result.innerHTML += "<br>" + date2 + '=  new Date(0)';
// result.innerHTML += "<br>" + date3 + '=  new Date(31556908800)';
// result.innerHTML += "<br>" + date4 + '=  new Date(86400000)';

//Lev1_2-------------------
let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];
let date = new Date();

console.log(date);
console.log(date.getFullYear()); //2022
console.log(date.getMonth() + ' ' + monate[date.getMonth()]);
console.log(date.getDay() + ' ' + wochenTag[date.getDay()]);
console.log(date.getHours() + ' ' + 'Stunde');
console.log(date.getMinutes() + ' ' + 'Minute');
console.log(wochenTag[date.getDay()]);
console.log(monate[date.getMonth()]);




let interval = setInterval(() => {
    let date = new Date();
    let day = document.getElementById("day");
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let period = document.getElementById("period");

    day.innerHTML = wochenTag[date.getDay()].slice(0, 3);
    hours.innerHTML = date.getHours();
    minutes.innerHTML = date.getMinutes();
    seconds.innerHTML = date.getSeconds();
    period.innerHTML = date.getHours() >= 12 ? "PM" : "AM";
}, 100);

//Lev1_3-------------------

let date5 = new Date();
console.log(date5);
date5.setDate(date5.getDate() + 30);
console.log(date5);

//Lev1_4-------------------

function tageImMonat(monat, jahr) {
    let date = new Date(jahr, monat, 0);
    return date.getDate();

}

console.log(tageImMonat(1, 2016)); //31
console.log(tageImMonat(2, 2016)); //29
console.log(tageImMonat(12, 2017)); //31

//Lev1_5-------------------

let list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];


const monatsName = inputDate => {
    let date = new Date(inputDate);
    return list[date.getMonth()];
}

console.log(monatsName("2001,3,4"));
console.log(monatsName("2019,12,24"));
console.log(monatsName("1410,07,15"));

//Lev1_6-------------------
let date1 = new Date(1999, 10, 5, 15)
let date2 = new Date()
let date3 = new Date(2019, 12, 3, 12)
let date4 = new Date(2000, 1, 1, 11)

const period = (date) => {
    let period = date.getHours() >= 12 ? "PM" : "AM";
    return period;
}
console.log(period(date1));
console.log(period(date2));
console.log(period(date3));
console.log(period(date4));

//Lev1_7-------------------

const istWeekend = (date) => {
    let day = new Date(date).getDate();
    console.log(day);

    // if (day === 0 || day === 6) {
    //     return "Weekend";
    // } else {
    //     return "Arbeitstag"
    // }

    return day === 0 || day === 6 ? "Weekend" : "Arbeitstag";

}
console.log(istWeekend("12, 15, 2019"));
console.log(istWeekend("2, 16, 2001"));
console.log(istWeekend("2, 1, 2020"));
console.log(istWeekend("2, 29, 2020"));

// Math Objects Lev1=======================================
//Lev1_1-------------------

console.log(Math.PI);
const PI = Math.PI
const roundedPI = PI.toFixed(2);
console.log(roundedPI);


//Lev1_2-------------------
let array = [
    3.14,
    193.4464,
    0.8596433607, -2.940629089,
];

const rundet = () => {
    array.forEach(el => {
        console.log(Math.round(el));
    });
}
rundet()

//lev1_3-------------------

const randomNum = Math.random();
console.log(randomNum);
const randomNum1_10 = Math.floor(Math.random() * 10 + 1);
console.log(randomNum1_10);
const randomNum1_100 = Math.floor(Math.random() * 100 + 1);
console.log(randomNum1_100);


//Lev1_4-------------------

let num = [393, 205, 479, 47, 376, 267, 385, 2, 190, 383, 286, 462, 115, 138, 331, 409, 427, 245, 224, 276, 483, 55, 147, 177, 208, 347, 135, 282, 33, 270, 475, 426, 476, 453, 474, 351, 219, 358, 354, 410, 240, 139, 371, 356, 277, 202, 264, 204, 447, 488]

console.log(Math.min(...num));
console.log(Math.max(...num));

//Lev2=======================================

//Lev2_1-------------------

const roundTo = (Zahl, Genauigkeit) => {
    let num = Zahl.toFixed(Genauigkeit);
    return num;

}
console.log(roundTo(3.1415926535, 5))

//Lev2_2-------------------

const random = Math.floor(Math.random() * 10 + 1);
console.log(random);
// prompt("Geben Sie eine Zahl zwischen 1 und 10 ein");
// const userInput = Number(prompt("Geben Sie eine Zahl zwischen 1 und 10 ein"));
// console.log(userInput);

// const game = () => {

//     if (userInput == random) {
//         console.log("Richtig geraten ");
//     } else {
//         console.log(`Falsch geraten, die Zahl war ${random}. Versuche es nochmal`);
//     }
//     // return userInput === random ? "richtig geraten" : "richtig geraten";
// }

// game();
// console.log(game());

//Lev2_3-------------------

const minimalWerte = () => {
    let dasAlterDerEltern = Math.min(66, 55);
    let dasAlterDerGeschwister = Math.min(16, 28, 32);
    let dasAlterDerFussballspieler = Math.min(37, 34, 30, 30, 28, 36, 33);
    console.log(`Bei deinen Eltern ist die jüngte Person ${dasAlterDerEltern} Jahre alt. Bei dir und deinen Geschwistern ist die jüngste Person ${dasAlterDerGeschwister} Jahre alt. Und bei den Fußballspielern ist der jüngste ${dasAlterDerFussballspieler} Jahre alt.`)
    console.log(Math.min(dasAlterDerEltern, dasAlterDerGeschwister, dasAlterDerFussballspieler));


}

minimalWerte();