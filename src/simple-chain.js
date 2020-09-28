const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {},
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(position <= this.chain.length && Number.isInteger(position)) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = []
      throw new Error("Wrong position")
    }
    
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finishChain = this.chain.join("~~")
    this.chain = []
    return finishChain
  },
};

module.exports = chainMaker;
