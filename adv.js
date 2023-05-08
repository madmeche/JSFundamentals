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
// class DigitalClock {
//   constructor(prefix) {
//   this.prefix = prefix;
//   }
//   display() {
//   let date = new Date();
//   //create 3 variables in one go using array destructuring
//   let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
//   date.getSeconds()];
//   if (hours < 10) hours = '0' + hours;
//   if (mins < 10) mins = '0' + mins;
//   if (secs < 10) secs = '0' + secs;
//   // console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
//   }
//   stop() {
//   clearInterval(this.timer);
//   }
//   start() {
//   this.display();
//   this.timer = setInterval(() => this.display(), 1000);
//   }
//   }
//   const myClock = new DigitalClock('my clock:')
//   myClock.start()

// a) https://javascript.info/class-inheritance
/*Create a new class PrecisionClock that inherits from DigitalClock and adds the
parameter precision – the number of ms between 'ticks'. This precision parameter
should default to 1 second if not supplied.*/

// class PrecisionClock extends DigitalClock {
//   constructor(prefix, precision = 1000) {
//     this.prefix;
//     this.precision = precision;
//     let ms = myClock.getMilliseconds;
//     console.log(`${this.prefix} ${hours}:${mins}:${secs}:${ms}`) // still not printing ms
//     }
//     start() {
//       this.display();
//       this.timer = setInterval(() => this.display(), this.precision())
//     }
    
// }

// b) 
/*Create a new class AlarmClock that inherits from DigitalClock and adds the
parameter wakeupTime in the format hh:mm. When the clock reaches this time, it
should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should
default to 07:00 if not supplied.*/
// class AlarmClock extends DigitalClock {
//   constructor(prefix, wakeupTime = "07:00") {
//   this.prefix = prefix
//     this.wakeupTime = wakeupTime
// }
// display() {
//   let date = new Date();
//   let [hours, mins] = [date.getHours(), date.getMinutes()]; 
//   let currentTime = `${hours}:${mins}`; //still printing out the seconds
//   console.log(`${this.prefix} ${currentTime}`);
//   if (currentTime === this.wakeupTime) {
    
//     this.stop();
//   }
// }
// }

// 9)
// a) 
/*Create a promise-based alternative randomDelay() that delays execution for a
random amount of time (between 1 and 20 seconds) and returns a promise we can use
via .then(), as in the starter code below*/
//installed npm promise
// b) 
/*If the random delay is even, consider this a successful delay and resolve the promise,
and if the random number is odd, consider this a failure and reject it*/
function randomDelay() {
  let delay = Math.floor(Math.random() * 20) * 1000;
  return new Promise((resolve, reject) => {
            if (delay % 2 === 0) {
              setTimeout(() => resolve(delay), delay);
            } else {
              setTimeout(() => reject(delay), delay);
            }
          });
  }
//   randomDelay().then(() => console.log('There appears to have been a delay.'));

  // c) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
  // d)
//  randomDelay().then(delay => {
//   console.log(`There appears to have been a successful delay of ${delay} ms.`);
//   })
//   .catch(delay => {
//     console.log(`There appears to have been a failed delay of ${delay} ms.`);
//   });

//10)
//run 'npm init' and accept all the defaults
//run 'npm install node-fetch'
//add this line to package.json after line 5: "type": "module",
import fetch from 'node-fetch'
globalThis.fetch = fetch
function fetchURLData(url) {
let fetchPromise = fetch(url).then(response => {
if (response.status === 200) {
return response.json();
} else {
throw new Error(`Request failed with status ${response.status}`);
}

});
return fetchPromise;
}
fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
.then(data => console.log(data))
.catch(error => console.error(error.message));

// a) https://javascript.info/async-await
/* Write a new version of this function using async/await */
async function fetchURLDataAsync(url) {
      try {
        const response = await fetch(url);
    
        if (response.status === 200) {
          return await response.json();
        } else {
          throw new Error(`Request failed with status ${response.status}`);
        }
      } catch (error) {
        throw new error ('Error: ${error.message)');
      }
    }
  
    fetchURLDataAsync('https://jsonplaceholder.typicode.com/todos/1')
      .then(data => console.log(data))
      .catch(error => console.error(error.message));

// b)
/*Test both functions with valid and invalid URLs*/
fetchURLData('https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises')
  .then(data => console.log(data))
  .catch(error => console.error(error.message));

  fetchURLData('https://developer.mozilla.org/en-US/docs/Learn/JavaScript/abcdefg')
  .then(data => console.log(data))
  .catch(error => console.error(error.message));
