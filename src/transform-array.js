module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {throw Error()}
    let newArr = [];
    for (i=0; i<arr.length; i++) {
         if  (arr[i] == '--double-next') {
          newArr.push(arr[i+1]);
            }
     else if (arr[i] == '--double-prev'){
       newArr.push(arr[i-1]);
      
            }
     else if (arr[i] == '--discard-prev') {newArr.pop();}
     else if (arr[i] == '--discard-next') {arr.splice([i],1);}  
     else {newArr.push(arr[i])}     
          }   
     return newArr.filter(function(i) { return i !== undefined});
    };
