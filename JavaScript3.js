// write a function called countChar that takes two parameter: a string and a character to 
// count the function should return the number of times the specified character appears in the string



const countChar = (word,char)=>{
word = word.toLowerCase();
char = char.toLowerCase();
totalCount = word.split("").reduce((accum,curChar)=>{
    if(curChar === char){
      accum++;
    }
    return accum;
}, 0);
return totalCount;
 };
 

console.log(countChar("MissIssippii","I"));      //output  : 5