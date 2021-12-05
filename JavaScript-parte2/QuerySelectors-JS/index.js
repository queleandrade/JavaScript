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

let paragrafoDeDentroDaDiv = document.querySelector("div div p");
let elementoPai = document.querySelector("#segundaDiv");

elementoPai.insertBefore(umNovoParagrafo, paragrafoDeDentroDaDiv);


//inserindo elementos com AppendChild e ParentNode
//inserindo um texto dentro do paragráfo

let umNovoParagrafo = document.createElement("p"); //que elemento quero criar?
let textoNovo = document.createTextNode("Algum exemplo");

umNovoParagrafo.appendChild(textoNovo);
let paragrafoDeDentroDaDiv = document.querySelector("div p");
let elementoPai = document.querySelector("#segundaDiv");

elementoPai.insertBefore(umNovoParagrafo, paragrafoDeDentroDaDiv)

//cria um novo item na lista
let umNovoItemDeLista = document.createElement("li");
//cria o texto
let textoDaLi = umNovoItemDeLista.createTextNode("water");
//adiciona o texto no item da lista
umNovoItemDeLista.appendChild(textoDaLi);
//adiciona o item da lista e seu texto na lista ordenada (ol)
let listaOrdenada = document.getElementsByTagName("ol");

listaOrdenada.appendChild(umNovoItemDeLista);

//Criando e removendo elementos

//let btn1 = document.querySelector('#abnt1');

//function Teste2(){
 //   return console.log("Clicou no bnotão")
//}
//btn1.addEventListener("click", Teste2)

//const clicouEmMm = () => console.log("Clicou para remover")

//let btn2 = document.querySelector("#btn2");
//btn2.addEventListener("click", () => {
  //  clicouEmMm()
    //btn1.removeEventListener("click", Teste2)
//})