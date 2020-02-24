module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    function calculateTurns (disksNumber) {
        if (disksNumber == 1) {return 1;}
    else { 
      return  2 * calculateTurns(disksNumber-1) + 1;
    } 
    }
    let turns = calculateTurns(disksNumber);
    let seconds = turns / (turnsSpeed / 3600);
    
    return {turns: turns, seconds: seconds}
    }
