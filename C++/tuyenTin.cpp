// // #include<iostream>
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



// char hoten[30];
// char ngaysinh[9];

// char s[10] =  {'T', 'H', 'C','S', '', 'A', '\0'};
// char s[10] = "THCS A";

// // #include<iostream>
// using namespace std;

// int main(){
//     char arCh[50];
//     cout << "Input character sequences;";
//     cin >> arCh;
//     cout << "Character sequences recieved";
//     cout <<arCh;
//     system("pause");
// }


// //Ham strlen(s)
// //Trả về chiều dài chuỗi s
// char cLine[40] = "Have a nice day!";
// int iLenght;
// iLenght = strlen(cLine);


// //Ham strcat(s, t)
// //Nối chuỗi s2 vào cuối chuỗi s1.
// char str1[25] = "Hello";
// char str2[11] = "world";
// strcat(str1, str2); //Hello World


// int tg;
// for(int i = 0; i < n - 1; i++){
//     for(int j = i + 1; j < n; j++){
//         if(a[i] < a [j]{
//             tg = a[a];
//             a[i] = a[j];
//             a[j] = tg;
//         })
//     }
// }


// // #include <iostream>
// using namespace std;
 
// int main(){
//     int n;
//     do{
//         cin >> n;
//         if(n <= 0){
//             cout << "\nNhap lai n = ";
//         }
//     }while(n <= 0);
//     int sum = 0;
//     for(int i = 1;i <= n;i++){
//         if(n % i == 0){
//             sum += i;
//         }
//     }
//     cout << "\nSum = " << sum << '\n';
// }


// #include<iostream>
// using namespace std;
// int main(){
//     int L, R, i, tong;
//     cout <<" Hay nhap vao doan so nguyen duong L va R";
//     cin >> L>> R;
//     while(L <=R){
//         for (i=L; i<=R; i++)
//            for(j=1; j<=i; j++)
//               if(i%j==0)
//                 tong=tong+j;
//     }
// }