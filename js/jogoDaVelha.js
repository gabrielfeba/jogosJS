const caixas = document.querySelectorAll(".caixa");
contaCliques = 0;

function adicionar(event) {
    if(event.target.innerHTML == "") {
        if((contaCliques % 2) == 0) {
            event.target.innerHTML = "X";
            event.target.style.color = "blue";
        } else {
            event.target.innerHTML = "O";
            event.target.style.color = "red";
        }
        contaCliques++;
        verificar(event.target.innerHTML);
    }
}
function verificar(quem) {
    const retorno = document.querySelector("section>span");
    const linhas = document.querySelectorAll("section>div");
    if((caixas[0].innerHTML != "" && caixas[0].innerHTML == caixas[1].innerHTML && caixas[1].innerHTML == caixas[2].innerHTML) || (caixas[3].innerHTML != "" && caixas[3].innerHTML == caixas[4].innerHTML && caixas[4].innerHTML == caixas[5].innerHTML) || (caixas[6].innerHTML != "" && caixas[6].innerHTML == caixas[7].innerHTML && caixas[7].innerHTML == caixas[8].innerHTML) || (caixas[0].innerHTML != "" && caixas[0].innerHTML == caixas[3].innerHTML && caixas[3].innerHTML == caixas[6].innerHTML) || (caixas[1].innerHTML != "" && caixas[1].innerHTML == caixas[4].innerHTML && caixas[4].innerHTML == caixas[7].innerHTML) || (caixas[2].innerHTML != "" && caixas[2].innerHTML == caixas[5].innerHTML && caixas[5].innerHTML == caixas[8].innerHTML) || (caixas[0].innerHTML != "" && caixas[0].innerHTML == caixas[4].innerHTML && caixas[4].innerHTML == caixas[8].innerHTML) || (caixas[2].innerHTML != "" && caixas[2].innerHTML == caixas[4].innerHTML && caixas[4].innerHTML == caixas[6].innerHTML)) {
       setTimeout(() => {
            for(let linha of linhas) {
                linha.style.visibility = "hidden";
            }
            if(quem == "X") {
                retorno.style.color = "blue";
            } else {
                retorno.style.color = "red";
            }
            retorno.style.display = "block"
            retorno.innerHTML = `${quem} GANHOU`;
        }, 500);
    } else if(contaCliques == 9) {
        setTimeout(() => {
            for(let linha of linhas) {
                linha.style.visibility = "hidden";
            }
            retorno.style.display = "block";
            retorno.innerHTML = `DEU VELHA`;
        }, 500);
    }
}
for(let caixa of caixas) {
    caixa.onclick = adicionar;
}