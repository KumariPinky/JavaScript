// 32. Program to accept a string and count no of capital letters, no. of small letters and no. of special characters 


let str = "Pi*nk%yKuM$a#RI@MhETA!!";
var lower=0;
var lower=0;
var special=0;
for (var i =0;i<str.length;i++){
    if(str[i]>=65 && str[i]<=90){
         upper++;
         console.log(upper)
    }else if(str[i]>=97&& str[i]<=122){
        lower ++;
        console.log(lower)
    }
    else if(str[i]>=33&& str[i]<=47){
       special ++;
         console.log(special)
    }
    else{
        console.log("Digit")
    }
}
