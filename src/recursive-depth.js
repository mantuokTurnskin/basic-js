const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    if (!Array.isArray(arr)) throw new Error();
    for (let elem of arr) {
      if (Array.isArray(elem)) {
        let elemCount = this.calculateDepth(elem) + 1;
        if (count < elemCount) count = elemCount;
      }
    }
    return count;
  }
};