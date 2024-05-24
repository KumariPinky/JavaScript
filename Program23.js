// 23. Program to print smallest of four no by using ternary operators


var a= 3;
var b= 9;
var c= 6;
var d= 1;
var big=(a<b)?(a<c)?(a<d)?a:d:(c<d)?c:d:(b<c)?(b<d)?b:d:(c<d)?c:d;
console.log(big);