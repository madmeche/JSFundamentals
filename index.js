//1)
// "" + 1 + 0                            // 1
// "" - 1 + 0                            // -1
// true + false                          // false
// !true                                 // false
// 6 / "3"                               // 2
// "2" * "3"                             // 6
// 4 + 5 + "px"                          // 9px
// "$" + 4 + 5                           // $9
// "4" - 2                               // 2
// "4px" - 2                             // undefined
// " -9 " + 5                            // -95
// " -9 " - 5                            // -14
// null + 1                              // undefined
// undefined + 1                         // undefined
// undefined == null                     // undefined
// undefined === null                    // true
// " \t \n" - 2                          //
//                                       // -2

// console.log(" \t \n" - 2)

//2)
// let three = "3"
// let four = "4"
// let thirty = "30"
// //what is the value of the following expressions?
// let addition = three + four          //34 --> remove quotes
// let multiplication = three * four    //12
// let division = three / four          // .75
// let subtraction = three - four      //-1
// let lessThan1 = three < four        // NaN
// let lessThan2 = thirty < four       //NaN --> remove quotes

// console.log(lessThan2)

//3)
// if (0) console.log('#1 zero is true')        //will not print, no string

// if ("0") console.log('#2 zero is true')      //will print
// if (null) console.log('null is true')        //will print
// if (-1) console.log('negative is true')      //will print
// if (1) console.log('positive is true')       //will print

//4)
// let a = 2, b = 3;
// let result = `${a} + ${b} is `;
// if (a + b < 10) {
// result += 'less than 10';
// } else {
// result += 'greater than 10';
// }

// console.log(result)

// a + b < 10 ? console.log('less than 10') : console.log('greater than 10')
//the '=' recoginzes the condition, the '+' prints the 'result' in addition
// to the string

//5)
// var greeting = getGreeting('Callan')
// function getGreeting(name) {
//     return 'Hello ' + name + '!';
//     }
// console.log(greeting)

// const greeting = ("Callan") => return 'Hello ' + greeting + '!'

// console.log('Hello '+ greeting + '!')

//6)
const westley = {
  name: "Westley",
  numFingers: 5,
}
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
}
const inigo = {
  firstName: "Inigo",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase(person) {
    return "Nice to meet you.";
  },
};
inigo.greeting(westley);
inigo.greeting(rugen);
