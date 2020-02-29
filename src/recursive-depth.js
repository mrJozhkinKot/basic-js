module.exports = class DepthCalculator {
    calculateDepth(arr) {
     if (!Array.isArray(arr)) {
       return 0;
     }
    let depth = 0;
    for (let i of arr) {
      let x = this.calculateDepth(i);
      if (x>depth) {depth = x;}
    }
    return depth+1;
    
     }          
   };
     