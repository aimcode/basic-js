const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {
    repeatTimes,
    separator = "+",
    addition,
    additionRepeatTimes,
    additionSeparator = "|",
  } = options;

  let additionResult = [];

  if (addition !== undefined) {
    for (let j = 0; j < additionRepeatTimes; j++) {
      additionResult[j] = addition + "";
    }

    if (additionRepeatTimes !== undefined) {
      additionResult = additionResult.join(`${additionSeparator}`);
    } else {
      additionResult = addition;
    }
  }

  let resStr = str + additionResult;
  let result = [];
  if (repeatTimes !== undefined) {
    for (let i = 0; i <= repeatTimes - 1; i++) {
      result[i] = resStr + "";
    }
  } else {
    result[0] = resStr;
  }

  return result.join(`${separator}`);
};
