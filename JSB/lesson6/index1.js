// HW lesson 6
// bai 1
let arrFood = [];

let a = prompt("Apple")
arrFood.push(a)

let b = prompt("Banana")
arrFood.push(b)

let c = prompt("Rushberry")
arrFood.push(c)

console.log(arrFood);

// bai 2
let hocsinh = {
    name: "hanhnhitran",
    age: "18",
    class: "11a6",
    school: "Vinschool"
}


console.log(hocsinh.gifted);

hocsinh.gifted = "A1"
delete hocsinh.school

console.log(hocsinh);


// bai 3
for(let i=0; i<20; i++){
    console.log("hello");
}

for(let i=20; i<50; i++){
    console.log("hello");
}

for(let i=1; i<=5; i++){
    console.log("hello" + i);
}

for(let i=10; i<=30; i = i+2){
    console.log(i);
}





// LAB
//task 3
let myDog = {
    name: "Husky",
    friend: "everything"
}

console.log(myDog.name);
myDog.name = "Husky"

myDog.color = "Brown"
delete myDog.friend

console.log(myDog);



