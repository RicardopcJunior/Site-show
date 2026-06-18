const carrinho = []
const listaCarrinho = document.getElementById("lista-carrinho");
const total = document.getElementById("total");
const botoes = document.querySelectorAll(".botao_tabela");
const conteudo= document.querySelector('.conteudo');

for (let i = 0; i < botoes.length; i++) {

    botoes[i].addEventListener("click", function() {

        carrinho.push({
            ingresso: this.dataset.ingresso,
            preco: Number(this.dataset.valor)
        });

        mostrar_carrinho();
        console.log(carrinho);
    });

}

function mostrar_carrinho(){

    listaCarrinho.innerHTML = "";

    for(let i = 0; i < carrinho.length; i++){

        listaCarrinho.innerHTML += `
            <p>
                ${carrinho[i].ingresso}
                - R$ ${carrinho[i].preco}
            </p>
        `;
    }

    total.textContent =
        `Total: R$ ${soma_ingresso(carrinho).toFixed(2)}`;
}

function soma_ingresso(lista){
    let soma =0;
    for(let i = 0; i< lista.length; i++){
        soma += lista[i].preco;
    }

    return soma;
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

const menucarrinho = document.querySelector(".menu-carrinho");
const cart = document.querySelector(".cart");

cart.addEventListener('click', ()=>{
    menucarrinho.classList.toggle("ativo");
     conteudo.classList.toggle('ativo');
});