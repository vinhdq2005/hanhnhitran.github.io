// // QUADRATIC EQUATION


let root1, root2;
let a = prompt("first number")
let b = prompt("second number")
let c = prompt("third number")

let answer = b * b - 4 * a * c;
if (answer > 0){
    root1 = (-b + Math.sqrt(answer)) / (2 * a);
    root2 = (-b - Math.sqrt(answer)) / (2 * a);

    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

else if (answer == 0){
    root1 = root2 = -b / (2 * a);

    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}


else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    console.log(`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`)
}




// ----------------------------------------
// NUMBER IS ODD OR EVEN 

const number = prompt("enter number");

 if(number % 2 == 0){
     console.log("The number is even.");
 }

 else {
     console.log("The number is odd.");
 }


 // ----------------------------------------

// program to find the factors of an integer

// take input
const num = prompt('Enter a positive number: ');

console.log(`The factors of ${num} is:`);

// looping through 1 to num
for(let i = 1; i <= num; i++) {

    // check if number is a factor
    if(num % i == 0) {
        console.log(i);
    }
}


 // ----------------------------------------
 // program for a simple calculator

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);



// ----------------------------------------

// program that checks if the number is positive, negative or zero
// input from the user
const number = parseInt(prompt("Enter a number: "));

// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}

// check if number is 0
else if (number == 0) {
  console.log("The number is zero");
}

// if number is less than 0
else {
     console.log("The number is negative");
}



// ----------------------------------------

