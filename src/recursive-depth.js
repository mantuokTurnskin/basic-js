const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    let count = 1;
    const nArr = arr.filter(elem => Array.isArray(elem));
    if (nArr.length > 0) {
      arr.forEach(elem => {
        if (this.calculateDepth(elem) + 1 > count) count = this.calculateDepth(elem) + 1;
      })
    }
    return count;
  }
};