const carrinho = []




function soma_ingresso(lista){
    let soma =0;
    for(let i = 0; i< lista.length; i++){
        soma += lista[i].preco;
    }

    return soma;
}

function mostrar_carrinho(){
    for(let i = 0; i< carrinho.length; i++){  
    }
}

function mais_caro(lista){
    let caro = lista[0];
    for(let i= 1; i<lista.length; i++){
        if(lista[i].preco >caro.preco){
            caro= lista[i];
        }
    }
    return caro;
}

function mais_barato(lista){
    let barato = lista[0];
    for(let i = 1; i<lista.length; i++){
        if(lista[i].preco <barato.preco){
             barato = lista[i];
        }
    }
    return barato;
}