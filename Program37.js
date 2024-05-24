// 37. Program to accept a number and check the given number Armstrong or not

let n= 153;
let sum=0;
let c=n;
while(n>0){

var digit =n%10;
sum += digit**3;
n=parseInt(n/10);
}

if(sum==c){
    console.log("Armstrong Number")
}else{
    console.log("Not Armstrong")
}
