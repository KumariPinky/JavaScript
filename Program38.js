// 38. Program to accept a number and print the sum of given and Reverse number.

// let n=20;
// var rev(var n)
// {
// var r,rev=0,s;
// while(n>0)
// {
// r=n%10;
// rev=rev*10+r;
// n=n/10;
// }
// return rev;
// }
// var add( n,  a)
// {
//  return n+a;
// }

const a= 3483;
var n =0;
var t=0;
while(n<a.length){
    t+=Number(a[n])
        n++;
}
console.log("sum of digit of ",t);
