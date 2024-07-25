// Activity 1: Function Declaration
// ⚫ Task 1: Write a function to check if a number is even or odd and log the result to the console.

 function findEvenOddNum(num){
    console.log(num%2===0 ?`${num} is even number`:`${num} is odd number`)
}
findEvenOddNum(20);

// ⚫ Task 2: Write a function to calculate the square of a number and return the result.

// function CalculateSquare(num){
//     let square = num * num
//     console.log(`${num} square is ${square}`)
//     return square;
// }
// CalculateSquare(2);

function CalculateSquare(num){
    return num * num
}

console.log(`5 square is ${CalculateSquare(5)}`)

// Activity 2: Function Expression
// ⚫ Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

const findLargestNumber = function(num1,num2){
    let max =num1>num2?num1:num2
    console.log(max)
}

findLargestNumber(60,30);


// ⚫ Task 4: Write a function expression to concatenate two strings and return the result.

const ConcateString=function(str1,str2){
   return str1 + str2
}

console.log(ConcateString("do"," task"))


// Activity 3: Arrow Functions
// ⚫ Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

const sumOfNum=(num1,num2)=>num1+num2;
console.log(sumOfNum(200,400))



// ⚫ Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

// using Index of Method
const findCharacterUsingIndexOf = (string,fC)=>string.indexOf(fC)!==-1?true:false;
console.log(findCharacterUsingIndexOf("Hello World","H"))
// using Includes  Method
const findCharacterUsingInclude = (string,fC)=>string.includes(fC)?true:false;
console.log(findCharacterUsingInclude("Hello World","H"))
// using Search  Method
const findCharacterUsingSearch = (string,fC)=>string.search(fC)!==-1?true:false;
console.log(findCharacterUsingInclude("Hello World","r"))



// Activity 4: Function Parameters and Default Values
// ⚫ Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

const defaultParameter = (p,dp=1)=>p * dp;
// using Default Parameter
console.log(defaultParameter(30))
// Pass both Parameter
console.log(defaultParameter(30,5))


// ⚫ Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age..

const greetings =(person,age=18)=>`welcome to karachi ${person}`
console.log(greetings("jawad"))



// Activity 5: Higher-Order Functions
// ⚫ Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.


function opreatmutlipe  (arr,opration){
    return arr.map(opration)
}

function square(num){
    return num * num
}

const number = [10,20,30,40,50,60]
const CalculateSquareOfArray=opreatmutlipe(number,square);
console.log(CalculateSquareOfArray);


function CallMultiple(fn,time){
        for (let i=1;i<=time;i++){
            fn();
        }
}
function wellcome(){
    console.log("hello!")
}
CallMultiple(wellcome,5)


// • Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function DoubleFucntion(fn1,fn2,v){
    // const double = 
    return fn2(fn1(v))
}

function add(v){
    return v + 5
}

function multiple(add){
    return add * 2
}


console.log(DoubleFucntion(add,multiple,5))


function StringManupluation(uppCase,excl,str){
        let toUpperCase = uppCase(str);
        return excl(toUpperCase)
}

function ConvertUppderCase(str){
    return str.toUpperCase();
}

function AddExclamationMark(toUpperCase){
    return `${toUpperCase} ! `
}

console.log(StringManupluation(ConvertUppderCase,AddExclamationMark,"hello"))


function ArrayManuplate (inc,double,arr){
    let Increament = arr.map(inc)
    return Increament.map(double)

}

function IncremetnInArray(item){
    return item + 1
}

function DoubleToArrayValue(item){
    return item * 2
}

let numbers =[1,2,3,4,5,6]
console.log(ArrayManuplate(IncremetnInArray,DoubleToArrayValue,numbers))