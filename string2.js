//  Input :- go pageless by default
// Output - Go Pageless By Default

 const input = function(str){
    let aa = str.split(" "); 
    console.log(aa);
    for(let i =0;i<aa.length;i++){
   aa[i] = aa[i][0].toUpperCase() + aa[i].substring(1)
   console.log(aa[i]);
    }
 return aa.join(" ")
}
console.log(input("go pageless by default"));

