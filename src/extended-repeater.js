module.exports = function repeater(str, options) {

   
    if (options.repeatTimes === undefined) options.repeatTimes = 1;
    if (options.separator === undefined)
     options.separator = '+';
    if (options.additionRepeatTimes === undefined)
     options.additionRepeatTimes = 1;
    if (options.additionSeparator === undefined) 
    options.additionSeparator = '|';
    if (options.addition === undefined) 
    options.addition = '';
    
    let res = '';
   
   
    for (let elem=0; elem<options.repeatTimes; elem++) {
      
      res += str;
    
     for (let el=0; el<options.additionRepeatTimes; el++) {
      res += options.addition;
      if (el < options.additionRepeatTimes-1) {
         res += options.additionSeparator;}
     }
       
            
       if (elem < options.repeatTimes-1) {
         res += options.separator;
       }
       }
       

       return res;
    };