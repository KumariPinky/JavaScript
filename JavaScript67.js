// Determine if the Array is sorted.

let arr = [2,4,6,8,10,12,14];

function sort(){

    
for(let i=1; i<arr.length; i++){
    if(arr[i] < arr[i-1]){
        return false;
        // console.log("array is not sorted")
    }
}
return true;
}

console.log(sort());

