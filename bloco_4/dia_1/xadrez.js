// Xadrez

let peça = "";
let peçaLower = peça.toLowerCase();

if (peçaLower == "peão"){
    console.log("MOvimenta uma casa à frente.")
} else if (peçaLower == "cavalo"){
    console.log("Movimentos em L");
} else if (peçaLower == "bispo"){
    console.log("Movimena em diagonal");
} else if (peçaLower == "torre"){
    console.log("Movimenta em linha reta");
} else if (peçaLower == "rainha"){
    console.log("Movimenta em todas as direções mais de uma casa");
} else if (peçaLower == "rei"){
    console.log("Movimenta em todas as direções somente uma casa");
} else {
    console.log("Peça inválida");
}

