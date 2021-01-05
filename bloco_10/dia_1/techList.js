// function techList(arrayString, name) {
//   arrayString.sort();

//   for (let key in arrayString) {
//       arrayString[key] = objeto = {
//       tech: arrayString[key],
//       name: name,
//       }
//   }
//   if (arrayString.length === 0) {
//     return 'Vazio!';
//   }
//   return arrayString;
// }

const techList = (arrayString, name) => {
  arrayString.sort();

  if (arrayString.length === 0) {
    return 'Vazio!';
  };
  
  const object = arrayString.map((tech) => {
    return {
      tech: tech,
      name: name
    };
  });

  return object;
};

module.exports = techList;