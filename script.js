
const inputAdultos = document.getElementById("adultos");
const inputCriancas = document.getElementById("criancas");
const inputduracao = document.getElementById("duracao");

const resultado = document.getElementById("resultado")


function overcheck() {

    let but = document.getElementById("botao")

    but.style.animationName = "overcheck"
    but.style.animationDuration = "0.5s"
    but.style.animationFillMode = "forwards"

}

function saiu() {

    let off = document.getElementById("botao")

    off.style.animationName = "leaved"
    off.style.animationDuration = "0.3s"


}

function calcular() {

    let click = document.getElementById("botao");

    click.style.animationName = "clicou"
    click.style.animationDuration = "0.2s"
    click.style.animationIterationCount = "1"


    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value ;
    var duracao = inputduracao.value ;

    let qc = carnePP(duracao) * adultos + ( carnePP(duracao) 
     /2 * criancas);
    let cerv = cervejaPP(duracao) * adultos;
    let refris = refriPP(duracao) * adultos + (refriPP(duracao) /2 * criancas);

    let result = document.getElementById("resultado")

    result.style.animationName = "grow"
    result.style.animationDuration = "0.1s"
    result.style.animationFillMode = "forwards"



   var a =resultado.innerHTML = `<p> ${qc}g de Carne</p>`
    var b = resultado.innerHTML += `<p> ${cerv/1000} Litros de Cerveja</p>` 
     var c = resultado.innerHTML += `<p> ${refris/1000} Litros de Refrigerante</p>`  



}

function carnePP(duracao) {

    let carne = 400; 

    if (duracao >= 6 ) {

        carne = 650;

    } return carne;
}


function cervejaPP(duracao) {

    let breja = 1200; 

    if (duracao >= 6 ) {

        breja = 2000;

    } return breja;
}

function refriPP(duracao) {

    let refri = 1000;

    if(duracao >= 6) {

        refri = 1500;

    } return refri



} 