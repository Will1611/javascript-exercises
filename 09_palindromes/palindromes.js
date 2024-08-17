// A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks

const palindromes = function (string) {
  // Since we only consider letters and numbers, create a variable containing all valid characters
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

  // Convert to lowercase, split to array of individual characters, filter only valid characters, then rejoin as new string
  const cleanedString = string
    .toLowerCase()
    .split("")
    .filter((character) => alphanumerical.includes(character))
    .join("");

  // Create a new reversed string for comparison
  const reversedString = cleanedString.split("").reverse().join("");

  // Return the outcome of the comparison which will either be true or false
  return cleanedString === reversedString;

  // let array = Array.from(str);
  // array.forEach((char) => {
  //   if (!(char >= `a` && char <= `z`) || !(char >= `0` && char <= `9`)) {
  //     array.splice(`char`);
  //   }
  //   return array;
  // });
  // return array === array.reverse();
};

// Do not edit below this line
module.exports = palindromes;
