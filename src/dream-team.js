const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if (Array.isArray(members)) {
    let filterArr = members.filter((el) => typeof el == "string");

    return filterArr
      .map((el) => el.toUpperCase().trim()[0])
      .sort()
      .join("");
  }

  return false;
};
