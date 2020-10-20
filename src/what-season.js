module.exports = function getSeason(date) {
  if (date == null) {
    return "Unable to determine the time of year!";
  }
  if (!(date instanceof Date)) {
    throw "Error";
  }
  let ms = date.getTime();
  if (ms == null) {
    throw "Error";
  }

  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  if (month <= 1) {
    if (
      (month == 0 && day > 31) ||
      (year % 4 == 0 && month == 1 && day > 29) ||
      (month == 1 && day > 28)
    ) {
      throw "Error";
    }
    return "winter";
  }

  if (month > 1 && month <= 4) {
    if (
      (month == 2 && day > 31) ||
      (month == 3 && day > 30) ||
      (month == 4 && day > 31)
    ) {
      throw "Error";
    }
    return "spring";
  }

  if (month > 4 && month <= 7) {
    if (
      (month == 5 && day > 30) ||
      (month == 6 && day > 31) ||
      (month == 7 && day > 31)
    ) {
      throw "Error";
    }
    return "summer";
  }

  if (month > 7 && month <= 10) {
    if (
      (month == 8 && day > 30) ||
      (month == 9 && day > 31) ||
      (month == 10 && day > 30)
    ) {
      throw "Error";
    }
    return "autumn";
  }

  if (month > 10) {
    if (day > 31) {
      throw "Error";
    }
    return "winter";
  }
};
