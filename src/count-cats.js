const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  let res = 0;
  matrix.forEach(element => {
    element.forEach(el => {
      if(el === "^^") res++
    })
  });
  return res
};
