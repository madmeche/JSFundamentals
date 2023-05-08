// 1)

// function makeCounter() {
//   let currentCount = 0;
//   return function () {
//     currentCount++;
//     console.log(currentCount);
//     return currentCount;
//   };
// }
// let counter1 = makeCounter();
// counter1(); // 1
// counter1(); // 2

/*a)
Create a second counter counter2 using the 
makeCounter function and test to see if
it remains independent to counter1*/

// function makeCounter() {
//   let currentCount = 0;
//   return function () {
//     currentCount++;
//     console.log(currentCount);
//     return currentCount;
//   };
// }
// let counter2 = makeCounter();
// counter2(); // 1
// counter2(); // 2

/*b)
Modify makeCounter so that it takes an argument 
startFrom specifying where thecounter starts from 
// (instead of always starting from 0)*/
// function makeCounter(startFrom) {
//   let currentCount = 0;

//   return function () {
//     startFrom = currentCount;
//     startFrom++;
//     console.log(startFrom);
//     return startFrom;
//   };
// }
//   let counter2 = makeCounter();
//   counter2(2); // 1
// //   counter2(); // 2

/*c)
Modify makeCounter to take another argument incrementBy, which specifies how
much each call to counter() should increase the counter value by.*/
// function makeCounter(startFrom, incrementBy) {
//     let currentCount = startFrom
//   function counter() {
//     // currentCount += incrementBy;
//     currentCount= currentCount + incrementBy;
//     console.log(currentCount)
//     return currentCount;
//   }
//   return currentCount;
// }
// const counter2 = makeCounter();
// // console.log(makeCounter(5,5))
// // console.log(makeCounter(1,5))
// counter2(1);
// counter2()

// 2)
/*The following delayMsg function is intended to be used to 
delay printing a message until some time has passed.*/
/*a) 
What order will the four tests below print in? Why? 
delayMsg('#4: Not delayed at all') will print first. It's at the end of the
code and it has no delay*/
/*b)
Rewrite delayMsg as an arrow function*/
// let delayMsg = (msg) =>
//   console.log(`This message will be printed after a delay: ${msg}`);
/* c)
Add a fifth test which uses a large delay time (greater than 10 seconds)
// */
// function delayMsg(msg) {
//   console.log(`This message will be printed after a delay: ${msg}`);
// }
// setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
// setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
// setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
// delayMsg("#4: Not delayed at all");

// d)
// function myStopFunction() {
//   clearTimeout(delayMsg, 120);

// setTimeout(delayMsg, 10000, "#5: Delayed by 10 seconds");
// }
// // is there a way to do this without adding it before the 10 second counter?

// 3)
// function printMe() {
//     console.log('printing debounced message')
//     }
//     // printMe = debounce(printMe); //create this debounce function for a)
//     /*fire off 3 calls to printMe within 300ms - only the LAST one should print, after
//     1000ms of no calls*/
//     setTimeout( printMe, 100);
//     setTimeout( printMe, 200);
//     setTimeout( printMe, 300);
// //a)
/*Create a debounce(func) decorator, which is a wrapper that takes a 
function func and suspends calls to func until there's 1000 milliseconds 
of inactivity. After this 1 second pause, the most recent call to 
func should be executed and any others ignored.*/

// function debounce(func) {
//     return function() {
//         let bounceDelay = setTimeout
//         setTimeout(func, 1000);
//     }
// }
// console.log(debounce(printMe))

// b)
/*Extend the debounce decorator function to take a second argument ms, which defines the
length of the period of inactivity instead of hardcoding to 1000ms*/

// function newDebounce(func,ms) {
//   return function() {
//     let newBounceDelay = setTimeout
//     setTimeout(func, ms);
//   }
// }
// console.log(newDebounce(printMe, 3000))

// c)
/*Extend debounce to allow the original debounced function printMe to take an argument
msg which is included in the console.log statement.*/

// function printMe(msg) {
//   console.log(`printing debounced message: ${msg}`);
// }

// printMe('check check')

// 4)
function fibonacci(num) {
  let num1 = 0;
  let num2 = 1;
  let sum;

  //   for (i = 0; i < num; i++) {
  //     // sum = num1 + num2;
  //     // num1= sum;
  //     // num2 = sum ++;

  //     // num2 += sum

  //     sum = num1 + num2; //then num1 must become then become the base
  //     num1 = num2;
  //     num2 = sum;
  //   }
}

// console.log("Fibonacci (4): " + fibonacci(4)); // always starting on 0
// console.log("Fibonacci(10): " + fibonacci(10));

