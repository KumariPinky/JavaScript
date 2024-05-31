// 65. Program to check whether a given number is Armstrong or not.


var number =153;
var c = number;
var sum=0;
while(c>0){           //153
var rem =c%10         //152%10=3
sum = sum+(rem*rem*rem);    //27
c = parseInt( c/10);            //15
// console.log(c);
}
if(sum==number){
    console.log("Armstrong number");
}else{
    console.log("Not Armstrong number");
}