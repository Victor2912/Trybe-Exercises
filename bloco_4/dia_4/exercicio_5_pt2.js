// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.


let array =  [2, 3, 2, 5, 8, 2, 3];

function repeticao(array) {

    let contador;
    let repetidoN = 0;

    for (j = 0; j < array.length; j += 1){
        contador = 0;
        for (let i = 0; i < array.length; i += 1){
            if (array[j] == array[i]){
                contador += 1;
            }
        }
        if (contador > repetidoN){
            repetidoN = contador;
            numeroRepetido = array[j];
        }
    }
    return numeroRepetido;
};


console.log(repeticao(array));