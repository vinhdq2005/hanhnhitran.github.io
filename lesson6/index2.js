// Bai1: viết 1 hàm truyền vào 1 số nguyên dương n. Viết hàm tính n giai thừa (n!). 
function factorial(n){
    let num = prompt("Nhap so bat ki");
    let factorialResult = 1;
    for (let i = 1; i <= num; i++){
        factorialResult *= i;
    }
    console.log(`n ${i}`);
}