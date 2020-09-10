# Tip Calculator

Build on the project we started Wednesday. Add the following features:

- in `index.html`, add a set of [radio buttons](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio) for a range of tip levels (10%, 15%, 18%, etc)
  - have one of the buttons checked by default
- in `index.js`, change the definition of the `tipCalculator` function so it depends on _both_ the value the user enters for the meal cost _and_ the value the user enters for the tip level
- the project already listens for changes in the meal cost, but it calls `tipCalculator` with just one argument. Once you have changed the definition of the function (above), you will have to change how it is used to pass in two arguments
- write code to listen for changes in the tip level and update the tip amount accordingly
