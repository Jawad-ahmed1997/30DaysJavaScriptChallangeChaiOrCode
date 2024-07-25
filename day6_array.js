// Activity 1: Array Creation and Access
// ⚫ Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

let numberArray=[1,2,3,4,5]
console.log(numberArray);

// • Task 2: Access the first and last elements of the array and log them to the console.

console.log(numberArray[0])
console.log(numberArray[numberArray.length-1])


// Activity 2: Array Methods (Basic)
// Task 3: Use the push method to add a new number to the end of the array and log the updated array.

numberArray.push(6)
console.log(numberArray)

// • Task 4: Use the pop method to remove the last element from the array and log the updated array.
numberArray.pop()
console.log(numberArray)

// Task 5: Use the shift method to remove the first element from the array and log the updated array.

numberArray.shift()
console.log(numberArray)

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

numberArray.unshift(1)
console.log(numberArray)

// Activity 3: Array Methods (Intermediate)
// Task 7: Use the map method to create a new array where each number is doubled and log the new array.

let MapArray = numberArray.map((item)=>(item*2))
console.log(MapArray);

// • Task 8: Use the filter method to create a new array with only even numbers and log the new array.

let EvenArray = numberArray.filter(item=>(item%2===0))
let OddArry = numberArray.filter(item=>(item%2===1))
console.log(EvenArray)
console.log(OddArry)

// • Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let newArray=[10,20,30,40,50,60,70,80]
let sumOfArry =newArray.reduce((acc,curr)=>acc+curr)
console.log("sum of Arrry",sumOfArry)


// Activity 4: Array Iteration
// Task 10: Use a for loop to iterate over the array and log each element to the console.

let arr = [100,200,300,400,500,600,700,800]
for (let i=0;i<arr.length;i++){
    console.log(arr[i])
}

// • Task 11: Use the forEach method to iterate over the array and log each element to the console.
arr.forEach(item=>{
    console.log(item)
})


// Activity 5: Multi-dimensional Arrays
// ⚫ Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

console.log(matrix)
console.log(matrix[0][0])

// • Task 13: Access and log a specific element from the two-dimensional array.
console.log(matrix[1][0])
console.log(matrix[2][0])