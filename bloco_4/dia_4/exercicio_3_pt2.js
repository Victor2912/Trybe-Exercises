// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.


let array = [2, 4, 6, 7, -4, 0, -3];

function menorIndice (vetor){
    
    let menorValor = vetor[0];
    let indice = 0;

    for (let i = 0; i < vetor.length; i += 1){
       if (vetor[i] <= menorValor){
           menorValor = vetor[i];
           indice = i;
       } 
    }
    return indice;
};

console.log(menorIndice(array));