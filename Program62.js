// 64. Program to print Armstrong number between 1-500.
let num,count=1,rem,sum;

while(count<=500)
    {
    num=count;
    sum=0;
    while(num)
    {
        rem = num%10;
        sum =sum+(rem*rem*rem);
        num = num/10;
    }
    if(count == sum){
        console.log("Armstrong\n", count);
    }
    count++;
}
return 0;
