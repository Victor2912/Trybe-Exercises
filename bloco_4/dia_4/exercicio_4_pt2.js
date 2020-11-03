// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.



let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana',];

function arrayNomes (array) {
    let tamanhoNome = 0;
    let nome;

    for (let i = 0; i < array.length; i += 1){
        tamanho = array[i].length;
        if (tamanho > tamanhoNome){
            tamanhoNome = tamanho;
            nome = array[i];
        }
    }
    return nome;
};

console.log(arrayNomes(array));