const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      return (
        1 +
        arr.reduce((sum, i) => {
          return Math.max(sum, this.calculateDepth(i));
        }, 0)
      );
    } else {
      return 0;
    }
  }
};
