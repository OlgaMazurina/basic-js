module.exports = function repeater(str, options) {
  let total = "";
  let addition = "";
  let additionSeparator;
  let separator;

  if (str !== null) {
    str = str.toString();
  } else {
    str = "null";
  }

  if (options["addition"] !== undefined) {
    if (options["addition"] !== null) {
      addition = options["addition"].toString();
    } else {
      addition = "null";
    }

    if (options["additionRepeatTimes"] !== undefined) {
      if (options["additionSeparator"] !== undefined) {
        additionSeparator = options["additionSeparator"];
        addition = addition.concat(additionSeparator);
        addition = addition.repeat(options["additionRepeatTimes"]);
        addition = addition.substring(
          0,
          addition.length - additionSeparator.length
        );
      } else {
        additionSeparator = "|";
        addition = addition.concat(additionSeparator);

        addition = addition.repeat(options["additionRepeatTimes"]);
        addition = addition.substring(
          0,
          addition.length - additionSeparator.length
        );
      }
    }
    total = str.concat(addition);
  }

  if (total !== "") {
    if (options["repeatTimes"] !== undefined) {
      if (options["separator"] !== undefined) {
        separator = options["separator"];
      } else {
        separator = "+";
      }
      total = total.concat(separator);
      total = total.repeat(options["repeatTimes"]);
      total = total.substring(0, total.length - separator.length);
    }
  } else {
    if (options["repeatTimes"] !== undefined) {
      if (options["separator"] !== undefined) {
        separator = options["separator"];
      } else {
        separator = "+";
      }
      total = str.concat(separator);
      total = total.repeat(options["repeatTimes"]);
      total = total.substring(0, total.length - separator.length);
    }
  }

  return total;
};
