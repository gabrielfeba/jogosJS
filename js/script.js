const jogos = document.querySelectorAll("header>div>p");
let contMudaOrdemDasCores = 0;
function mudarCor() {
    for(let letra of jogos) {
        if((contMudaOrdemDasCores % 5) == 0) {
            letra.style.color = "red";
        } else if((contMudaOrdemDasCores % 5) == 1) {
            letra.style.color = "orange";
        } else if((contMudaOrdemDasCores % 5) == 2) {
            letra.style.color = "green";
        } else if((contMudaOrdemDasCores % 5) == 3) {
            letra.style.color = "blue";
        } else if((contMudaOrdemDasCores % 5) == 4) {
            letra.style.color = "violet";
        }
        contMudaOrdemDasCores++;
    }
    contMudaOrdemDasCores--;
}
mudarCor();
setInterval(mudarCor, 300);