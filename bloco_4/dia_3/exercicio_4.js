// Depois, faça uma pirâmide com n asteriscos de base:

// n = 5
//   *
//  ***
// *****

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
        if (j < esquerda || j > direita){
            piramide += ' ';
        } else {
            piramide += '*';
        }
    }
    console.log(piramide);
}

