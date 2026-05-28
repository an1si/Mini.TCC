// ======================================
// QUIZ
// ======================================

function resposta(opcao){

const resultado =
document.getElementById("resultado");

if(opcao === "certo"){

resultado.innerHTML =
"✅ CORRETO! Refrigerantes possuem muito açúcar.";

resultado.style.color =
"#80ffdb";

}else{

resultado.innerHTML =
"❌ ERRADO! O refrigerante possui maior quantidade de açúcar.";

resultado.style.color =
"#ff758f";

}

}

// ======================================
// BOTÃO PESQUISA
// ======================================

function irPesquisa(){

document.getElementById("forms")
.scrollIntoView({

behavior:"smooth"

});

}

// ======================================
// ALERTA IMPACTOS
// ======================================

function mostrarImpacto(){

alert(
"⚠️ O consumo excessivo de ultraprocessados pode causar obesidade, diabetes, hipertensão e problemas cardiovasculares."
);

}

// ======================================
// EFEITO DIGITAÇÃO
// ======================================

window.onload = function(){

const titulo =
document.getElementById("titulo");

if(titulo){

const texto =
titulo.innerHTML;

titulo.innerHTML = "";

let i = 0;

function digitar(){

if(i < texto.length){

titulo.innerHTML +=
texto.charAt(i);

i++;

setTimeout(digitar,80);

}

}

digitar();

}

};