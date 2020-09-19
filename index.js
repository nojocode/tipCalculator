// edit the TipCalculator function so it has two
// parameters, mealCost and tipPercent
// instead of the hard coded 20% (0.2)
function tipCalculator(totalAmount) {}

let mealInput = document.querySelector("#mealAmount");
// get the user input out of the 1st text box
// give a variable name to the 1st text box
let tipPercent;
if (document.getElementById("tipPercent15").checked) tipPercent = 15;
if (document.getElementById("tipPercent18").checked) tipPercent = 18;
if (document.getElementBYId("tipPercent20").checked) tipPercent = 20;

let total = mealAmount * tipPercent;

let Total = parseFloat(mealAmount) + parseFloat(totalAmount);

document.getElementById("totalAmount").innerHTMl = total;
}