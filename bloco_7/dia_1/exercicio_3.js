const fatorial = (number) => {
  let fatorial = 1;
  for (let index = 2; index <= number; index += 1) {
    fatorial *= index;
  }

  return fatorial;
}

console.log(fatorial(4));