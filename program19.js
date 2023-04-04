// Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:

function program19(Physics,Chemistry,Biology,Mathmatical,computer) {
    var a=+prompt("Enter a Physics Subject Number");
    var b=+prompt("Enter a Chemistry Subject Number");
    var c=+prompt("Enter a  Biology Subject Number");
    var d=+prompt("Enter a Mathmatical Subject Number");
    var e=+prompt("Enter a Computer Subject Number");
    var marks=a+b+c+d+e;
   var total=500;
   var per= marks/total*100;
   if (per>=90) {
    console.log("Grade A=",marks);
   }
   else if (per>=80) {
    console.log("Grage B=",marks);
   }
   else if (per>=70) {
    console.log("Grade C=",marks);
   }
   else if (per>=60) {
    console.log("Grade D=",marks);
   }
   else if (per>=40) {
    console.log("Grage E=",marks);
   }
   else if (per<40) {
    console.log("Grade F=",marks);
   }



}
program19()