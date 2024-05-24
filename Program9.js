// 9. Program to accept a number and check the given number is Armstrong or not.

var n = 534;
 var c= n;
      while(n>0) {
      var rem = n%10;
      var arm  =(rem*rem*rem)+arm;
      n=n/10;
       }
		if(c==arm) {
			System.out.println("Armstrong number");
		}else{
			System.out.println("Not armstrong number");
		}
