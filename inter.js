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
function latestBook() {
  let latest = books[0];
  books.forEach((book) => {
    if (book.year > latest.year) { //
      latest = book;
    }
  });
  return latest;
}

console.log(latestBook());
