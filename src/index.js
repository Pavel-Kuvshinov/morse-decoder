const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr) {

    // My first and very old decision))

    /*

    let items = ['00', '11', '10', '**'];

    let memoryStr = "";
    let memoryArr = [];
    let resultArr = [];
    let result = "";

    let strArr = expr.match(/.{1,2}/g);

    for (let i = 0; i<=strArr.length; i++){
        
        if (i%5==0 && i>0){
            memoryArr.push(memoryStr);
            memoryStr = "";
        }
        
        let item = items.indexOf(strArr[i]);
        if (item == 0){
            continue;
        } else if (item == 1){
            memoryStr += "-";
            continue;
        } else if (item == 2){
            memoryStr += ".";
            continue;
        } else if (item == 3){
            memoryStr += " ";
            i = i + 4;
            continue;
        }
        
    }

    for (let j=0; j<memoryArr.length; j++){
        if (MORSE_TABLE.hasOwnProperty(memoryArr[j]) === true){
        resultArr[j] = MORSE_TABLE[memoryArr[j]];
        } else if (memoryArr[j] === " "){
            resultArr[j] = memoryArr[j];
        }
    }

    result = resultArr.join('');

    return result;

    */

    // My second decision;

    let items = ['00', '11', '10', '**********'];
    let strArr = expr.match(/.{1,10}/g);
    
    let resultArr = strArr.map(item => {
      if (item == items[3]) return ' ';
      let memorySymbol = item.match(/.{1,2}/g).map(elem =>{
        if (elem == items[0]) return '';
        if (elem == items[1]) return '-';
        if (elem == items[2]) return '.'
        }).join('');
      return MORSE_TABLE[memorySymbol];
    });
    
    return resultArr.join('');

}

module.exports = {
    decode
}