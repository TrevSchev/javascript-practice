


// alert("it works")

// Case sensitivity - certain script requires the case 
// Semicolons - acts as a period at the end of a sentence. recomended in best practices 

// console.log("hello there");

// console.log("another log that will show up in the console on the browser that you can find when you inspect a page");

// Data Types (Categories) (Category Types)

/* 
PRIMITIVES:
- Numbers - all numbers i.e. 5, 2.5, 0, -8, 1244.34, NaN, Infinity

- Strings - text, word, sentences, think of a necklace that strings letters together to make a work.
    express strings with any of the following 3 options:
    -"" double quotes
    -'' single quotes
    -`` backticks

- Boolean - true and false i.e. (yes and no) (on and off) (1 and 0)

- Null - only has null itself (nothingness)

- Undefined - like a placeholder to be discovered ex) like how we know aliens or something is out there, but we don't know what it is. It is undefined.

- Symbol - a unique value that gets for you

COMPLEX
- array - a list of primitives
- object - a structure that allows you to describe an "object" and describe the actions that the "object" can do.

*/

//this is a single line comment

/* this is a
multi-line
comment in javascript*/

// console.log("Name: Trevor Scheving")
// console.log("Favorite food: Shrimp")


//Boolean
true;
false;

//Number
1;
2;
92789123478;
-1278639128673;
Infinity;
-Infinity;
NaN; //Not a Number

//String
"words";
'numbers';
"knascjbn";
""; //empty string
"anything wrapped just in quotes"

//Undefined 
undefined;

//Null
null;

//Big Int
45n;
345n;

//Symbol: nothing of the same value can exist
Symbol("some label")
Symbol("another label")

Symbol() //unique
Symbol() //also unique

//Operators
/*

 + (if with numbers then it adds) (if with strings then it combines "concatenates")

 / 
 %
-
typeof

1. unary operator (operate on 1 thing)
2. binary operator (operates on 2 things)

 */

/*will show in console on browser the type of thing it is. this is a string
console.log(typeof "who doesn't love pizza?");*/

// Daily Challenge day-2
/*console.log("Supercalifragilisticexpialidocious".length);
console.log(355);
console.log(typeof 355);

console.log(235n);
console.log(typeof 235n);*/
// End of Daily Challenge


//Take-Home day2
/*let adj1 = "charming";
let adj2 = "beautiful";
let adj3 = "cruel";
let adj4 = "graceful";
let adj5 = "clumsy";
let adj6 = "charismatic";
let adverb = "warmly";
let color = "black";
let noun1 = "Texas";
let noun2 = "cat";
let noun3 = "tree";
let noun4 = "park";
let noun5 = "cheese";
let noun6 = "drink";
let num = "eleventy one";
let pnoun1 = "her";

let story = `It has often been said that a dog is a man's best ${noun1}. Dogs are very ${adj1} and can be taught many ${adj2}
tricks. A dog can be trained to carry a ${noun2} in his mouth.
If you throw his ${noun3}, he will run and fetch it. Dogs
will also bark ${adverb} if someone tries to break into your
${noun4} during the night. One of the most popular canine pets
today is the ${noun5} Spaniel. Spaniels have curly ${color}
coats and ${adj3} ears. They also have very ${adj4}
dispositions and live to be ${num} years old. Other popular dogs
are ${adj5} Terriers, German ${pnoun1}, and the
${adj6} Poodle. Every ${noun6} should have a loyal dog.`;

console.log(story);*/
//End of Take-Home day2

//Daily Challenge day3
    // CHALLENGE 1 - Prompt User, Store input, Reverse input, Alert reversed string
    /*const firstName = prompt("what is your first name?");
        console.log(firstName);
    const splitArray = firstName.split("");
    const reversedArray = splitArray.reverse();
    const reversedString = reversedArray.join("");
        console.log(firstName.split("").reverse().join(""))
    alert(firstName.split("").reverse().join(""))*/

    // Challenge 2 - Prompt for 2 nummbers, convert prompt to integers, alert added inputs
    /*const number1 = prompt("pick a number", "10");
    const number2 = prompt("pick another number", "10");
    const convert1 = parseInt(number1);
    const convert2 = parseInt(number2);
        console.log(convert1);
        console.log(convert2);
    alert(convert1 + convert2);*/
//End of Daily Challenge day3

//Take-Home day3
    /*const firstName = prompt("what is your first name?");
        console.log(firstName);
    const lastName = prompt("what is your last name?");
    alert(lastName);*/
//BONUS
    /*const bday = prompt("when is your birthday?");
    confirm("Confirm your birthday");
    alert(bday);*/
//End Take-Home day3



