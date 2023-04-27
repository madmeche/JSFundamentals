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

/* (5)
let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
// a) console.log(fixedTwenty + fixedTen) //why is this not working? --> it combines the results of the two instead of adding the values
*/

// (6)
//unique(duplicatesArray)

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

let unique = [];
chars.forEach((c) => {
    if (!uniqueChars.includes(c)) {
        uniqueChars.push(c);
    }
});

console.log(uniqueChars);
// console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow',
// console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

