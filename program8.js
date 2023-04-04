// Write a js program to input any alphabet and check whether it is vowel or consonant.
function program8(a) {
    var enter = prompt("User Enter Any Charachter ");
    if (enter == 'a' || enter == 'e' || enter == 'i' || enter == 'o' || enter == 'u') {
        console.log("User enter Vowal character");
    }
    else {
        console.log("User Enter Consonant");
    }
}
program8()