// Custo Produto

let custoProduto = 100;
let valorProdutoVenda = 200;
let imposto, valorCustoTotal, lucro;

imposto = custoProduto * 0.20;
valorCustoTotal = custoProduto + imposto;
lucro = valorProdutoVenda - valorCustoTotal;

if (custoProduto < 0 || valorProdutoVenda < 0){
    console.log("Valores maiores que 0");
} else{
    console.log(lucro * 1000);
}


