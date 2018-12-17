let vetorCores = ['blue', 'yellow', 'red', 'black', 'green'];

function corAleatoria(){
    let indice = Math.floor(Math.random()*5);
    return vetorCores[indice];
}

function parabens(){
    let parabens = document.createElement("h1");
    parabens.innerHTML = "Muito bem ,você acertou todas as cores. Atualize a página para tentar novamente!!";
    parabens.style = `color: ${casas[0].style.backgroundColor}`;
    let body = document.querySelector("body");
    body.appendChild(parabens);

    for (let i = 0; i < casas.length; i++){
        casas[i].onmouseenter = null;
    }

}

function trocarCor(){
    let novaCor = corAleatoria();
    this.style = `background-color: ${novaCor}`;
    if(iguais()){
        parabens();
    }
}

let casas = document.querySelectorAll(".quadradinho");

for (let i = 0; i < casas.length; i++){
    casas[i].onmouseenter = trocarCor;
}

function iguais(){
    if (casas[0].style.backgroundColor == 
        casas[1].style.backgroundColor &&
        casas[1].style.backgroundColor == 
        casas[2].style.backgroundColor &&
        casas[2].style.backgroundColor ==
        casas[3].style.backgroundColor){
            return true;
        }
    return false;
}