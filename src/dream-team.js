module.exports = function createDreamTeam(members) {
    let arr = [];
    if (Array.isArray(members)){
    members.forEach(function(i) { 
      if (typeof i == 'string') {
     arr.push(i.trim().charAt(0).toUpperCase())}})

          
             return arr.sort().join('');}
             else {return false}
};