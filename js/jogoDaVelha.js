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
    }
}
for(let caixa of caixas) {
    caixa.onclick = adicionar;
}