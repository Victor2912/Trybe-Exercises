// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7
//    *
//   * *
//  *   *
// *******


let n = 7;
let meio;
let piramide; 
let direita;
let esquerda;

meio = (n + 1) / 2;

for (let i = 0; i < meio; i += 1){
    piramide = "";
    esquerda = meio - i;
    direita = meio + i;
    for (j = 1; j <= n; j += 1){
        if (i === meio - 1){
            piramide += '*'
        } else if (j == esquerda || j == direita){
            piramide += '*'; 
        } else {
            piramide += ' ';
        }
    }
    console.log(piramide);
}

