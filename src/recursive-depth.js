

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    let maxDepth = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        depth = this.calculateDepth(arr[i]) + 1;
        if (depth >= maxDepth) {
          maxDepth = depth;
        }
      }
    }

    return maxDepth;
  }
};