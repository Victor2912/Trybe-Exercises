// Utilizando for, crie uma array que vá de 1 até 25 e imprima o resultado;

let numbers = [];

for (let i = 0; i < 25; i += 1){
    numbers[i] = Math.floor(Math.random() * 100);
}

for (let x = 0; x < numbers.length; x += 1){
    console.log(`O número na posição "${x+1}" é ${numbers[x]}`);
    console.log(`-------------------------------------------`)
}