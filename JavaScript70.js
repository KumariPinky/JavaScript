// Implement linear search in an Array. 

let arr =[1,0,2,4,5,8,9,10,3,19,18];
let find = 5;
let pos =undefined;
for(let i =0; i < arr.length; i++){
    if(arr[i]==find){
        pos=i;
        break;
        
    }
}
console.log(pos);