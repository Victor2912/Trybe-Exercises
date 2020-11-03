// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara.
// verificaPalindrome("arara");
// Retorno esperado: true
// verificaPalindrome("desenvolvimento");
// Retorno esperado: false


function palindromo (palavra) {
    let num = palavra.length;
    let palindromoEh = 0;

    if (num % 2 == 1){
        num += 1;
    }

    num = num/2;

    for (let i = 0; i < num; i += 1){
        if (palavra[i] === palavra[(palavra.length - 1) - i]){
            palindromoEh += 1;
        } 
    }

    if (palindromoEh === num){
        return true;
    }

    return false;
};
