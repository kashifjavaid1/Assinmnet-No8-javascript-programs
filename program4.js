function program3(a) {
    var a=+prompt("Enter user a Number");
    
    if (a%5==0) {
        console.log("Divided by 5");
    }
   else  if (a%11==0) {
        console.log("Divided by 11");
    }
    else{
        console.log("Not divided 5 and 11");
    }
}
program3()