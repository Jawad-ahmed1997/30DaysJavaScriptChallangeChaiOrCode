// Activity 1: For Loop
// ⚫ Task 1: Write a program to print numbers from 1 to 10 using a for loop.


for (let i = 0;i <= 10;i++){
    console.log(i)
}

// • Task 2: Write a program to print the multiplication table of 5 using a for loop.

for(let i = 0;i<=10;i++){
    console.log(`${5} X ${i} = ${i * 5} `)
}

// Activity 2: While Loop
//⚫ Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let sum = 0
i = 0;
while(i<10){
    sum +=  i
    i++
    console.log(sum)
}



// Activity 3: Do...While Loop
// ⚫ Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.

{let text = ""
let i = 0;

do{
    text += i
    i++
}
while(i<6)

console.log(text)
}



// ⚫ Task 6: Write a program to calculate the factorial of a number using a do...while loop.

{
    let number = 5;
    let factorial = 1;
    let i = number
    do{
        factorial *= i
        console.log(factorial)
        i--
    }
    while (i >0)
        console.log(`Factorial of ${number} is ${factorial}`);
}


// Activity 4: Nested Loops
// • Task 7: Write a program to print a pattern using nested for loops:


for (let i =0;i<=5;i++){
    let line =''
    for (let j = 0 ; j<=i;j++ ){
        line += " *" ;
    }
    console.log(line)
}
// Activity 5: Loop Control Statements
// •Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for (i =0 ; i<=10;i++){
    if(i===5){continue}
    console.log(i)
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for (let i=0;i<=10;i++){
    if(i===7) break;
    console.log(i)
}