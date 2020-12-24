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
  let data = [];
  let str = [];
  let tmp;
  let decode = [];
  for(let i = 0; i < expr.length; i+= 10){
    data.push(expr.substr(i, 10));
  };
  let data_rem = data.map((ele) => ele.replace(/^0+/, ""));
  for(let elem of data_rem){
    str = [];
    tmp = [];
    for(let i = 0; i < elem.length; i+= 2){
      if(elem[i] !== "*"){
        tmp.push(elem.substr(i, 2))
      }
    }
    if(tmp.length < 1){
      decode.push(" ")
      continue
    }
    for(let i = 0; i < tmp.length; i++){
      if(tmp[i] == "10"){
        str.push(".")
      } 
      else if(tmp[i] == "11"){
        str.push("-")
      }
    }
    decode.push(MORSE_TABLE[str.join("")])
  }
  return decode.join("")
}

module.exports = {
    decode
}


