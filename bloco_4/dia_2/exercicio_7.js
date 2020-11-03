// Utilizando for, descubra qual o menor valor contido no array e imprima-o; 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor_n = numbers[0];

for (let i = 0; i < numbers.length; i += 1){
    if (menor_n >= numbers[i]){
        menor_n = numbers[i];
    }
}

console.log(`O menor valor do array é ${menor_n}`);