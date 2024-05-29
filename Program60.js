// 60. Program to fibanocci of matrix



let i=0;
var num = 10;
var a=0;
var b = 1;
var sum = 1;
while(i <num){
    sum = a+b;
    a=b;
    b=sum;
    i++;
}
console.log(sum);
