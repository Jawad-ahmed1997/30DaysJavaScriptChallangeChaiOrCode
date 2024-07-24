// Activity 1: If-Else Statements
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let number = -100

if(number >0){
    console.log(number + " number is positive")
}
else if (number < 0){
    console.log(number + "is Negative ")
}
else {
    console.log(number + "is equal to zero")
}

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let age = 18

if(age >= 18){
    console.log("you are eligible for vote")
}
else{
    console.log("you are not eligible for vote")
}


// Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let num1 = 500
let num2 = 400
let num3 = 300
let largest;

if(num1 >= num2){
    if(num1>=num3){
        largest = num1
    }else{
        largest = num3
    }
}
else {
    if(num2>=num3){
        largest=num2
    }else{
        largest=num3
    }
}
console.log(largest)

// Activity 3: Switch Case
// ⚫ Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let day;

switch (new Date().getDay()){
    case  0 : day  = "sunday" ; break
    case  1 : day  = "monday" ; break
    case  2 : day  = "tuesday" ; break
    case  3 : day  = "wednesday" ; break
    case  4 : day  = "thursday" ; break
    case  5 : day  = "friday" ; break
    case  6 : day  = "saturday" ; break
}

console.log(`today is ${day}` )

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

let grade ;
let score = 39

switch (true){
    case (score>=80) : grade = "A+" ; break
    case (score>=70) : grade = "A" ; break
    case (score>=60) : grade = "B" ; break
    case (score>=50) : grade = "C" ; break
    case (score>=40) : grade = "D" ; break
    default : grade = "F"
}
console.log(grade)

// Activity 4: Conditional (Ternary) Operator
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let num = 24;

let checkNumber = (num % 2 === 0)   ? `${num} is even Number` : `${num} is odd number`

console.log(checkNumber);


// Activity 5: Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2024
let leapYear;

if ((year%4===0&&year%100 !==0) || (year % 400 === 0)){
    leapYear = true
}
else{
    leapYear = false
}

if( leapYear ){
    console.log(`${year} IS LEAP YEAR`)
}
else{
    console.log(`${year} is not leap year`)
}