// function takes a string and returns the reversed version of it.

let str = "Hello my name is Pinky kumari";

// function revstr(str){
//   let a =str.split("").reverse();
//   return a;
// }
// console.log(revstr(str));


// write a function that check if a number is even or odd and return

// function oddeven(num){
// if(num%2==0){
//     return console.log("even number");
// }else{
//     return console.log("Odd number");
// }
// }
// oddeven(121);


// write a program that checks if a given year is a leap year

// let year = 2024;
// let arrow = (year) =>{
// if((year%4===0 && year%100 !=0) ||(year %400===0)){
//     return true;
// }else{
//     return false;
// }
// }
//  console.log(arrow(year)); 



// find the sum of all Element in an Array.

// let arr = [1,2,3,4,5,6,7,8,9];
// let sum1 =0;
// for(let i =0;i<arr.length;i++){
//      sum1+=arr[i];
// }
// console.log(sum1);

//create an object representing a car with properties like make ,
//  model and year. Add a method to the car object to start thr engine

let car= {
make:"Toyota",
model:"camry",
year:2000
}
console.log(car);
car.startEngine = function(){
    console.log("Engine start")
}
console.log(car.startEngine());


//change the text of a paragraph on a webpage using javascript.

//html
{/* <p id="meno">this is old text</p> */}
{/* <button onclick="arrow()"></button> */}
// let arrow = () =>{
//  document.getElementById("meno").innerHTML ="this is new text";

// }


//create a button dynamically and add it to the webpage;

