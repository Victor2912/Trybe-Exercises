const hydrate = (string) => {
  const arrayString = string.split('');
  const sum = arrayString.reduce((previousValue, currentValue) => {
    let value = parseInt(currentValue);
    if (isNaN(value) === true) {
      return previousValue;
    } else {
      previousValue += value;
      return previousValue;
    };
  }, 0);

  if (sum === 1) {
    return `${sum} copo de água`;
  } else {
    return `${sum} copos de água`;
  };
};

module.exports = hydrate;