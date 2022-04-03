let arr = [1,2,3,4,5,6,7,8]


let arr2 = [...arr,9,10]

console.log("arr2", arr2);

arr2[5] = 10

console.log("arr2 after change", arr2);
console.log("arr", arr);

let obj1 = {
    name: "Hanhnhi Tran",
    age: 17,
}


let obj2 ={
    age: 17,
    add: "HN",
}


let obj = {
    ...obj1,
    ...obj2
}

console.log(obj);

// let name = obj.name
// let age = obj.age
// let add = obj.add


let {name, age, add} = obj;

console.log(name);
console.log(age);
