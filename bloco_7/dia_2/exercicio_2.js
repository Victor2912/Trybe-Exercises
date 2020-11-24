const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurno = (objeto, keyName, valor) => objeto[keyName] = valor;
addTurno(lesson2, 'turno', 'noite');

console.log(lesson2);

const listaObjeto = (objeto) => console.log(Object.keys(objeto));
listaObjeto(lesson3);

const tamanhoObjeto = (objeto) => Object.keys(objeto).length;
console.log(tamanhoObjeto(lesson1));

const valoresObjeto = (objeto) => Object.values(objeto);
console.log(valoresObjeto(lesson2));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

const retornaEstudantes = (objeto) => {
  let total = 0;
  const keys = Object.keys(objeto);

  for (i in keys) {
    total += objeto[keys[i]].numeroEstudantes;
  }

  return total;
}

console.log(retornaEstudantes(allLessons));

const pegaValor = (objeto, number) => Object.values(objeto)[number];
console.log(pegaValor(lesson1, 0));

const par = (objeto, nomeChave, valorChave) => {
  const entries = Object.entries(objeto);
  let resultado = false;

  for (let index in entries) {
    if (entries[index][0] === nomeChave && entries[index][1] === valorChave) {
      resultado = true;
    }
  }

  return resultado;
}

console.log(par(lesson3, 'turno', 'noite'));
console.log(par(lesson3, 'materia', 'Maria Clara'));