//  Write a js program to check whether a number is negative, positive or zero.
function program3(a) {
    var a=+prompt("User Enter a Number");
    if (a==0) {
        console.log("Number is Zero",a);
    }
    else if (a>0) {
        console.log("Number is Positive",a);
    }
    else if (a<0) {
        console.log("Number is Negative",a);
    }
}
program3()