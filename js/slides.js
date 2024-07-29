
let index = 0;
let i;
displayImages();
crateCanvas();
function displayImages() {
    console.log('Trocando imagens...')
    const image = document.getElementsByName("image");
    const images = document.querySelectorAll("img");
    console.log(images[1])
    console.log(images[2])
    console.log(images[3])
    for (i = 0; i < image.length; i++) {
        image[i].style.display = "none";

    }
    index++;

    if (index > image.length) {
        index = 1;
    }

    image[index - 1].style.display = "block";
    image[1].style.src = "fundo_slideteste2.png";
    setTimeout(image, 4000);

}
function crateCanvas() {
    // var largura = window.innerWidth

    // var altura = window.innerHeight
    let footerMiddle = document.getElementById("meioFooter");
    let footerUm = document.getElementById("footerUm");
    let footerDois = document.getElementById("footerDois");

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

}