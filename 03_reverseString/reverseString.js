// .split("") splits string into array
// .reverse() reverses the array indexes
// .join("") joins the reversed array indexes back into a new string

const reverseString = function (string) {
  return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