// b) ***** https://stackoverflow.com/questions/17574571/nested-settimeout-alternative
/*Write a new version printFibonacciTimeouts() that uses nested setTimeout
calls to do the same thing*/

// function printFibonacciTimeouts(num) {  // could make a function calling out 1000ms
//   for (i = 0; i < num; i++) {
//         sum = num1 + num2;
//         num1= sum;
//         num2 = sum ++;
//   // console.log(fibonacci)
//   // setTimeout(function () {
//   //     setTimeout(function () {
//   //         console.log()
//   //         setTimeout(function () {
//   //             console.log()

//   //         }, 1000)
//   //     }, 1000)

//   // }, 1000)

// }
// }
// printFibonacciTimeouts(1)

// function printFibonacciTimeouts(num,ms) {

// let timeoutId = setTimeout(fibonacci, ms)
//     setTimeout( fibonacci, 1000);
//     setTimeout( fibonacci, 1000);
//     setTimeout( fibonacci, 1000);
//   return num2;
// }
// printFibonacciTimeouts(1,1000)

// c) ***********
/*Extend one of the above functions to accept a limit argument, which tells it how many
numbers to print before stopping.*/

// 5)
/*The following car object has several properties and a method which uses them to print a
description. When calling the function normally this works as expected, but using it from
within setTimeout fails. Why?*/ // it is calling for a 'this' function
// let car = {
//   make: "Porsche",
//   model: "911",
//   year: 1964,
//   description() {
//     console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
//   },

// };
// car.description(); //works
//   function slowDown() {
//   console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
//   setTimeout(car.description, 200); //fails
//   }
// slowDown()
// a)
// setTimeout(() => { //A string passed to setTimeout() is evaluated in the global context, so local symbols in the context where setTimeout() was called will not be available when the string is evaluated as code.
//   console.log(`This car is a ${car.make} ${car.model} from ${car.year}`);
// }, 200);

// b)
/*Change the year for the car by creating a clone of the original and overriding it*/
// reference: https://www.freecodecamp.org/news/a-beginners-guide-to-javascripts-prototype/
// function printnewYear() {
//   year: 1979;   //also tried this.year
//   const newYear = new Map({...car, year:1979});
//   return newYear;
// }

// return car(newYear => ({...newYear, year: 1979}))

/*Does the delayed description() call use the original values or the new values from
b)? Why?*/ //It is calling the original.

// c)
// let car2 = car.description.bind(setTimeouts); // still pulling from car. returning '[Function: bound description]' before the statement.
// console.log(car2)                             //also set bind to pull from printNewYear()

// e) ********

// 6) https://stackoverflow.com/questions/17112131/javascript-delay-function
// function multiply(a, b) {
//   console.log(a * b);
// }
// // multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

// // a)
// /*Use the example multiply function below to test it with, as above, and assume that all
// delayed functions will take two parameters*/
// // Function.prototype.delay = function(ms) {
// //   var fn = this;
// //   return function(a,b) {
// //       setTimeout(fn(a,b), ms);
// //   };
// // };
// multiply(5,9, 5000)     //delay not working

// // b)
/*Use apply to improve your solution so that delayed functions can take any number of
parameters*/

// c)
// function multiply(a, b, c, d) {
//       console.log(a * b * c * d);
//     }

// // 7) W3Schools
// function Person(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }

// // a)
// Person.prototype.toString = function () {
//   return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
// };

// // b)
// const person1 = new Person("Callan", 7, "male");
// const person2 = new Person("Rose Mae", 1, "female");

// console.log(person1.toString());
// console.log(person2.toString())

// // c)
// /*Create a new constructor function Student that uses call to inherit from Person and
// add an extra property cohort*/

// function Student(name, age, gender, cohort) {

// Person.call(this, name, age, gender); // When we make a constructor function using the new keyword, “this” returns an empty object, it creates a new empty object where
// this.cohort = cohort;                 //we can define different properties.
// }

// // d)
// Student.prototype.toString = function() {
//   return (`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Cohort: ${this.cohort}`);
// }

// const student1= new Student("Callan", 7, "male", "IoD");
// const student2 = new Student("Rose Mae", 1, "female", "PE");

// console.log(student1.toString())
// console.log(student2.toString())

// 8)
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  
  }
  Person.prototype.toString = function(name, age, gender) {
  return (this.name + ', ' + this.age + ', ' + this.gender )
  }
  const person1 = new Person('James Brown', 73, 'male')
  console.log('person1: '+person1.toString()) //prints person1: [object Object]