const button = document.querySelector('.button');

button.addEventListener('click', () => {
  let valorP = document.querySelector('p').innerText;
  const tagP = document.querySelector('p');
  valorP = parseInt(valorP) + 1;
  tagP.innerText = valorP;
});
