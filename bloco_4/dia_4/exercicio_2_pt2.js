// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.


let array = [2, 3, 6, 7, 10, 1];

function menorIndice (vetor){
    
    let maiorValor = vetor[0];
    let indice = 0;

    for (let i = 0; i < vetor.length; i += 1){
       if (vetor[i] >= maiorValor){
           maiorValor = vetor[i];
           indice = i;
       } 
    }
    return indice;
};

console.log(menorIndice(array));