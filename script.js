const tituloLoja = document.getElementById("titulo");
const produtosLista = document.getElementById("produtos");
const carrinhoDiv = document.getElementById("carrinho");
const totalSpan = document.getElementById("total");


const produtos = [

    {nome: "Camiseta",preco:59.9},
    {nome:"Tênis",preco:199.9},
    {nome:"Boné",preco:30.5}
];

const carrinho = [];

function listaProdutos() {
    let html = "";
    for(let i = 0; i < produtos.length; i++) {
         html += `
          
           <div>
              <p>${produtos[i].nome} - R$ ${produtos[i].preco}</p>
              <button data-index="${i}"> Adicionar</button>
           </div>
         
         `;
    }

    produtosLista.innerHTML = html;

    const botoes = document.querySelectorAll("button");

    botoes.forEach(function(botao){
          botao.addEventListener("click",function(){
             const index = this.getAttribute("data-index");
              carrinho.push(produtos[index]);
              renderizarCarrinho();
          })
    });

}

listaProdutos();


function renderizarCarrinho() {
    let html = "";
    let total = 0;

    carrinho.forEach(function(produto, index){
        html += `
            
           <div>
               <p>${produto.nome} - R$ ${produto.preco}</p>
               <button data-index="${index}"> Remover</button>
           </div>
        `;
        total += produto.preco;
    });

    carrinhoDiv.innerHTML = html;
    totalSpan.textContent = total.toFixed(2);
    adicionarEventoRemover();
}

function adicionarEventoRemover() {
    const botoesRemover = carrinhoDiv.querySelectorAll("button");
    botoesRemover.forEach(function(botao){
         botao.addEventListener("click",function(){
             const index = this.getAttribute("data-index");

             carrinho.splice(index,1);
             renderizarCarrinho();
         })
    })
}


