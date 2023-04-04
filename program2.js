//  Write a js program to find maximum between three numbers.
console.log("maximum three Numbers=");
function program2() {
    var a=+prompt("User Enter First Number");
    var b=+prompt("User Enter Second Number");
    var c=+prompt("User Enter Third Number");
    if (a>b) {
        console.log("Maximum Number A=",a);
    }
    else if (b>c) {
        console.log("Maximum Number B=",b);
    }
    else if (c>a) {
        console.log("Maxmimu Number C=",c);
    }
    else{
        console.log("Both Number are equal");
    }
}
program2()