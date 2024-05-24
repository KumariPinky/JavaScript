// 20. Program to print character diamond.

var i,j,n,r;
var s,sp=40;

for(i=65;i<=75;i+=2)
{
for(s=1;s<=sp;s++)
console.log(" ");
for(j=65;j<i;j++)
console.log("%c",j);
console.log("\n");
sp=sp-2;
}
sp=sp+4;
for(n=73;n>=65;n-=2)
{
for(s=1;s<=sp;s++)
console.log(" ");
for(r=65;r<=n;r++)
console.log("%c",r);
sp=sp+2;
}
