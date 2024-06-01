// write a function find longest word that takes a string as input and return the longest word 
// in the string if there are  multiple longest word written the first one encountered

const findLongestWord = (str)=>{
if(str.trim().length===0){
    return false
}
words = str.split(" ");
words = words.sort((a,b)=>b.length-a.length);
console.log(words);
return words[0];

// return words.reduce((a,b)=>(b.length > a.length ? b : a)," ");
};


console.log(findLongestWord("Hello this is Javascriptcode in My github account"));