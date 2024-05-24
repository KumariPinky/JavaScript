// 24. Program to accept a year and check the given year is leap or not by using ternary


var y =2023;
leap=(y%400==0)?:(y%100!=0)?(y%4==0)?1:0:0;
// (year%400==0)?:(year%100!=0)?(year%4==0)?:1:0:0;
if(leap==1){
    console.log("Given year is leap year");
}else{
    console.log("Given is not leap year");
}