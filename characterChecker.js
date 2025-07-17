/** @format */

const readline = require("readline-sync");

let userString = readline.question("Please enter a word or phrase.");

let userIndexNum = readline.question(
  "Please choose a number that will be the index of a character within your word or phrase."
);

let userCharacter = userString[userIndexNum];

// if (userIndexNum > userString.length) {
//   console.log(
//     "Please enter a number lower than the number of characters in your string. It should be lower than " +
//       userString.length
//   );
// } else {

  console.log(
    "The indexted character, " +
      userIndexNum +
      ", that you chose for your string, " +
      userString +
      ", is: " +
      userCharacter
  );
  
// }
