// 18. Program to print numerical diamond.

/*  Author Pinky Kumari 
 Date -23-05-2024*/

var i,j,l,n,s,k=40;
for(i=1;i<=9;i+=2)
{
for(l=1;l<=k;l++)
console.log(" ");
for(j=1;j<=i;j++)
console.log("\n");
k=k-2;
}
k=k+4;
for(n=7;n>=1;n-=2)
{
for(i=1;i<=k;i++)
console.log(" ");
for(s=1;s<n;s++)
console.log("%d",s);
console.log("\n");
k=k+2;
}
