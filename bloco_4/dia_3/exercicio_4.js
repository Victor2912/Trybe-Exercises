// Depois, faça uma pirâmide com n asteriscos de base:

// n = 5
//   *
//  ***
// *****

let n = 5;
let piramide;

for (let i = 1; i <= n - 2; i += 1){
    piramide = "";
    for (let i = 0; i < n; i += 1){
        if (i == 3 - i){
            piramide += '*';
        } else {
            piramide += ' ';
        }
    }
    console.log(piramide);
}