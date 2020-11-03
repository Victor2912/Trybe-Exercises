// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let numbers = [];

for (let i = 0; i < 25; i += 1){
    numbers[i] = Math.floor(Math.random() * 100);
}

console.log(numbers)

for (let x = 0; x < numbers.length; x += 1){
    console.log(`a divisão da posição "${x+1}" do array é ${numbers[x]/2}`);
    console.log(`-------------------------------------------`)
}