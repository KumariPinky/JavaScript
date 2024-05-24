// 22. Program to find biggest of four no by using ternary numbers


var a= 3;
var b= 9;
var c= 6;
var d= 1;
var big=(a>b)?(a>c)?(a>d)?a:d:(c>d)?c:d:(b>c)?(b>d)?b:d:(c>d)?c:d;
console.log(big);



// var a= 3;
// var b= 9;
// var c= 6;
// var d= 1;
// var largest=0;
// if(a>largest){
//     largest=a;
// }else if(b>largest){
//   largest=b;  
// }
// else if(c>largest){
//   largest=c;  
// }else if(d>largest){
//   largest=d;  
// }
// console.log(largest)