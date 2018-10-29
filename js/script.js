const jogos = document.querySelectorAll("header>div>p");
const hamburguer = document.querySelector("header>div:last-child");

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
function alterarDisplayMenu() {
    const menu = document.querySelector("header>nav");
    const menuItem = document.querySelectorAll("header>nav>a");
    if(menu.style.display == "") {
        menu.style.display = "block";
        menu.style.position = "absolute";
        for(let item of menuItem) {
            item.style.display = "block";
            item.style.margin = "20px 0";
        }
        menu.style.backgroundColor = "white";
        menu.style.right = "0";
        menu.style.top  = "70px";
        menu.style.padding = "20px 40px";
        menu.style.boxShadow = "0 5px 5px #000";
    } else if(menu.style.display == "block"){
        menu.style.display = "";
        menu.style.position = "static";
        for(let item of menuItem) {
            item.style.display = "inline-block";
            item.style.margin = "0";
        }
        menu.style.backgroundColor = "";
        menu.style.right = "";
        menu.style.top  = "";
        menu.style.padding = "";
        menu.style.boxShadow = "";
    }
}

mudarCor();

hamburguer.onclick = alterarDisplayMenu;
setInterval(mudarCor, 300);