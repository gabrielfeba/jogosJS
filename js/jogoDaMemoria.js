const blocos = document.querySelectorAll("section>div");

function girar(event) {
    event.target.parentNode.style.transform = "rotateY(180deg)";
}

for(let bloco of blocos) {
    bloco.onclick = girar;
}