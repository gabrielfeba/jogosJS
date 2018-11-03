const facebook = document.querySelector("[alt='facebook']").parentNode;
const instagram = document.querySelector("[alt='instagram']").parentNode;
const linkedin = document.querySelector("[alt='linkedin']").parentNode;
const github = document.querySelector("[alt='github']").parentNode;

function abrirFacebook () {
    window.open('https://www.facebook.com/gabrielpheba');
}
function abrirInstagram () {
    window.open('https://www.instagram.com/gabrielfeba/');
}
function abrirLinkedin () {
    window.open('https://www.linkedin.com/in/gabrielfeba/');
}
function abrirGithub () {
    window.open('https://github.com/gabrielfeba ');
}

facebook.onclick = abrirFacebook;
instagram.onclick = abrirInstagram;
linkedin.onclick = abrirLinkedin;
github.onclick = abrirGithub;