/* (1)
let ucFirstLetters = 'los angeles';
//create array form string using split()
let makeArray = ucFirstLetters.split(" ");
//iterate over the array
for (let i = 0; i < makeArray.length; i++){
//convert first letter to uppercase
makeArray[i] = makeArray[i][0].toUpperCase() + makeArray[i].substring(1);
}
console.log(makeArray.join(' '))
*/

/* (2)
function truncate(str, max){
    if (str.length > 34) {
        return str.slice(0, 34) + "...";
    } else {
        return str;
    }
}

truncate(str.length > 34) ?  str.slice(0, 34) + "...": str

console.log(truncate("If this sentence goes on too long you will not see it."))
console.log(truncate("This one is shorter."))

var truncate = function(str, length){
    var test = str.length > 34 ? '...' : '';
    return str.substring(0, 34) + "...";
  };

  console.log(truncate("If this sentence goes on too long you will not see it."))
  console.log(truncate("This one is shorter."))
*/

/* (3)
const animals = ['Tiger', 'Giraffe']
animals.push("Antelope", "Orangutan")
animals.unshift("Alligator", "Wildabeast")
list = animals.sort((a,b) => a.localeCompare(b))

var replaceMiddleAnimal = animals.indexOf("Giraffe");
animals[replaceMiddleAnimal] = "Corgi"

function findMatchingAnimals(beginsWith){
    let x = beginsWith.toLowerCase();
    let newAnimals=[];

    for (let i = 0; i < animals.length;i++){

        let currAnimal=animals[i].toLowerCase();
        
        if (currAnimal.includes(x)){
            newAnimals.push(animals[i]);
        }
    }
    newAnimals.sort();
    return newAnimals;
}

console.log(findMatchingAnimals("e"));

console.log(list)
*/

/*(4)
// console.log(camelCase('margin-left')) // marginLeft
// console.log(camelCase('background-image')) // backgroundImage
// console.log(camelCase('display')) // display

function camelCase(cssProp){
    if (cssProp.includes("-")){
        let current=cssProp.split("-");
        for (let i=1; i<current.length;i++){
            current[i]=current[i][0].toUpperCase()+current[i].substring(1);
        }

        return current.join("");
        
    }
    else{
        return cssProp;
    }
}

let prop1 = "margin-left";
let prop2 = "background-image"
let prop3 = "display"
console.log(camelCase(prop1));
console.log(camelCase(prop2));
console.log(camelCase(prop3));

function camelCase_2(cssProp){
    let current=cssProp.split("-");
        for (let i=1; i<current.length;i++){
            current[i]=current[i][0].toUpperCase()+current[i].substring(1);
        }

        return current.join("");
}

console.log(camelCase_2(prop1));
console.log(camelCase_2(prop2));
console.log(camelCase_2(prop3));
*/

// (5)
// let twentyCents = 0.20
// let tenCents = 0.10
// // console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// // 0.2 + 0.1 = 0.30000000000000004
// let fixedTwenty = twentyCents.toFixed(2);
// let fixedTen = tenCents.toFixed(2);
// //a)
// // console.log(fixedTwenty + fixedTen) //why is this not working? --> it combines the results of the two instead of adding the values
// //b)

// function currencyAddition(float1, float2) {
//     sum = float1 + float2
//     return sum.toFixed(2)
// }

// console.log(currencyAddition(.263,.1485))
// // //c)
// function currencyOperation(float1, float2, operation, numDecimals) {
//   switch (operation) {
//     case "+":
//       result = float1 + float2
//       break;
//     case "-":
//       result = float1 - float2
//       break;
//     case "*":
//       result= float1 * float2
//       break;
//     case "/":
//       result = float1 / float2
//       break;
//   }
//   return result.toFixed(numDecimals)
// }
// console.log(currencyOperation(1.7, 25.03, '-', 4 ))

/* (6)
const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

function unique(duplicatesArray) {
    let dupes = new Set(duplicatesArray)
    return dupes
}
console.log(unique(colours))
console.log(unique(testScores))
*/

// // // (7)
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

//a)
// function getBookTitle(bookId) {
//     return books.find(book => bookId === book.id)
// }
// console.log(getBookTitle(1))

