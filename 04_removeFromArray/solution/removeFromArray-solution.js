// const removeFromArray = function (array, ...args) {
//   const newArray = [];
//   array.forEach((item) => {
//     if (!args.includes(item)) {
//       newArray.push(item);
//     }
//   });
//   return newArray;
// };

// A simpler, but more advanced way to do it is to use the 'filter' function,
// which basically does what we did with the forEach above.

const removeFromArray = function (array, ...args) {
  return array.filter((val) => !args.includes(val));
};
//

module.exports = removeFromArray;
