//informações da padaria 
//escreva 3 variáveis contendo nome, endereço e telefone

var nome = "Padaria Doce Sonho";
let endereco = "Estr. Ernestina Vieira, 149 - Vila Dirce, Carapicuíba - SP, 06382-260";
let telefone = "(11)4545-4545";

//escreva 3 variaveis com precos dos produtos
let preco_pao_frances = 0.30;
let preco_pao_acucar = 0.50;
let preco_croissant = 3.00;

//escreva 3 variaveis do controle do estoque

let qtde_paes_franceses = 100;
let qtde_pao_acucar = 100;
let qtde_croissant = 50;

//array de produtos 

const produtos = ["Pão Francês", "Pão de açúcar", "Croissant", "Bolo de Chocolate", "Torta de Frango", "Coxinha", "Mini torta de morango", "Cookie", "Sonho", "Pão Integral", "Café"];

//array de categorias

const categorias = ["Pães", "Bolos", "Tortas", "Salgados", "Doces", "Bebidas"];

//objeto produto completo

const produto = {
    nome: "Pão Francês",
    categoria: "Pães",
    preco: 0.30,
    descricao: "Pão quentinho feito com farinha, água, sal e fermento"
};

//crie um array de objetos

const listagemProdutos = [
    {
        nome: "Pão Francês",
        categoria: "Pães",
        preco: 0.30,
        descricao: "Pão quentinho feito com farinha, água, sal e fermento"

    },

    {
        nome: "Pão de açúcar",
        categoria: "Pães",
        preco: 0.50,
        descricao: "Pão feito com farinha, fermento, leite, açúcar e manteiga"
    },


    {
        nome: "Croissant",
        categoria: "Pães",
        preco: 3.00,
        descricao: "Massa folhada com diversos recheios"
    },

    {
        nome: "Bolo de Chocolate",
        categoria: "Bolos",
        preco: 6.00,
        descricao: "Fatia de bolo feito de cacau em pó, açúcar, fermento, manteiga, leite e farinha"

    },

    {
        nome: "Torta de Frango",
        categoria: "Tortas",
        preco: 6.00,
        descricao: "Fatia de torta com massa crocante e recheio cremoso de frango"
    },

    {
        nome: "Coxinha",
        categoria: "Salgados",
        preco: 4.00,
        descricao: "Massa feita de farinha, água, ovos e óleo, com recheio de frango desfiado e temperado"
    },

    {
        nome: "Mini torta de morango",
        categoria: "Tortas",
        preco: 4.00,
        descricao: "Massa crocante com farinha, açúcar e manteiga"
    },
    {
        nome: "Cookie",
        categoria: "Doces",
        preco: 5.00,
        descricao: "Cookie amanteigado com gotas de chocolate"
    },

    {
        nome: "Sonho",
        categoria: "Pães",
        preco: 6.00,
        descricao: "Sonho fofinho com recheio de creme de confeiteiro"
    },

    {
        nome: "Pão Integral",
        categoria: "Pães",
        preco: 10.00,
        descricao: "Pão feito com grãos e fermentação natural"
    },

    {
        nome: "Café",
        categoria: "Bebidas",
        preco: 6.00,
        descricao: "Uma xícara de café gourmet com ou sem açúcar"
    }

]

//exemplo de var (não recomendado), constante e telefone

telefone = "1234-5678";


//crie uma funcao que sauda o cliente de acordo com o horário que ele entra no site

/*function saudacao() {

    const horario = new Date().getHours();
    //let horario = 23;

    if (horario < 12) {
        alert("Bom dia!");
    } else if (horario < 18) {
        alert("Boa Tarde!");
    } else {
        alert("Boa noite!");
    }
}

saudacao();

*/

// 👋 Uma função que exiba uma mensagem de boas-vindas

const boasVindas = () => "Seja Bem-Vindo!";

console.log(boasVindas());

//🛒 Uma função que calcule o subtotal de itens (receba preço e quantidade)

//arrow function


const subtotal = (preco, quantidade) => preco * quantidade;

console.log(`O subtotal da sua compra é R$ ${subtotal(6.00, 5)}`);



// 🎁 Uma função que calcule desconto (receba valor e percentual de desconto)

function desconto(valor, percentual) {
    let valorDesconto = (valor * percentual) / 100;

    console.log(`O seu desconto é de R$ ${valorDesconto}`);

}

desconto(30, 15);

// 🚚 Uma função que calcule a taxa de entrega baseada na distância

function calcularTaxaEntrega(distancia) {
    if (distancia < 5) {
        console.log("A sua distancia permite frete gratuito");
    } else if (distancia >= 15) {
        console.log("Frete de R$ 15,00");
    }
}

calcularTaxaEntrega(30);

//lógica do campo para pesquisar produtos

document.getElementById("campo-filtro").addEventListener("input", (e) => {
    console.log("digitando", e.target.value)
    const valor = e.target.value.toLowerCase();
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    listagemProdutos
        .filter((produto) => produto.nome.toLowerCase().includes(valor))
        .forEach((produto) => {
            const li = document.createElement("li");
            li.textContent = ` ${produto.nome} - Preço: R$ ${produto.preco} `;
            resultado.appendChild(li);
        });
});