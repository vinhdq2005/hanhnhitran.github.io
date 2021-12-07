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
// STRING

const name = 'ram';
const name1 = 'hari';
const result = `The names are ${name} and ${name1}`;

// ----------------------------------------
// MATRIX

const array = [[2,0], [-1,3]]                 //Array
const matrix = math.matrix([[7,1], [-2,3]])   //Matrix


math.square(array)   //Array, [[4, 0], [1, 9]]
math.square(matrix)  //Matrix, [[49, 1], [4, 9]]

math.add(array, matrix)       //Matrix, [[9,1], [-3,6]]
math.multiply(array, matrix)  //Matrix, [[14,2], [-13,8]]

math.ones(2, 3)    // Matrix, [[1, 1, 1], [1, 1, 1]]


//-----------------------
 const a = math.matrix([1, 4, 9, 16, 25])  //Matrix, [1, 4, 9, 16, 25]
 math.sqrt(a)                              //Matrix, [1, 2, 3, 4, 5]
 
 const b = [1, 2, 3, 4, 5]        
 math.factorial(b)               //Array, [1, 2, 6, 24, 120]

 const c = [[2, 0], [-1, 3]]                //array
 const d = math.matrix([[7, 1], [-2, 3]])   //matrix
 math.multiply(c, d)                        //Matrix, [[14, 2],[-13, 8]]

 math.add(c, 2)              //array, [[4, 2], [1, 5]]

 math.det(c)               // 6
 math.det(d)               // 23



//----------------------------------------------

