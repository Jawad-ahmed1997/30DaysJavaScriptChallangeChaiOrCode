// Activity 1: Arithmetic Operations
// • Task 1: Write a program to add two numbers and log the result to the console.
const add  = 2+2
console.log("using add Operators : " , add);

// • Task 2: Write a program to subtract two numbers and log the result to the console.
const subtract = 2-1
console.log("using subtract Operators : " , subtract);

// • Task 3: Write a program to multiply two numbers and log the result to the console.
const multiply = 10*2
console.log("using multiply Operators : " , multiply);


// • Task 4: Write a program to divide two numbers and log the result to the console.
const divide = 10/2
console.log("using divide Operators : " , divide);


// • Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
const reminder = 10%2
console.log("using reminder Operators : " , reminder);



// Activity 2: Assignment Operators
// • Task 6: Use the += operator to add a number to a variable and log the result to the console.
let x = 10
 x += x
 console.log(x)


//  • Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
let y = 10
y -= 5
console.log(y)


// Activity 3: Comparison Operators
// • Task 8: Write a program to compare two numbers using > and < and log the result to the console.

let a =10
let b = 9

let lessThenB = a<b
console.log("check a is less then b :" ,lessThenB)

let Graterthen  = a>b
console.log("check a is grater then b :" ,Graterthen)


// • Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
let c = 10
let d = 20
let e = 20

let lessThenEqual = c <= d ;
console.log("Cheque c is less then equal to d:",lessThenEqual)


let GraterThenEqual = e >= d ;
console.log("Cheque e is grater then equal to d:",lessThenEqual)


// • Task 10: Write a program to compare two numbers using == and === and log the result to the console.

let f = 10
let g = "10"

let valueComparision = f == g;
console.log("check f and g value is equal ",valueComparision)


let valueWithTypeComparision = f === g;
console.log("check f and g value and type is equal ",valueWithTypeComparision);
console.log("type of f ",typeof f );
console.log("type of g ",typeof g );

// Activity 4: Logical Operators
// • Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

let EndOpreator = f == g && f===g
console.log("check Both conditions is true :" ,EndOpreator);


// • Task 12: Write a program that uses the II operator to combine two conditions and log the result to the console.
let OrOpreator = f == g || f===g;
console.log("check one conditions is true :" ,OrOpreator);

// • Task 13: Write a program that uses the operator to negate a condition and log the result to the console.
let negateCondition = f !== g
console.log("check negate opreator :" ,negateCondition);

// Activity 5: Ternary Operator
// • Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

let h = 10
let i = -20
let tornury = h >=0 ? "positive" :"Nagetive";
let tornury1 = i >=0 ? "positive value" :"Nagetive";
console.log("use tournary opreator for negative or possitive value :",tornury) 
console.log("use tournary opreator for negative or possitive value :",tornury1) 