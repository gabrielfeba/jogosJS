const blocosCostas = document.querySelectorAll("section>div>div:first-child");
const blocosFrente = document.querySelectorAll("section>div>div:last-child");
const retorno = document.querySelector("section>span");

let paraVerificar = [];
let tentativas = 0;
let pares = 0;

function embaralhar(lista) {
    let novaLista = [];
    let i = 0;
    while(i < lista.length) {
        let sortea = Math.floor(Math.random() * lista.length);
        if(novaLista[sortea] == undefined) {
            novaLista[sortea] = lista[i];
            i++;
        }
    }
    return novaLista;
}
function adicionarFigura() {
    let figuras = [
        "https://sc.mogicons.com/c/193.jpg",
        "https://sc.mogicons.com/c/294.jpg",
        "https://sc.mogicons.com/c/196.jpg",
        "https://sc.mogicons.com/c/173.jpg",
        "https://sc.mogicons.com/c/338.jpg",
        "https://sc.mogicons.com/c/203.jpg",
        "https://sc.mogicons.com/c/281.jpg",
        "https://sc.mogicons.com/c/172.jpg",
        "https://sc.mogicons.com/c/202.jpg",
        "https://sc.mogicons.com/c/351.jpg",
        "https://sc.mogicons.com/c/397.jpg",
        "https://sc.mogicons.com/c/360.jpg",
        "https://sc.mogicons.com/c/193.jpg",
        "https://sc.mogicons.com/c/294.jpg",
        "https://sc.mogicons.com/c/196.jpg",
        "https://sc.mogicons.com/c/173.jpg",
        "https://sc.mogicons.com/c/338.jpg",
        "https://sc.mogicons.com/c/203.jpg",
        "https://sc.mogicons.com/c/281.jpg",
        "https://sc.mogicons.com/c/172.jpg",
        "https://sc.mogicons.com/c/202.jpg",
        "https://sc.mogicons.com/c/351.jpg",
        "https://sc.mogicons.com/c/397.jpg",
        "https://sc.mogicons.com/c/360.jpg"
    ];
    figuras = embaralhar(figuras);
    for(let i = 0; i < blocosFrente.length; i++) {
        blocosFrente[i].style.backgroundImage = `url(${figuras[i]})`;
    }
}
function ganhou() {
    retorno.innerHTML = `Você ganhou com ${tentativas} tentativas.`
}
function verificar(bloco) {
    if(paraVerificar != [] && paraVerificar[0] != bloco) {
        paraVerificar[paraVerificar.length] = bloco;
    }
    if(paraVerificar.length == 2) {
        if(paraVerificar[0].querySelector("div:last-child").style.backgroundImage == paraVerificar[1].querySelector("div:last-child").style.backgroundImage) {
            paraVerificar[0].onclick = "";
            paraVerificar[1].onclick = "";
            setTimeout(() => {
                paraVerificar[0].style.opacity = "0";
                paraVerificar[1].style.opacity = "0";
                paraVerificar = [];
                pares++;
                if(pares == 12) {
                    ganhou();
                }
            },500);
        } else {
            setTimeout(() => {
                paraVerificar[0].style.transform = "";
                paraVerificar[1].style.transform = "";
                paraVerificar = [];
            },500);
        }
        tentativas++;
    }
}
function girar(event) {
    if(paraVerificar.length < 2) {
        event.target.parentNode.style.transform = "rotateY(180deg)";
        verificar(event.target.parentNode);
    }
}

for(let bloco of blocosCostas) {
    bloco.onclick = girar;
}
adicionarFigura();