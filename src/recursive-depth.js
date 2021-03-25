const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, count = 1) {
    let deep = count;
    for (let el of arr) {
      if ((Array.isArray(el)) && (deep < this.calculateDepth(el, count + 1))) deep = this.calculateDepth(el, count + 1);
    }
    return deep;
  }
};