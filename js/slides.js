
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

    let body = document.body;

    //Rodapé
    let alturaFooter = footerMiddle.clientHeight;

    let larguraBody = body.clientWidth;
 
    console.log(larguraBody)
    
    if(larguraBody <= 700){
        footerDois.style.marginTop = '5px';
        footerUm.style.marginTop = '5px';

    } else{
        footerDois.style.marginTop = alturaFooter / 3 + 'px';
        footerUm.style.marginTop = alturaFooter / 4 + 'px';

    }

    
    let alturaAtendimento = atendimento.clientHeight;
    let alturaMenu = menu.clientHeight;
    menu.style.top = alturaAtendimento -4  + 'px';


    let calculoHeahder = alturaAtendimento + alturaMenu;
    content1.style.marginTop = calculoHeahder  + 'px';
  

}