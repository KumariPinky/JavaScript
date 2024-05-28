// 53. Program to check whether a given number is prime number.


// let num = prompt("Enter any number from user");
let primeNum = 7;
let count=0;
for(let i=1;i<=primeNum;i++){
if(primeNum%i==0 ){
    count = count+1;
}
}
if(count==2)
{
    console.log("Given number is prime number");
}else
{
console.log("Given number is not prime number")
}