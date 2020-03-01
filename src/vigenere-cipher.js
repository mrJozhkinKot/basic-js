class VigenereCipheringMachine {
    constructor (value){
      this.value = value;
    }
    
    encrypt(message, key) {
        if (message === undefined|| key === undefined) throw Error();
      
        let result = [];
        let k=0;
        
        for (let i = 0; i < message.length; i++) {
            if (message[i].match(/[A-Za-z]/)) {                     
           result.push(String.fromCharCode((message[i].toUpperCase().charCodeAt() -65 + key[k % key.length].toUpperCase().charCodeAt()-65)% 26 + 65));
           
           k++;
            } else result.push(message[i]); 
                 } 
                return this.value == false? result.reverse().join(''):  result.join(''); 
                          
                }


                

    decrypt(message, key) {
        if (message === undefined || key === undefined) throw Error();
       
        let result = [];
        let k=0;
    
        for (let i = 0; i < message.length; i++) {
            if (message[i].match(/[A-Za-z]/)) {                     
            result.push(String.fromCharCode(Math.abs(message[i].toUpperCase().charCodeAt() - key[k % key.length].toUpperCase().charCodeAt()+26)% 26 + 65));
                       k++;
            } else result.push(message[i]); 
                  } 
           
                         
                  return this.value == false? result.reverse().join(''):  result.join(''); 
                }

                 
        }


module.exports = VigenereCipheringMachine;
