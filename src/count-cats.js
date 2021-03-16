const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  const totalCats = arr.reduce((count, innerArr) => {
    const cats = innerArr.reduce((total, elem) => (elem === '^^')? total + 1: total, 0);
    return count + cats;
  }, 0);
  return totalCats;
};