//b)
// function getOldBooks(){
//     return books.filter(book => book.year <1950)

// }
// console.log(getOldBooks())

//c)
// function addGenre(){
//     return books.map(book => ({...book, Genre: 'Classic' }))
// }
// console.log(addGenre())
//d)
// function getTitles(authorInitial){
//     let newBooks = books.filter(book => book.author === authorInitial)
//     return newBooks.map(book => book.author === authorInitial);
// }
// console.log(getTitles('f'))

//e)
// function latestBook() {
//   let latest = books[0];
//   books.forEach((book) => {
//     if (book.year > latest.year) { //most recent, so new function
//       latest = book;
//     }
//   });
//   return latest;
// }

// console.log(latestBook()); //Revisit

//8)
// const phoneBookABC = new Map(); //an empty map to begin with
// phoneBookABC.set("Annabelle", "0412312343");
// phoneBookABC.set("Barry", "0433221117");
// phoneBookABC.set("Caroline", "0455221182");

// // console.log(phoneBookABC)
// //a)
// const phoneBookDEF = new Map();
// phoneBookDEF.set("Daniel", "31544568762");
// phoneBookDEF.set("Eve", "0654567891");
// phoneBookDEF.set("Francis", "0756321789");

//b)
// console.log(phoneBookABC,phoneBookDEF)

//c)
// phoneBookABC.set("Caroline",'0563578924')
// console.log(phoneBookABC)

//d)
// function printPhoneBook(contacts){
//   console.log(phoneBookABC,phoneBookDEF)
//     }
// printPhoneBook()

// printPhoneBook(phoneBookABC,phoneBookDEF)
// //  //e)
// function printPhoneBook(name, phone) {
//   const phonebook = new Map([...name, ...phone]);
//   return phonebook;
// }
// console.log(printPhoneBook(phoneBookABC, phoneBookDEF));

// //f)
// function display(name,phone){
//     let allBook = printPhoneBook(name,phone);

//     for (let x of allBook.keys()){
//         console.log(x);
//     }

// }

// display(phoneBookABC,phoneBookDEF); // review --> combining them with writing both

//9)
// let salaries = {
//   Timothy: 35000,
//   David: 25000,
//   Mary: 55000,
//   Christina: 75000,
//   James: 43000,
// };

// //a)
// function sumSalaries(salaries) {
//   let total = 0;
//   for (let key in salaries) {
//     total += salaries[key];
//   }
//   return total;
// }

// console.log(sumSalaries(salaries));

//b)
// function topEarner(salaries) {
//   let max = 0;
//   let maxKey = {};                 //stores keyname:value
//   for (let key in salaries) {
//     if (salaries[key] > max) {    //  creating a loop if the key within salaries
//         max = salaries[key];      //is greater than the first value, that becomes the max value (it finishes going through the loop (list))
//         maxKey = key;            // then recognizes it as the keyname :value, the returns the 'key' which is the first name
//         }
//     }
//     return maxKey
//   }

// console.log(topEarner(salaries))

//10)
const today = new Date();
// console.log('Current time is ' + today.toLocaleTimeString())
// console.log(today.getHours() + ' hours have passed so far today')
// //a)
// console.log(today.getHours()*60 + today.getMinutes() + ' minutes have passed today.')
// //b)
// console.log(today.getHours()*3600 + ' seconds have passed today.')
// //c)
// function birthday() {
//   let startDate = "1990-03-27";
//   let bDay = new Date(startDate);
//   let year = today.getFullYear() - bDay.getFullYear();
//   let month = today.getMonth() - bDay.getMonth();
//   let days = today.getDay() - bDay.getDay();
//   console.log(
//     "I am " + year + "years " + month + " months, and " + days + " days old."
//   );
// }

// birthday()      // don't forget to call out today from above when running

//d)
// function daysInBetween(date1, date2) {
//     date1= new Date("2019-06-29") ;
//     date2= new Date("2019-06-30");

//    let difference = date2.getDate() - date1.getDate();
// //    let daysDiff = difference * 
// console.log(difference.getDay)

// }
// console.log(daysInBetween("2019-06-29","2019-07-29"))