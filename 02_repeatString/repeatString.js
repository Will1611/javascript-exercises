const repeatString = function (string, num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += string;
  }
  if (num < 0) {
    return "ERROR";
  } else {
    return str;
  }
};

// Do not edit below this line
module.exports = repeatString;
