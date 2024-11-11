
// Declare a string variable that will be used for all examples
const str = "JavaScript is a versatile language.";
console.log("Initial String:", str);

// Use the split method to convert the string into an array of words
const words = str.split(" ");
console.log("Words:", words);

// Use the slice method to extract a part of the string
const part = str. slice(0, 13);
console.log("Part:", part);

// Use the concat method to join two strings
const newString = "I love to code in JavaScript";
const modifiedString = str.concat(" ", newString);
console.log("Modified String:", modifiedString);

// Replace a word in the string
const replacedStr = str.replace("versatile", "powerful");
console.log("Using replace():", replacedStr);

//Convert to Uppercase Using toUpperCase()
const upperCase = str.toUpperCase();
console.log("Using toUpperCase():", upperCase);

// Convert to Lowercase Using toLowerCase()
const lowerCase = str.toLowerCase();
console.log("Using toLowerCase():", lowerCase);

// Check if a string includes a specific word
const includesWord = str.includes("versatile");
console.log("Using includes():", includesWord);

//Find the Index of a Word Using indexOf()
const index = str.indexOf("versatile");
console.log("Using indexOf():", index);

//Remove Leading and Trailing Whitespace Using trim()
const strWithSpaces = "   Hello JavaScript!   ";
const trimmedStr = strWithSpaces.trim();
console.log("Using trim():", trimmedStr);

//Get a Character at a Specific Index Using charAt()
const charAtFive = str.charAt(5);
console.log("Using charAt():", charAtFive);

//Split a CSV String Using a Comma Delimiter
//split a CSV (Comma-Separated Values) string into an array using the split() method with a comma delimiter.
const csvData = "Apple, Banana, Orange";
const fruits = csvData.split(",");
console.log("Using split() with comma delimiter:", fruits);
