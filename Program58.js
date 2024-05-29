// 58. Program to print prime number between 1-100



for(let i =1;i<=100;i++){
    var count =0;
    for(var j =2;j<=i/2;j++){
        if(i%j==0){
            count=1;
            break;
        }
    }
    if(count==0){
        console.log(i);
        // document.write(i+"<br>");
    }
}









