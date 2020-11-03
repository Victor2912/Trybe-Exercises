// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

// n = 5
// *****
// *****
// *****
// *****
// *****


let n = 5;
let quadrado;

if (n > 1){
    for (let i = 0; i < n; i += 1){
        quadrado = "";
        for (let x = 0; x < n; x += 1){
            quadrado += '*';
        }
        console.log(quadrado);
    } 
} else{
    console.log(`Número inválido`);
}
