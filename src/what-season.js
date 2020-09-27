const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
    if(!date) {
      return 'Unable to determine the time of year!'
    }

    if(date instanceof Date && isNaN(date.valueOf())) throw new Error()
    
    let month = date.getMonth() + 1

    if(month >= 3 && month <= 5) {
         return "spring"
     } else if (month >= 6 && month <= 8) {
         return "summer"
     } else if (month >= 9 && month <= 11) {
         return "autumn"
     } else {
         return "winter"
     }
};
