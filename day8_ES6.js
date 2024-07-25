// Activity 1: Template Literals
// • Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let firstName ='jawad';
let age =36;

let person = `${firstName} ${age} `

console.log(person)

// • Task 2: Create a multi-line string using template literals and log it to the console.
let multiLineString = `here is roadmap of frontend?
-HTML
-CSS
-javascript
-React
Use freeCodeCamp to learn all the above and much, much more !
`
console.log(multiLineString)

// Activity 2: Destructuring
// • Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

let [a,b,...rest]=[1,2,3,4,5,6,7,8,9,10]
console.log(a,b)

// • Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

let book ={
    title:"atomic Habit",
    author:"josh mark",
    edition:2023
}

let {title,author,edition}=book
let {title:bookName,author:bookAuthor}=book
console.log(bookName,bookAuthor,edition)
console.log(title,author,edition)

// Activity 3: Spread and Rest Operators
// ⚫ Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

let oldArry=[101,102,103,104,105,106,107,108,109,110]
let newArray = [...oldArry,111,112,113,114,115]

console.log("oldArry",oldArry)
console.log("newArray",newArray)

// • Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
 function sum(...numbers){
    return numbers.reduce((acc,curr)=>acc+curr,0)
}
console.log(sum(100,99,85,75,65,55,45,35))

// Activity 4: Default Parameters
// • Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.


function parameters (p,pd=1){
    return p+pd
}
console.log(parameters(10))
console.log(parameters(10,20))


// Activity 5: Enhanced Object Literals
// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
// Task 9: Create an object with computed property names based on variables and log the object to the console.

let booktitle ='Atomic Habbit';
let BookAuthor = "josh mark";
let year = 2024;


let bookNew={
    booktitle,bookAuthor,year,greeting(){
        return ` ${this.booktitle} was written by ${this.bookAuthor} in {${this.year}}  `
    },
    ['details_'+year]:`Detail of this book released in ${year}`
}

console.log(bookNew)
console.log("greetings",bookNew.greeting())
console.log(bookNew['details_'+year])





