// let num =5;


function factorial(num){
    if(num==1 ||num ==0){
    return 1
    }else{
        var fac =1;
     for(let i =1;i<=num;i++){
      fac =fac*i;
     }
    return fac;
    }

}
console.log(factorial(5));