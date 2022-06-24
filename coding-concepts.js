// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: 
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer:
// The (.length) will return the length of the strings characters. i.e -> 10
// b) Verify and explain:
// It did return the number of characters in the given variable 'cohort' string. It includes the space and counts every letter within the ("") string.


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: 
// This will return the variable 'greeting's 4th index value. (o) will be the output of the console.log().
// b) Verify and explain:
// The return was (o) because [4] is the 4th index value in the string "Hello World". Index values start from index 0 therefore, when there is a number within the brackets it will return that indexes value. This method uses bracket notation.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer:
// I believe this will return the first index of the variable 'languages' array because 'index' is a declared variable with a value of 1. Like the previous question, this one will use bracket notation in another form by using a declared variable with the value of 1 to input in the [] brackets.
// b) Verify and explain:
// The string "Ruby" was given because "Ruby" is at the first index. When the value of that index is a string, the return is the string that is at that index.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer:
// The (.toUpperCase()) will return the given variable 'weekendDays' strings to uppercase letters. (i.e ["SATURDAY", "SUNDAY"])
// b) Verify and explain:
// An error message was returned because (.toUpperCase()) is not a function. After I researched the reason, I understand now that .toUpperCase() is for parameters set with () parentheses and the above is given a variable 'weekendDays' with an array of two strings within brackets. An error message is shown because, in this example the string is located in an array when the method is using () parentheses.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)
// console.log(typeof dataTypes)

// a) Your answer:
// I am not sure at the moment what the 'typeof' function will return.
// b) Verify and explain:
// After running the code, the return was 'number'. I searched for what 'typeof' is and how it works. This is my understanding of it: 'typeof' is an operator that can return "what", in terms of the given variable or information you give it, something is. For example, when you request the 'typeof' an array - it will return "object". However, in this example it returned 'number' because the (.length) method gave it the number within the array and not that the array is an 'object'.
