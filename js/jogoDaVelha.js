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
        for(let caixa of caixas) {
            caixa.onclick = "";
        }
        setTimeout(() => {
            for(let linha of linhas) {
                linha.style.visibility = "hidden";
            }
            if(quem == "X") {
                retorno.style.color = "blue";
            } else {
                retorno.style.color = "red";
            }
            retorno.style.display = "flex";
            retorno.innerHTML = `'${quem}' GANHOU<button>Começar novamente...</button>`;

            let botao = document.querySelector("button");
            botao.style.fontWeight = "bolder";
            botao.style.marginTop = "12px";
            botao.style.border = "none";
            botao.style.fontSize = "14pt";
            botao.style.borderRadius = "5px";
            botao.style.padding = "10px";
            botao.style.cursor = "pointer";

            botao.onclick = () => {
                contaCliques = 0;
                for(let caixa of caixas) {
                    caixa.innerHTML = "";
                    caixa.onclick = adicionar;
                }
                for(let linha of linhas) {
                    linha.style.visibility = "";
                }
                retorno.innerHTML = "";
                retorno.display = "";
            }
        }, 500);
    } else if(contaCliques == 9) {
        for(let caixa of caixas) {
            caixa.onclick = "";
        }
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