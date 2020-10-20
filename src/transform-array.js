module.exports = function transform(arr) {
  let total = [];
  if (!Array.isArray(arr)) {
    throw "Error";
  }

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] == "--discard-next") {
      if (i + 1 == arr.length) {
        break;
      } else {
        i++;
      }
    } else if (arr[i] == "--discard-prev") {
      if (i - 1 < 0 || arr[i - 2] == "--discard-next") {
        continue;
      } else {
        total.pop();
      }
    } else if (arr[i] == "--double-next") {
      if (i + 1 == arr.length) {
        break;
      } else {
        i++;
        total.push(arr[i]);
        total.push(arr[i]);
      }
    } else if (arr[i] == "--double-prev") {
      if (i - 1 < 0 || arr[i - 2] == "--discard-next") {
        continue;
      } else {
        total.push(total[total.length - 1]);
      }
    } else {
      total.push(arr[i]);
    }
  }

  return total;
};
