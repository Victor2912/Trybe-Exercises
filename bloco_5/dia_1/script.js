document.getElementsByTagName('p')[1].innerText = 'espero estar bem, trabalhando como front-end';
        
document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76, 164, 109)';

document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';

document.getElementsByClassName('title')[0].innerHTML = 'Exercício 5.1 - JavaScript';

let num = document.getElementsByTagName('p');    
for (let i = 0; i < num.length; i += 1){
    document.getElementsByTagName('p')[i].style.textTransform = 'uppercase';
    console.log(document.getElementsByTagName('p')[i].innerHTML);
}