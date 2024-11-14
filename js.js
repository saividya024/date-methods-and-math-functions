 //math round:-
 console.log(Math.round(4.6))//5
console.log(Math.round(4.3))//4

//Math ceil:-
console.log(Math.ceil(7.2)); // Output: 8
console.log(Math.ceil(-7.1)); // Output: -7

//Math floor():-
console.log(Math.floor(5.8)); // Output: 5
console.log(Math.floor(-5.9)); // Output: -6

//Math trunc():-
console.log(Math.trunc(7.9)); // Output: 7
console.log(Math.trunc(-7.9)); // Output: -7
//Math pow():-
console.log(Math.pow(5, 4)); // Output: 625 (2^3)
console.log(Math.pow(5, 9));//output: 1953125   (5^9)
//Math sqrt:-
console.log(Math.sqrt(81)); // Output: 9
console.log(Math.sqrt(36));// Output:6
// Math.abs():-
console.log(Math.abs(-7)); // Output: 7
console.log(Math.abs(9.2)); // Output: 9.2
//Math.min() & Math.max():-
console.log(Math.min(2, 3, -2, 7)); // Output: -2
console.log(Math.max(2, 3, -2, 7)); // Output: 7
//Math.random():-
console.log(Math.random()); // Output: Random number between 0 and 1
console.log(Math.random() * 15); // Output: Random number between 0 and 15 (5.631676795979859)

// es6 features:-
let x = 5;
x = 10;            // Allowed
const y = 20;
 //y = 30; //error

// Arrow function
const multiplyArrow = (a, b) => a * b;
console.log(multiplyArrow(5, 6)); // Output: 30

const add = (a, b) => a + b;
console.log(add(7, 7)); //o/p:-14
//Template Literals
const age = 24;
const message = `You are ${age} years old.`;
console.log(message); 
//o/p:-You are 24 years old.

//date methods:-
let alarm=document.getElementById("song")
function alarmring(){
    let prsnttime=new Date();
    let alarmtime=new Date();
    alarmtime.setHours(14);
    alarmtime.setMinutes(55);
    alarmtime.setSeconds(30);
    let timediff=alarmtime-prsnttime;
    console.log(timediff);
    setTimeout(()=>{
        alarmsong.play()
        alert("your alarm is ringing")
    },timediff)
console.log("your alarm will ring at 2:50");
}
alarmring()

