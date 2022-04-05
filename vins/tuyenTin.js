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





