let arry = ["pinky", "rinky", "pooja", "nitesh"];

// arry[0] ="mehta";
// console.log(arry);

console.log(arry.join(" "));          //join
console.log(arry);
console.log(arry.indexOf("rinky"));    //indexof

let newarray = ["sweet", "chaat", "panipuri","momes"]

console.log(arry.concat(newarray));    //concat
console.log(newarray.length);          //length
console.log(newarray.push("bhallay"));  //return new length of array
console.log(newarray.length);
console.log(newarray.pop);              //delete one element at last

let booleanType = true;
let stringType = "true";
console.log(typeof booleanType, typeof stringType);

let email ="pinkymehta1310@gmail.com";
console.log(email.includes(1310));

let num = 23;
console.log(num == "23");
console.log(num ===  "24");
console.log(num != 234);
console.log(num<10);

console.log("***********************************************");

for(let i=0; i<arry.length; i++){
    console.log(arry[i]);
}

//while loop
let i =0;
while(i<arry.length){
    console.log(arry[i]);
    i++;
}
//do while loop
let j =0;
do{
    console.log(arry[j]);
    j++;
}while(j<arry.length)