function program9(a) {
  var user = prompt("User Enter any Alphabet Digit Special Character");
  if (user >= 0) {
    console.log("User Enter Digit Number");
  }
   else if (user == 'a' || user == 'b' || user == 'c' || user == 'd' || user == 'e' || user == 'f' || user == 'g' || user == 'h' || user == 'i' || user == 'j' || user == 'k' || user == 'l' || user == 'm' || user == 'n' || user == 'o' || user == "p" || user == 'q' || user == 'r' || user == 's' || user == 't' || user == 'u' || user == "v" || user == 'w' || user == 'x' || user == "y" || user == 'z')    {
    console.log("User Enter Alphabets");
  }
  else {
    console.log("User Enter Special Character");
  }
}
program9();