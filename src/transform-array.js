const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  let newArr = arr.slice()

    for(let i = 0; i < newArr.length; i++) {
        if(newArr[i] === '--double-next') {
            newArr[i] = newArr[i + 1 ]
        } else if (newArr[i] === '--double-prev') {
            newArr[i] = newArr[ i - 1]
        } else if(newArr[i] === '--discard-prev') {
            newArr[i - 1] = undefined
            newArr[i] = undefined
        } else if (newArr[i] === '--discard-next') {
            newArr[i] = undefined
            newArr[ i + 1] = undefined
        }
    }

    return newArr.filter(el => {
        return (el !== undefined)
    })
};
