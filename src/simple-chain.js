const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`(${value})`)
  },
  removeLink(position) {
    if(this.chain[position - 1] === undefined) return new Error();
    else this.chain.splice(position - 1, 1);
  },
  reverseChain() {
    this.chain = this.chain.reverse();
  },
  finishChain() {
    return this.chain.join('~~');
  }
  
};

module.exports = chainMaker;
