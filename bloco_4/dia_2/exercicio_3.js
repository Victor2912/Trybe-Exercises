// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
  // A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media, total;
  
for (let i = 0; i < numbers.length; i += 1){
    soma += numbers[i];
    total = i;
}

media = soma/total;
  
console.log(`A media do array é = ${media}`);