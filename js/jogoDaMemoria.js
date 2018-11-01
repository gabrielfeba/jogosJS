const blocos = document.querySelectorAll("section>div");
const blocosFrente = document.querySelectorAll("section>div>div:last-child");
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
function girar(event) {
    event.target.parentNode.style.transform = "rotateY(180deg)";
}

for(let bloco of blocos) {
    bloco.onclick = girar;
}
adicionarFigura();