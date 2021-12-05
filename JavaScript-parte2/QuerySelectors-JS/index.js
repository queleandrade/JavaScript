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