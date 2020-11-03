// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
// Valor de teste: "trybe" e "be"
// Valor esperado no retorno da função: true
// verificaFimPalavra("trybe", "be");
// Retorno esperado: true
// verificaFimPalavra("joaofernando", "fernan");
// Retorno esperado: false

function verificaFimPalavra(stringW, stringEnd) {
    let tamanho = stringEnd.length;
    let tamanho2 = stringW.length;
    let cont = 0;

    for (let i = 0; i < tamanho; i += 1){
        if (stringW[(tamanho2 - 1) - i] === stringEnd[(tamanho - 1) - i]) {
            cont += 1;
        }
    }

    if (cont === tamanho) {
        return true;
    }
    
    return false;
}

console.log(verificaFimPalavra('joaofernando', 'fernan'));

