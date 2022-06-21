// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:
// Using given variables
// Declare a function called stringCombo
// Set parameters (string1, string2)
// Use conditional statement to compare passed in strings
  // if string1 is greater than string 2 -- we will return string1
  // use else or else if to evaluate the opposite and return the other string

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"

// Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"

// const stringCombo = (string1, string2) => {
//   if(string1.length > string2.length) {
//     return string1
//   } else if(string1.length < string2.length) {
//     return string2
//   } else {
//     return "Oops, neither are greater"
//   }
// }

// console.log(stringCombo(fruit1, fruit2)) // banana
// console.log(stringCombo(fruit3, fruit4)) // cherry


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code:

//Create a conditional statement (using if and else if)
//Declare a function called boilOver : assign (boiling) as the temperature (parameter) being tested whether it is boiling.
//Returning whether it is below, at, or above boiling point.
//Using the given test variables.

const temp1 = 42
const temp2 = 350
const temp3 = 212

const boilOver = (boiling) => {
    if(boiling < 212) {
        return `${boiling} is below boiling point`
    } else if(boiling === 212) {
        return `${boiling} is at boiling point`
    } else if(boiling > 212) {
        return `${boiling} is above boiling point`
    }
}

console.log(boilOver(temp1)) // 42 is below boiling point
console.log(boilOver(temp2)) // 350 is above boiling point
console.log(boilOver(temp3)) // 212 is at boiling

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code:
/* First I want to use the built in method of .concat in order to combine the two arrays.
/ Then I will return the combined arrays.
/ Declare another variable (combo) of the two combined given arrays.
/ Lastly, I will call on the .length built in method to return the expected output.
*/

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

// console.log(myNumbers1.concat(myNumbers2))

let combo = myNumbers1.concat(myNumbers2)

console.log(combo.length) // 10

 
// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 atleD"

// Pseudo code:
/* The first step is to take the given variable that is a string, and turn it into an array.
/ I will declare a new variable named 'stringToArray' to introduce the new array.
/ Using .split() method.
/ Then I want to declare another new variable called 'mixem'.
/ To reverse the array I will use the .reverse() method.
/ After I reversed the array, I will bring it back to a string using the .join() method.
*/

const currentCohort = "Delta 2022"

let stringToArray = currentCohort.split("")
let mixem = stringToArray.reverse()
let backTogether = mixem.join("")

// console.log(stringToArray)
// console.log(mixem)
console.log(backTogether) // output: 2202 atleD


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code:
/* First I will make a loop for this function.
/ Then I want to assign the indexes their values.
/ Giving if a function to use modulo to return odd numbers as 'odd'.
/ Then giving the else if function to use modulo to return even numbers as 'even'.
/ Using the declared test variables given.
*/

const myArray = [13, 34, 5, 10, 27, 42] 

for(let i = 0; i < myArray.length; i++) {
  if(myArray [i] % 2 === 1) {
    console.log("odd")
  } else if(myArray [i] % 2 === 0){
    console.log("even")
  }
} //"odd" "even" "odd" "even" "odd" "even"


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code:
/* I will declare my new function as 'sub'.
/ Assigning one parameter as 'biggerNum' and the other as 'smallerNum'.
/ I want it to return the value of 'biggerNum' minus 'smallerNum'.
/ When called on 'sub' will conatain the two numbers from the given test variables in it's parameters.
/ And it will return the difference between them.
*/

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

const sub = (biggerNum, smallerNum) => {
  return biggerNum - smallerNum
}

console.log(sub(100, 58)) // 42
console.log(sub(27, 24)) // 3