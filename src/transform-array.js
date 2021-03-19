const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw Error();
  if (arr.length === 0) return [];
  let arr2 = arr.slice();
  for (let i = 0; i < arr2.length; i++) {
    if (i === arr2.length - 1 && arr2[i] === '--double-next') arr2[i] = 'someshit';
    else if (arr2[i] === '--double-next') arr2[i] = arr2[i + 1];
    else if (i === 0 && arr2[i] === '--double-prev') arr2[i] = 'someshit';
    else if (arr2[i] === '--double-prev') arr2[i] = arr2[i - 1];
    else if (i === arr2.length - 1 && arr2[i] === '--discard-next') arr2[i] = 'someshit';
    else if (arr2[i] === '--discard-next') {
      arr2[i] = 'someshit';
      arr2[i + 1] = 'someshit';
    }
    else if (i === 0 && arr2[i] === '--discard-prev') arr2[i] = 'someshit';
    else if (arr2[i] === '--discard-prev') {
      arr2[i] = 'someshit';
      arr2[i - 1] = 'someshit';
    }
  }
  let arr3 = arr2.filter(el => (arr2[i] !== 'someshit'))
  return arr3;
};
