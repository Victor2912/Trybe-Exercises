// Salario

let salario = 3000;
let inss, ir ,salarioBase;

// INSS 

if (salario <= 1556.94){
    inss = salario * 0.8;
} else if (salario > 1556.94 && salario <= 2594.92){
    inss = salario * 0.9;
} else if (salario > 2594.92 && salario <= 5189.82){
    inss = salario * 0.11;
} else {
    inss = 570.88;
}

salarioBase = salario - inss;

// IR

if (salarioBase > 1903.98 && salarioBase <= 2826.65){
    ir = ((salarioBase * 0.075) - 142.80);
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05){
    ir = ((salarioBase * 0.15) - 354.80);
} else if (salarioBase > 3751.05 && salarioBase < 4664.68){
    ir = ((salarioBase * 0.225) - 636.13);
} else{
    ir = ((salarioBase * 0.275) - 869.36);
}

salarioBase = salarioBase - ir;

console.log(salarioBase);