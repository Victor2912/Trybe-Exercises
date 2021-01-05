const encode = (string) => {
  const word = string.split('');

  const wordNumbers = word.map((word) => {
    if (word === 'a') {
      return 1;
    } else if (word === 'e') {
      return 2;
    } else if (word === 'i') {
      return 3;
    } else if (word === 'o') {
      return 4;
    } else if (word === 'u') {
      return 5;
    } else {
      return word;
    }
  });

 return wordNumbers.join(''); 
};

module.exports = encode;