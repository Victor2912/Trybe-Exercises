const decode = (string) => {
  const word = string.split('');

  const wordNumbers = word.map((word) => {
    if (word === '1') {
      return 'a';
    } else if (word === '2') {
      return 'e';
    } else if (word === '3') {
      return 'i';
    } else if (word === '4') {
      return 'o';
    } else if (word === '5') {
      return 'u';
    } else {
      return word;
    }
  });

 return wordNumbers.join(''); 
};

module.exports = decode;