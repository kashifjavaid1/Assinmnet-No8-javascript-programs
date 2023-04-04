//  6. Write a js program to check whether a year is leap year or not.

 function program6(a) {
    var a=+prompt("User Enter 4 Year's days");
    if (a%4==0) {
        console.log("Leap Year",a);
    }
    else{
        console.log("Not Leap Year",a);
    }
 }
 program6();