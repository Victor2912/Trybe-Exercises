// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

//n = 5
// *
// **
// ***
// ****
// *****

let n = 5;
let triangulo;

for (let i = 0; i < n; i += 1){
    triangulo = "";
    for (let x = 0; x <= i; x += 1){
        triangulo += '*';
    }
    console.log(triangulo);
}