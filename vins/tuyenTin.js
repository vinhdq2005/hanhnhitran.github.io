//Tinh S1
function countS1(n){
    let i = 2
    let result = 1
    while ( i <= n){
        let j = 1
        let denominator = 0
        while(j <= 1){
            denominator += j ** 2
            j ++
        }
        result += (-1) ** (i + 1) / denominator
        i++
    }
    return result
}

console.log(countS1(10))

//Tinh S2
function countS2(n){
    let i =1
    let result = 0
    while ( i <= n){
        let j = 1
        let denominator = 0

        denominator = i * 2
        result += (-1) ** (i + 1) / denominator
        i++
    }
    return result
}

console.log(countS2(2))



// print("enter N > 0: ")
 
// n = int(input())
// check = False
 
// for i in range(1, n + 1 ):
//     if (i**2 == n):
//         check = True
//         break
 
// if (check == True):
//     print(n, " là số chính phương")
// else:
//     print(n, " kphai số chính phương")


// def kiemtraHoanHao(n):
//     tong = 0
//     for i in range(1, n):
//         if (n % i) == 0:
//             tong += i
//     if tong == n:
//         return True
//     else:
//         return False


// n = int(input('enter N > 0: '))
// if kiemtraHoanHao(n):
//     print(n, ' la so hoan hao')
// else:
//     print(n, ' kphai so hoan hao')

