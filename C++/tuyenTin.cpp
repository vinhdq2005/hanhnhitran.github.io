// #include<iostream>
// using namespace std;
//  int main (){
//  	int A, B;
//  	cout << " ";
//  }


// #include <stdio.h>
// #include <conio.h>
// int Fibonacci(int n)({
// 	if(n == 1 || n == 2)
// 	return 1;
// 	return Fibonacci(n-1) + Fibonacci(n-2); 
// }
// int main(){
// 	int n;
// 	cout << "enter n: ";
// 	cin >> n;

//     cout << " num Fabonancci" << n << " is" << Fibonacci();
//     return 0;
// )}
	

 

// //  cho 1 so tnhien n >1 tim so nguyen to khong viet qua n trong cac truong hop sau
//  int main(){
// 	 int n;
// 	 cout << "\nhap n ="
// 	 cin >> n;
// 	 if(n < 2){
// 		 cout << n << "kphai so NT";
// 		 return 0;
// 	 }
// 	 int count = 0;
// 	 for(int i = 2; i <= sqrt(n); i++){
// 		 if(n % 1 == 0){
// 			 count++;
// 		 }
// 	 }
// 	 if(count == 0){
// 		 cout << n << "la so NT";
// 	 }else{
// 		 cout << n << "kphai so NT"
// 	 }
// }

// // // Tính S1
// function countS1(n) {
//     let i = 2 // Bắt đầu từ số thứ 2
// 	let result = 1 // Khởi tạo giá trị ban đầu là: 1/(1 mũ 2) = 1

// 	while (i <= n) {
// 		let j = 1
// 		let denominator = 0

// 		// Tính giá trị mẫu số
// 		while (j <= i) {
// 			denominator += j ** 2
// 			j++
// 		}

// 		// Cộng giá trị mỗi lần lặp vào kết quả theo công thức trong đề
// 		result += (-1) ** (i + 1) / denominator
// 		i++
// 	}

// 	return result
// }

// console.log(countS1(10)


// #------------------------

// Tính S2
// function countS2(n) {
// 	let i = 1 // Bắt đầu từ số thứ 1
// 	let result = 0 // Khởi tạo giá trị ban đầu là: 0

// 	while (i <= n) {
// 		let j = 1
// 		let denominator = 0

// 		// Tính giá trị mẫu số
// 		denominator = i * 2

// 		// Cộng giá trị mỗi lần lặp vào kết quả theo công thức trong đề
// 		result += (-1) ** (i + 1) / denominator
// 		i++
// 	}

// 	return result
// }

// console.log(countS2(2))


