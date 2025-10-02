import 'dart:io';

import 'package:path/path.dart'; 
// QUESTION 1:
//   void main() {  
// List <int> A=[1,2,3];
// List <int> B=[4,5,6];
// var newList=[...A,...B];
// print(newList);
//} 
//QUESTION 2:
// List<int> combineLists(List<int>? list1, List<int>? list2) {  
// return [...?list1, ...?list2];  
// } 
// void main(){
//   List <int>? L1=[1,2,3];
//   List <int>? L2=[5,6,7];
//   List <int>? L3=[4,5,6];
//   List <int>? L4=null;
//   List <int>? L5=[8,9];
//   print('combining list 1 and list 2:${combineLists(L1,L2)}');
//   print('combining list 2 and list 3:${combineLists(L2,L3)}');
//   print('combining list 3 and list 4:${combineLists(L3,L4)}');
// }
// QUESTION 3:
// void main()
// {
// Map<String,String> map1={'county':'us','money':'220'};
// Map<String,String> map2={'name':'Aneeza','age':'23'};
// Map<String,String> combineMap={...map1,...map2};
// print('Combined map: $combineMap');
// }
// QUESTION 4:
//    void main() {  
// List <int> A=[1,2,3];
// List <int> B=[4,5,6];
// var newList=[0,...A,...B,9];
// print(newList);}
// QUESTION 5:
// List<List<int>> nestedList = [[1, 2], [3, 4], [5, 6]];  
// // a single list: [1, 2, 3, 4, 5, 6] } 
// List<int> flattenList(List<List<int>> nestedList) {   
// return [for (var sublist in nestedList) ...sublist];  
// }  
// void main(){
// List<List<int>> combinelist=[[1,2,3],[4,5,6],[7,8,9]];
// List<int> flatList = flattenList(nestedList);   
// print('Flattened list: $flatList');  
// } 
// QUESTION:6
// bool discountapplied=true;
// void main(){
// List<String> l1=['banana','apple','mango'];
// bool discountapplied=true;
// List<String> finalCart = [  
// ...l1,if (discountapplied) 'Coupon Discount'];  
// print('Final shopping cart: $finalCart');  
// }

//QUESTION:7 
// void main() { 
//   List<int> evenNumbers = [for (var i = 1; i <= 10; i++) if (i % 2 == 0) i ];   
//   print('List of even numbers: $evenNumbers');  
// }  
  // QUESTION:8
//   void main(){
//     void main() { 
//   Map<String, double> productPrices = {'Laptop': 1000.0,'Smartphone': 800.0,'Tablet': 500.0 };  
//   bool applyDiscount = true; 
//   double totalPrice = productPrices.values.reduce((a, b) => a + b);  
//   Map<String, double> finalPrices = {...productPrices,if (applyDiscount) 'Discount': totalPrice * 0.10 };  
//   print('Final prices: $finalPrices');  
// } 
//   }
// question 10
// bool likepink=true;
// void main(){
//   Set<String> colors={'blue','black','yellow'};
//   bool likepink=false;
//   Set<String> finalcolor={...colors,if(likepink)'pink'};
// print('final color:$finalcolor');
// }
// question 11
// void main(){
// List<int> fibonacci=[0,1];
// print(fibonacci[0]);
// for(int i=2;i<10;i++){
//   fibonacci.add(fibonacci[i-1]+fibonacci[i-2]);
// }
// List<int>filteredfib=[for(var num in fibonacci)if (num>10)num];
// print('First 10 Fibonacci numbers: $fibonacci');  
// print('Fibonacci numbers greater than 10: $filteredfib'); 
// }
// // question 12
// void checkEvenOrOdd(int number) {  
// if (number % 2 == 0) { print('Even'); } 
// else {print('Odd'); }  
// }  
// void main() {  
// checkEvenOrOdd(2);   
// checkEvenOrOdd(8);  
// checkEvenOrOdd(10);  
// checkEvenOrOdd(34); 
// checkEvenOrOdd(96); 
// } 
// void main(){
//   List<int> L1=[for(int i=1;i<=5;i++)i*2];
//   print(L1);
// }
