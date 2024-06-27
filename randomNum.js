// create a function that generates a random number between a given range


function rand(min,max){
    let rondomNum = Math.floor( Math.random()*(max-min+1))+min;
    return rondomNum;
}

console.log(rand(50,100));