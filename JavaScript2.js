// you are required to implement a function generate hash that generated a hash tag from a given input string 


const generateHash =(str)=>{
    if(str.length > 280 || str.trim().length===0){
        return false;
    }
str = str.split(" ");
 str =str.map((current)=> 
    // current.replace(current[0],current[0].toupperCase())
 current.charAt(0).toUpperCase()+ current.slice(1)
 );
 str =`#${str.join("")}`;
 console.log(str);
 return str;
};

console.log(generateHash("my name is pinky kumari"))