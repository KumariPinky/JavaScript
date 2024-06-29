// let name;           //variable declaration
// let name1 = "pinky mehta";     //assignment operator

// Number(1,1.2,3,4.5),string("pinky"),boolean(true,false),Object{1,2,3,4},
// array ([1,2,3]),
// undefine(let name),     if nothing is assigned - value is undefined
// null (let name =null);     null is also a special object
// console.log(name1);    //name1 is variable
// console.log("name");    //string quotes

// var  never use it (old StylePropertyMap,creates error) re-declare,re-assign,global scope
// let when you need to re-assign value, but not re-declare,block scope{}
// const when you never want to re-assign, also always initialised at declaration, block scope{}
// -> return value
// upperCamelCase  define variable

// string literal : style29TEMPLATE

// let title ="Ms";
// let names = "Pinky Mehta";
// console.log(`welcome ${title} ${names}`);

// // names[0]    //acces
// // names[4]

// let str = "hello world";
// console.log(str.length);    //length   11

// console.log(str.indexOf("o"));    //index find    4

//mutating  and non mutating
// mutating :changes variable which called it  eg: array.push
// non-mutating : doesn't changes the variable which called it   indexof()


//immutability of string
// var word= "Hello";       //can't change string eg word[0] ="B"
// console.log(word.includes("e"));          //true
// console.log(word.includes("z"));          //false
// console.log(word.trim());
// console.log(word.slice(1,3));     //1 is start index   3 is index (excluded)
// console.log(word.slice(1));
// console.log(word.slice(-1));      //at last index right to left

// let words = "hello world";
// console.log(word.split(" "));     //["hello", "world"]  convert into array
// console.log(words.split());       //["hello world"]
// console.log(words("e"));

// //typeof
// let age =20;      
// console.log(typeof(age));    //number

// let strs ="pinky";
// console.log(typeof(strs));     //string

// let address ={};
// let cities = [];
// console.log(typeof(address));    //object
// console.log(typeof(cities));     //array

// let numm ;      //undefined
let value = null;    //   object
console.log(typeof(value))
