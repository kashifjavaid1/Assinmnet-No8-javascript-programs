// Write a js program to calculate profit or loss.
function program18() {
    var sellingprice =+prompt("Enter a Selling Price");
    var costprice =+prompt("Enter a Cost Price");
  
    if (sellingprice > costprice) {
      console.log("Profit");
    } else if (costprice > sellingprice) {
      console.log("Loss");
    } else {
      console.log("No Profit No Loss");
    }
  }
  
  program18();
  
  
  
  
  
  