// 52. Program to check whether a given number is perfect or not.


// 1+2+4+7+14=28
// 6    =1+2+3

let num = 6;   //28
let temp =num;
 let sum=0;
 for(let i =1;i<=parseInt(num/2);i++){
    if(num%i==0)
    {
        // console.log(i);
       sum= sum+i;
    }
     }
    if(sum==num)
    {
        console.log("Perfect number")
    }else
    {
        console.log("Not perfect number")
    }
