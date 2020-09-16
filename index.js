// edit the TipCalculator function so it has two
// parameters, mealCost and tipPercent
// instead of the hard coded 20% (0.2)
function tipCalculator() {

    //Change the code for the meal amount
}
let mealAmt = document.getElementById("mealAmt").value;
// get the user input out of the 1st text box
// give a variable name to the 1st text box
let tiplevel = document.getElementById("#tiplevel").value;
// pay attention to changes in userInput
userInput.addEventListener("radio checked", function() {
    console.log(userInput.value);
    // run the tipCalculator function
    // using the number the user entered for the meal
    let newTip = tipCalculator(userInput.value);
    // show that tip in the 2nd text box
    tipInput.value = newTip;
});