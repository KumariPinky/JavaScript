// 8. Program to accept a three digit number and print the sum of individual digits.

var a,b,c,n, sum=0;
n=234;
a=n/100;
b=( (n%100)/10);
c=n%10;
sum=a+b+c;
console.log (" Sum of Individual Digits of Given Numbers is", sum);
