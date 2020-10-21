const chainMaker = {
  chain: "",
  arr: [],

  getLength() {
    this.arr.length;
    return this;
  },

  addLink(value) {
    if (value == null) {
      value = "null";
    }
    this.arr.push(value);
    return this;
  },

  removeLink(position) {
    if (position - 1 < 0 || position - 1 > this.arr.length - 1) {
      this.arr = [];
      throw Error;
    }
    this.arr.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },

  finishChain() {
    this.chain = this.arr.join(" )~~( ");
    this.chain = `( ${this.chain} )`;
    this.arr = [];
    return this.chain;
  },
};

module.exports = chainMaker;
