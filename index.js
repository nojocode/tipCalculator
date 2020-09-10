// edit the TipCalculator function so it has two
// parameters, mealCost and tipPercent
// instead of the hard coded 20% (0.2)
function tipCalculator(mealCost) {
  return mealCost * 0.2;
}
let tipInput = document.querySelector("#tipAmount");
// get the user input out of the 1st text box
// give a variable name to the 1st text box
let userInput = document.querySelector("#mealAmount");
// pay attention to changes in userInput
userInput.addEventListener("change", function () {
  console.log(userInput.value);
  // run the tipCalculator function
  // using the number the user entered for the meal
  let newTip = tipCalculator(userInput.value);
  // show that tip in the 2nd text box
  tipInput.value = newTip;
});
