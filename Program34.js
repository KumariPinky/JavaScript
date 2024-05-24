// 34. Program to print prime numbers between 1 to 100


for(var i=1;i<=100;i++)
    {
        var flag=0;
    for(var j=2;j<i;j++)
        {
        if(i%j==0)
            {
            flag=1;
            break;
        }
    }
    if(flag==0)
    {
        console.log(i)
    }
  }
