const stringUperCase = (string) => {
  return string.toUpperCase();
};

const firstWordString = (string) => {
  return string.charAt(0).toUpperCase();
};

const joinString = (string1, string2) => {
  return `${string1}${string2}`;
};

module.exports = { stringUperCase, firstWordString, joinString };
