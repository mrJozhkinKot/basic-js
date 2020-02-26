const chainMaker = {
  chain: [],
  getLength() {
 return this.chain.length;
 },
 addLink(value) {
  this.chain.push(`( ${value} )`);
  return this;
 },
 removeLink(position) {
   if (!(typeof position === 'number') || position <= 0 || position > this.getLength())
    { this.chain = [];
      throw Error;}

       else {
  this.chain.splice(position -1, 1)
  return this;
   }
 },
 reverseChain() {
   this.chain.reverse();
   return this;
 },
 finishChain() {
   let resChain = this.chain.slice(0, this.chain.length);
   this.chain = [];
      
    return resChain.join('~~');
  }
};

module.exports = chainMaker;
