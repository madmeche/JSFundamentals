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

// function myStopFunction() {
//   clearTimeout(delayMsg, 120);

// setTimeout(delayMsg, 10000, "#5: Delayed by 10 seconds");
// }
// // is there a way to do this without adding it before the 10 second counter?

// 3)
function printMe() {
    console.log('printing debounced message')
    }
    // printMe = debounce(printMe); //create this debounce function for a)
    /*fire off 3 calls to printMe within 300ms - only the LAST one should print, after
    1000ms of no calls*/
    setTimeout( printMe, 100);
    setTimeout( printMe, 200);
    setTimeout( printMe, 300);
//a)
/*Create a debounce(func) decorator, which is a wrapper that takes a 
function func and suspends calls to func until there's 1000 milliseconds 
of inactivity. After this 1 second pause, the most recent call to 
func should be executed and any others ignored.*/

function debounce(func) {
    return function() {
        let bounceDelay = setTimeout
        setTimeout(func, 1000);  
    }
}
console.log(debounce(printMe))


  

