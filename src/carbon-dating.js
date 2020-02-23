const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let k = 0.693 / HALF_LIFE_PERIOD;	
  let n = parseFloat(sampleActivity);
  let res = Math.ceil((Math.log(MODERN_ACTIVITY / n)) / k);
    if (typeof sampleActivity !== 'string' || isNaN(n) || (n<=0 || n > 15)) {
      return false;
    }
    else {return res}
      };
