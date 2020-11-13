function criaEstados() {
    const selecionaEstados = document.querySelector('#estados-selecionar');
    const vetorEstados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

    for (let index = 0; index < vetorEstados.length; index += 1) {
        let estado = document.createElement('option');
        estado.innerText = vetorEstados[index];
        selecionaEstados.appendChild(estado);
    }
}

criaEstados();