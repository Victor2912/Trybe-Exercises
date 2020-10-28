// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

 info.recorrente = 'sim';

 let info2 = {
     personagem: "Tio Patinhas",
     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178", 
     nota: "O último MacPatinhas",
     recorrente: "sim",
 }

 info.recorrente = "Ambos Recorrentes";
 info2.recorrente = "";

 for (let key in info){
     if (key === 'recorrente'){
        console.log(info[key])
     } else {
        console.log(info[key], "e", info2[key]);
     }
 }