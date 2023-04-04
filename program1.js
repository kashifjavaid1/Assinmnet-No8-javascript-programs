// Write a js program to find maximum between two numbers.
console.log("maximum two Numbers=");
function program1(max, max1) {
    var a = +prompt("User Enter First Number ");
    var b = +prompt("User Enter Second Number");
    if (a>b) {
       console.log("Maximum Number A=",a); 
    }
    else if (b>a) {
        console.log("maximum Number B=",b);
    }
    else{
        console.log("Both Number are equal");

    }
}
program1();
