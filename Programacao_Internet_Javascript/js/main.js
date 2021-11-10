/*var nome = "Jane Fernanda";
var idade = 39;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";

//alert(nome + " tem " + idade + " anos");

alert(idade + idade2);

console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));

alert(frase.replace("Japão", "Brasil"));

console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

var lista = ["maça", "pera", "laranja"];
lista.push("uva");
lista.pop();
alert(lista);
alert(lista[1]);
alert(lista.length);
alert(lista.reverse());
alert(lista);
alert(lista.toString());
alert(lista.toString()[0]);

console.log(lista.join(" - "));

var fruta = {nome: "maça", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor);

var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
console.log(frutas);
alert(frutas[1].nome);

console.log(frutas);*/

/* Estrutura condicional IF/Else
var idade = prompt("Qual sua idade");
if(idade >= 18) {
    alert("Maior de idade");
} else {
    alert("Menor de idade");
}; */

/* Estrutura de repetição While
var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count++;
}; */

/* Estrutura de repetição For 

var count;
for (count = 0; count <= 5; count++) {
    alert (count);
}; */

/* Usando datas
var d = new Date();
alert (d); 
alert (d.getMonth()+1);
alert (d.getMinutes());
alert (d.getDay());
alert (d.getHour());
*/

/*function soma (n1, n2) {
    return n1 + n2;
}*/

/*function setReplace (frase, nome, novo_nome) {
    return frase.replace (nome, novo_nome)
}

alert (soma(5, 10));
alert (setReplace("Vai Japão", "Japão", "Brasil"));

function validaIdade(idade){
    var validar;
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}


var idade = prompt ("Qual a sua idade");
console.log(validaIdade(idade));
*/

function clicou() {
    /*alert("Obrigado por clicar!")*/
    document.getElementById("agradecimento").innerHTML="Obrigado por clicar"
}