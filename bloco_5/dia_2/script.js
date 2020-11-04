// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

let h1 = document.createElement('h1');
let body = document.querySelector('body');

h1.innerHTML = 'Exercício 5.2 - JavaScript DOM';

body.appendChild(h1);

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Adicione a tag div com a classe main-content como filho da tag body;

let divMain = document.createElement('div');

divMain.className = 'main-content';

body.appendChild(divMain);

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;

let divCenter = document.createElement('div');
let divFilho = document.querySelector('.main-content');

divCenter.className = 'center-content';

divFilho.appendChild(divCenter);

////////////////////////////////////////////////////////////////////////////////////////////////////

// Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;

let tagP = document.createElement('p');
let divFilhoF = document.querySelector('.center-content');

tagP.innerText = 'Algum Texto';

divFilhoF.appendChild(tagP);

////////////////////////////////////////////////////////////////////////////////////////////////////

// Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;

let divClasseContent = document.createElement('div');

divClasseContent.className = 'left-content';

divFilho.appendChild(divClasseContent);

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;

let divClasseRight = document.createElement('div');

divClasseRight.className = 'right-content';

divFilho.appendChild(divClasseRight);

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do div criado no passo 5;

let divClasseContentPai = document.querySelector('.left-content');
let imagemLeftContent = document.createElement('img');

imagemLeftContent.src = 'https://picsum.photos/200';
imagemLeftContent.className = 'small-image';

divClasseContentPai.appendChild(imagemLeftContent);

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;

let ulClasseRight = document.createElement('ul');
let divClasseRightPai = document.querySelector('.right-content');

ulClasseRight.className = 'ul-class-right';
divClasseRightPai.appendChild(ulClasseRight);

let ulClasseRightPai = document.querySelector('.ul-class-right');

for (let index = 1; index <= 10; index += 1) {
    let listItemRight = document.createElement('li');
    listItemRight.innerHTML = index;
    ulClasseRightPai.appendChild(listItemRight);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Adicione 3 tags h3, todas sendo filhas do div criado no passo 2.

for (let index = 0; index < 3; index += 1) {
    let h3irmao = document.createElement('h3');
    divFilho.appendChild(h3irmao);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Adicione a classe title na tag h1 criada;

h1.className = 'title';

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Adicione a classe description nas 3 tags h3 criadas;

let classeH3 = document.querySelectorAll('h3');

for (let index = 0; index < classeH3.length; index += 1) {
    classeH3[index].className = 'description';
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Remova o div criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();

divFilho.removeChild(divClasseContentPai);

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Centralize o div criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto do div;

divClasseRightPai.style.marginRight = 'auto';

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content) para a cor verde;

divFilho.style.backgroundColor = 'green';

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.

let remove9and10 = document.querySelectorAll('li');

for (let index = 0; index < remove9and10.length; index += 1) {
    if (index + 1 === 9 || index + 1 === 10) {
        ulClasseRightPai.removeChild(remove9and10[index]);
    }
}