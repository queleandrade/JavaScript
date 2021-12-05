//pega os elementos por ID
console.log(document.getElementById("primeiroh1").innerText); //acessa o documento da DOM
console.log(document.getElementById("primeiroh2").innerText); 

//pega os elementos por Tag name
console.log(document.getElementsByTagName("h1"));

//pega os elementos por Class name
console.log(document.getElementsByClassName("classe-primeiroh1"));

//Pegar os elementos por Query selector
console.log(document.querySelector(".classe-primeiroh1").innerHTML); //innerHTML mostra o valor
console.log(document.querySelector("#primeiroh2").innerHTML); //pegando o valor por ID
console.log(document.querySelector("#minha-lista").childNodes); //pega os elementos filhos dessa lista
console.log(document.querySelector("#minha-lista #banana")); //acessando um filho especifico da lista

//pegar os elementos por CreateElement e InsertBefore
//criando um paragrafo depois do h1 e dentro do body

let umNovoElemento = document.createElement("p");

let primeiroh1 = document.querySelector("#primeiroh1")
let elementoPai = document.querySelector("body")

elementoPai.insertBefore(umNovoElemento, primeiroh1)

//pegar os elementos por CreateElement e InsertBefore
//criando um paragrafo depois do h1 e dentro do body
//criando por encadeamento

let umNovoParagrafo = document.createElement("p"); //que elemento quero criar?

let paragrafoDeDentroDaDiv = document.querySelector("div div p")
let elementoPai = document.querySelector("#segundaDiv")

elementoPai.insertBefore(umNovoParagrafo, paragrafoDeDentroDaDiv)
