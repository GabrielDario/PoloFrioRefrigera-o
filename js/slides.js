
let index = 0;
displayImages();
crateCanvas();
function displayImages() {
    let i;
    const images = document.getElementsByName("image");

    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";

    }
    index++;

    if (index > images.length) {
        index = 1;
    }

    images[index - 1].style.display = "block";
    setTimeout(displayImages, 4000);

}
function crateCanvas() {
    // var largura = window.innerWidth

    // var altura = window.innerHeight
    let footerMiddle = document.getElementById("meioFooter");
    let footerUm = document.getElementById("footerUm");
    let footerDois = document.getElementById("footerDois");

    let atendimento = document.getElementById("atendimento");
    let menu = document.getElementById("menu");
    let content1 = document.getElementById("content1");

    //Rodapé
    let alturaFooter = footerMiddle.clientHeight;
    footerUm.style.marginTop = alturaFooter / 4 + 'px';
    footerDois.style.marginTop = alturaFooter / 3 + 'px';

    
    let alturaAtendimento = atendimento.clientHeight;
    let alturaMenu = menu.clientHeight;
    menu.style.top = alturaAtendimento -4  + 'px';


    let calculoHeahder = alturaAtendimento + alturaMenu;
    content1.style.marginTop = calculoHeahder  + 'px';
    console.log(calculoHeahder)

}